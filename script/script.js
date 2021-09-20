/*MAP SETUP*/
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2JiMDhjMS1jODcyLTQxYWQtYmJiOC1hNTUyNDE0Zjg2N2YiLCJpZCI6NjQ3MDIsImlhdCI6MTYyOTQyMjY0OX0.XrBfYMVmvrlNeNuAdbcCyVHJ44KMq_yCGptHtZ1F9VY';
const extent = Cesium.Rectangle.fromDegrees(112.921124550164,-43.7429686004967,153.660861,-9.14118954253052);//(W,S,E,N)
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

const osm = new Cesium.OpenStreetMapImageryProvider({
	// url:'https://a.tile.openstreetmap.org/'
	// url:'http://tile.stamen.com/watercolor'
	// url:'http://tile.stamen.com/toner-background'
	// url:'https://tile.stamen.com/toner-background'
	url:'https://{s}.basemaps.cartocdn.com/light_nolabels'
	// url:'mapbox://styles/mapbox/light-v10'
});
// Cesium.OpenStreetMapImageryProvider({url : 'https://a.tile.openstreetmap.org/'})
const viewer = new Cesium.Viewer('cesiumContainer', {
	// imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	imageryProvider: osm,
	// imageryProvider: false,
	// terrainProvider: Cesium.createWorldTerrain(),
	timeline: false,
	animation: false,
	geocoder: false,
	baseLayerPicker: false,////////////////////////
	sceneModePicker: false,
	navigationHelpButton: false,
	homeButton: false,
	fullscreenButton: false,
	skyBox: false,

	// imageryProvider: Cesium.createWorldImagery({
	// 	style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
	// }),

	// selectionIndicator : false,
	// infoBox : false,

	// sceneMode: Cesium.SceneMode.SCENE2D,
	// mapMode2D: Cesium.MapMode2D.ROTATE,
});

let localities = new Cesium.CustomDataSource("localities")
let lgas = new Cesium.CustomDataSource("lgas")
let stateDivisions = new Cesium.CustomDataSource("stateDivisions")
let federal = new Cesium.CustomDataSource("federal")
let zones = new Cesium.CustomDataSource("zones")
let broadcast = new Cesium.CustomDataSource("broadcast")

viewer.dataSources.add(localities);
viewer.dataSources.add(lgas);
viewer.dataSources.add(stateDivisions);
viewer.dataSources.add(federal);
viewer.dataSources.add(zones);
viewer.dataSources.add(broadcast);


//viewer.scene.globe.depthTestAgainstTerrain = true;//https://community.cesium.com/t/render-polygons-on-ground/7096//2109101041

lgas.show = false;
stateDivisions.show = false;
federal.show = false;
// zones.show = true;
zones.show = false;
broadcast.show = false;
// localities.show = false;
/*MAP SETUP*/

/*GLOBAL VARIABLES*/
const colours = [[255,0,0],[255,106,0],[255,213,0],[191,255,0],[84,255,0],[0,255,22],[0,255,128],[0,255,234],[0,169,255],[0,63,255],[42,0,255],[148,0,255],[254,0,253],[255,0,147],[255,0,41],[255,64,0],[255,170,0],[233,255,0],[127,255,0],[21,255,0],[0,255,86],[0,255,192],[0,211,255],[0,105,255],[0,0,255],[106,0,255],[212,0,255],[255,0,190],[255,0,83],[255,21,0],[255,128,0],[255,234,0],[169,255,0],[63,255,0],[0,255,43],[0,255,149],[0,254,255],[0,148,255],[0,41,255],[63,0,255],[169,0,255],[255,0,232],[255,0,126],[255,0,20],[255,85,0],[255,191,0],[212,255,0],[106,255,0],[1,255,1],[0,255,107],[0,255,213],[0,190,255],[0,84,255],[21,0,255],[127,0,255],[233,0,255],[255,0,168],[255,0,62],[255,43,0],[255,149,0]]

const stateBox = {//W,S,E,N
	// NSW:[140.999286483091,-37.5052674371251,159.105448901665,-28.157007484129],
	NSW:[140.999286483091,-37.5052674371251,153.660861,-28.157007484129],
	QLD:[137.99596539614,-29.1778849996844,153.555247484414,-9.14118954253052],
	VIC:[140.961865804717,-39.1591796902753,149.976504105742,-33.980636405904],
	TAS:[143.818576726639,-43.7429686004967,148.50313834661,-39.1919773009046],
	SA:[129.001348803946,-38.0625895910114,141.002962544954,-25.996363071308],
	WA:[112.921124550164,-35.134832521502,129.001862438231,-13.6894781340124],
	NT:[129.000484929137,-25.9986044823092,138.001207833215,-10.965900135588],
	ACT:[148.762795689483,-35.920517211112,149.399292549604,-35.1244029421091],

	AUS:[112.921124550164,-43.7429686004967,153.660861,-9.14118954253052]
}

let selections = {
	clear:{},
	lgas:{},
	stateDivisions:{},
	federal:{},
	zones:{},
	broadcast:{},
	localities:{},
}
/*GLOBAL VARIABLES*/

/*FUNCTIONS*/
viewer.trackedEntityChanged.addEventListener((e)=>{
	// console.log(e)
})
viewer.selectedEntityChanged.addEventListener((e)=>{

	viewer.trackedEntity = undefined;

	/*alpha channel*/
	if(window['polygon'] != undefined){
		let p = window['polygon']
		let rgba = p['_polygon']['_material']['_color']['_value']
		let R = rgba['red']
		let G = rgba['green']
		let B = rgba['blue']
		let nc = new Cesium.Color(R,G,B,0.25)
		p.polygon.material = nc
		p.polygon.outline = false
		// p.polygon.outlineColor = Cesium.Color.BLACK
	}
	/*alpha channel*/
	
	if(e == undefined){
		let b = stateBox[$('.stateSelect').val()];

		$('.areaFocus').val('clear')

		viewer.camera.flyTo({
			destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
		});
		return false
	}else{

		/*selection indicator*/
		switch(!e['_polygon']){
			case false: $('.cesium-viewer-selectionIndicatorContainer').addClass('displayNone'); break;
			case true:
			setTimeout(()=>{
				$('.cesium-viewer-selectionIndicatorContainer').removeClass('displayNone')
			},250);
			break;
		}
		/*selection indicator*/

		let id = e['_id'], name = e['_name'], owner = e['entityCollection']['_owner']['_name']

		switch(owner){
			case 'lgas':
			case 'stateDivisions':
			case 'federal':
			case 'zones':
			case 'broadcast':
			
			$('.areaFocus').val(id)
			
			let b = e['_boundingBox']
			
			/*alpha channel*/
			let rgba = e['_polygon']['_material']['_color']['_value']
			let R = rgba['red']
			let G = rgba['green']
			let B = rgba['blue']
			let nc = new Cesium.Color(R,G,B,0.5)

			window['polygon'] = e
			e.polygon.material = nc
			e.polygon.outline = true
			// e.polygon.outlineColor = Cesium.Color.RED
			// e.polygon.outlineColor = new Cesium.Color(0,1,0,1)
			/*alpha channel*/
			
			viewer.camera.flyTo({
				destination : Cesium.Rectangle.fromDegrees(b['W'],b['S'],b['E'],b['N'])
			});

			break;			
		}
	}
})

const toTitleCase = (str)=>{
	return str.replace(
		/\w\S*/g,
		(txt)=>{
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

const wordWrap = (str)=>{

	str = toTitleCase(str)

	let words = str.split(' ')
	let len = words.length
	let out;

	if(len > 1){

		let parity = len % 2;

		let lo = Math.floor(len / 2) - 1;
		let hi = Math.ceil(len / 2) - 1;

		let a = words[0]
		let aa = words[0]
		let b = '';
		let bb = '';

		for(let i = 1; i < len; i++){

			if(i <= lo){
				a += ` ${words[i]}`
				aa += ` ${words[i]}`
			}
			if(i == hi && parity == 1){
				aa += ` ${words[i]}`
				bb += `${words[i]}`
			}
			if(i > hi){
				b += ` ${words[i]}`
				bb += ` ${words[i]}`
			}
		}

		if(Math.abs(a.length - bb.length) < Math.abs(aa.length - b.length)){
			out = `${a}\n${bb}`;
		}else{
			out = `${aa}\n${b}`;
		}
	}else{
		// console.log(toTitleCase(str))
		return toTitleCase(str)
	}

	return out.replace(/\n /g,'\n')
}

const numberWithCommas = (x)=>{
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const decimalise = (val,dec)=>{	
	let multiplier = Number(`1e${dec}`)
	let result = Math.round(Number(val) * multiplier) / multiplier
	return numberWithCommas(result)
}

const listSelections = (a)=>{
	// console.log(a)
	if(a === null || a == 'clear' || a == 'deselect'){
		$('.areaSelect').prop('disabled',false);
		$('.areaFocus').prop('disabled',true).val('clear');//
	}else{
	
		let s = Object.keys(selections[a]).sort();
		let d;

		switch(a){
			case 'lgas': d = 'LGA'; break;
			case 'stateDivisions':d = 'Electorate'; break;
			case 'federal':d = 'Electorate'; break;
			case 'zones':d = 'Zone'; break;
		}

		$('.areaFocus').html(`
			<option selected hidden value="clear" id="dynamicOption">Select ${d}</option>
			<option value="deselect" id="clearAreaSelection">None</option>
		`)
		
		for(let i in s){
			$('.areaFocus').append(`<option value="${selections[a][s[i]]}">${toTitleCase(s[i])}</option>`)
		}

		$('.areaSelect, .areaFocus').prop('disabled',false);
	}
};

/*ENTITY FUNCTIONS*/
const loadLocalities = (state)=>{
	let propName = `localities_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/localities/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response,
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendLocalities(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendLocalities(window[propName],state)
	}
};

const appendLocalities = (o,state)=>{
	// console.log(o.length)
	for(let i in o){
		let description = `Population: ${numberWithCommas(o[i]['population'])}`
		let colour = Cesium.Color.GREEN;
		let pixelSize = 5;
		switch(true){
			case Number(o[i]['population']) >= 12e3:
			colour = Cesium.Color.RED;
			pixelSize = 15;
			break;
			
			case Number(o[i]['population']) >= 1500:
			colour = Cesium.Color.BLUE;
			pixelSize = 10;
			break;
		}

		localities.entities.add({
			name: o[i]['locality'],
			description: description,
			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat'],500),
			point: {
				pixelSize : pixelSize,
				color : colour,
				outlineColor : Cesium.Color.WHITE,
				outlineWidth : 2,
				translucencyByDistance: new Cesium.NearFarScalar(100000, 1, 5000000, 0),
				depthTestAgainstTerrain: false,
			},
			label: {
				text: o[i]['locality'],
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// style: Cesium.LabelStyle.FILL,
				// outlineWidth : 0,
				fillColor: Cesium.Color.BLACK,
				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
				pixelOffset : new Cesium.Cartesian2(0, -9),
				scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(100000, 1, 5000000, 0),
				depthTestAgainstTerrain: false,
			},
			// boundingBox: {W:W,E:E,S:S,N:N}
		})
		let guid = localities['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = lgas['_entityCollection']['_entities']['_array'][i]
		selections['localities'][o[i]['locality']] = guid
	}
	// viewer.zoomTo(viewer.entities);

	// console.log(selections)
	listSelections($('.areaSelect').val())
};

const loadLGAs = (state)=>{
	let propName = `lgas_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/lgas/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendLGAs(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendLGAs(window[propName],state)
	}
}
// let repNames = {}
const appendLGAs = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let LGA_NAME

		if(o[i]['properties']['NSW_LGA__2']){
			LGA_NAME = o[i]['properties']['NSW_LGA__2']
		}else if(o[i]['properties']['QLD_LGA__2']){
			LGA_NAME = o[i]['properties']['QLD_LGA__2']
		}else{
			LGA_NAME = o[i]['properties']['LGA_NAME']
		}

		/**/
		// if(!repNames[LGA_NAME]){
		// 	repNames[LGA_NAME] = 1
		// }else{
		// 	repNames[LGA_NAME] ++
		// }
		/**/

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		
		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		lgas.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 1000),
			label: {
				text: wordWrap(LGA_NAME),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.5, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})

		let guid = lgas['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = lgas['_entityCollection']['_entities']['_array'][i]
		selections['lgas'][LGA_NAME] = guid
	}
	loadLocalities(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }
}

/***/
const loadStateDivisions = (state)=>{
	let propName = `stateDivisions_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/statedivisions/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendStateDivisions(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendStateDivisions(window[propName],state)
	}
}
let repNames = {}
const appendStateDivisions = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let NAME = o[i]['properties']['NAME']
		
		/**/
		// if(!repNames[NAME]){
		// 	repNames[NAME] = 1
		// }else{
		// 	repNames[NAME] ++
		// }
		/**/

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		
		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		stateDivisions.entities.add({
			name: `State Electorate of ${toTitleCase(NAME)}`,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 5000),
			label: {
				text: wordWrap(NAME),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.25, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})

		let guid = stateDivisions['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = stateDivisions['_entityCollection']['_entities']['_array'][i]
		selections['stateDivisions'][NAME] = guid
	}
	loadLGAs(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }
}
/***/

const loadFederal = (state)=>{
	let propName = `federal_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/federal/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(()=>{
			appendFederal(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendFederal(window[propName],state)
	}
}

const appendFederal = (o,state)=>{

	let thisCol = 0;
	// console.log(o.length)
	for(let i in o){

		let E_div_numb = o[i]['properties']['E_div_numb']
		let Elect_div = o[i]['properties']['Elect_div']
		let Numccds = o[i]['properties']['Numccds']
		let Actual = o[i]['properties']['Actual']
		let Projected = o[i]['properties']['Projected']
		let Total_Popu = o[i]['properties']['Total_Popu']
		let Australian = o[i]['properties']['Australian']
		let Area_SqKm = o[i]['properties']['Area_SqKm']
		let Sortname = o[i]['properties']['Sortname']
		let coords = o[i]['geometry']['coordinates'][0]
		let description = `Area:&nbsp;${decimalise(Area_SqKm,2)}&nbsp;km<sup>2</sup>`
		let boundary = []

		let r = colours[thisCol][0] / 255
		let g = colours[thisCol][1] / 255
		let b = colours[thisCol][2] / 255
		let colour = new Cesium.Color(r,g,b,0.25)

		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		thisCol++;
		if(thisCol >= colours.length - 1){
			thisCol = 0;
		}

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		federal.entities.add({
			name: `Federal Electorate of ${Elect_div}`,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height: 0,
				material : colour,
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 5000),
			label: {
				text: Elect_div,
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.25, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N},
			colour: colour
		})
		let guid = federal['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = federal['_entityCollection']['_entities']['_array'][i]
		selections['federal'][Elect_div] = guid
	}
	loadStateDivisions(state)
	// console.log(o)
	// console.log(viewer.dataSourceDisplay.ready)
}

const loadZones = (state)=>{
	let propName = `zones_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/zones/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendZones(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendZones(window[propName],state)
	}
}

const appendZones = (o,state)=>{
	// console.log(o.length)
	for(let i in o){

		let zoneName = o[i]['properties']['id']
		let population = o[i]['properties']['population']
		let localities = o[i]['properties']['localities']
		let colour = o[i]['properties']['colour']

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		//WSEN
		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		zones.entities.add({
			name: zoneName,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.25),
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: zoneName.replace(' - ',`\n`),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 2, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(10000, 0, 5000000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})
		
		let guid = zones['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = zones['_entityCollection']['_entities']['_array'][i]
		selections['zones'][zoneName] = guid
	}
	loadFederal(state)
	// console.log(o)
}

const loadBroadcast = (state)=>{
	let propName = `broadcast_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/broadcast/${state}.json`,{
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json())
		.then((response) => {
			Object.defineProperty(window, propName, {
				value: response['features'],
				configurable: false,
				writable: false
			})
		})
		.then(() => {
			appendBroadcast(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendBroadcast(window[propName],state)
	}
}

const appendBroadcast = (o,state)=>{
	// console.log(o.length)
	for(let i in o){

		let id = o[i]['properties']['id']
		let people = o[i]['properties']['people']
		let households = o[i]['properties']['households']
		let colour = o[i]['properties']['colour']

		let description = `People:&nbsp;${numberWithCommas(people)}<br>Households:&nbsp;${numberWithCommas(households)}`

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		//WSEN
		let W = 180;//lower lon
		let E = -180;//higher lon
		let S = 90;//lower lat
		let N = -90;//higher lat

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])

			if(coords[i][0] < W){W = coords[i][0]}
			if(coords[i][0] > E){E = coords[i][0]}
			if(coords[i][1] < S){S = coords[i][1]}
			if(coords[i][1] > N){N = coords[i][1]}
		}

		let midLat = (S + N) / 2
		let midLon = (W + E) / 2

		broadcast.entities.add({
			name: id,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.25),
				outline : false,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: id.replace(' - ',`\n`),
				// style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				// outlineWidth : 2,
				fillColor: Cesium.Color.BLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 2, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(10000, 0, 5000000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})
		
		let guid = broadcast['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = broadcast['_entityCollection']['_entities']['_array'][i]
		selections['broadcast'][id] = guid
	}
	loadZones(state)
	// console.log(o)
}
/*ENTITY FUNCTIONS*/

const baseSelect = (e)=>{
	console.log(viewer.imageryLayers)
}

const stateSelect = (e)=>{
	
	let v = e.target.value;
	let b = stateBox[v];
	
	window['currentEntities'] = {};
	
	localities.entities.removeAll();
	lgas.entities.removeAll();
	zones.entities.removeAll();
	federal.entities.removeAll();

	selections['lgas'] = {}
	selections['stateDivisions'] = {}
	selections['federal'] = {}
	selections['zones'] = {}
	selections['broadcast'] = {}
	selections['localities'] = {}

	if(v === 'AUS'){
		e.target.value = 'clear';
		$('#clearStateSelection').html('None')
		$('.areaSelect').prop('disabled',true);
		$('.areaFocus').prop('disabled',true).val('clear');//
		// $('option[value="AUS"]').prop('disabled',true);
	}else{
		// loadZones(v);
		loadBroadcast(v);
		// $('option[value="AUS"]').prop('disabled',false);
		$('#clearStateSelection').html('Clear Selection')
	}

	viewer.camera.flyTo({
		destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
	});
}


const areaSelect = (e)=>{

	let v = e.target.value;
	let is_lgas = v == 'lgas'
	let is_stateDivisions = v == 'stateDivisions'
	let is_federal = v == 'federal'
	let is_zones = v == 'zones'
	let is_broadcast = v == 'broadcast'
	
	if(v == 'deselect'){
		e.target.value = 'clear';
		$('#clearDivisionSelection').html('None')
	}else{
		$('#clearDivisionSelection').html('Clear Selection')
	}
		
	lgas.show = is_lgas;
	stateDivisions.show = is_stateDivisions;
	federal.show = is_federal;
	zones.show = is_zones;
	broadcast.show = is_broadcast;		
	viewer.selectedEntity = undefined;

	listSelections(v);

	let b = stateBox[$('.stateSelect').val()];
	viewer.camera.flyTo({
		destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
	});

	switch(true){
		case is_lgas: $('#dynamicOption').html('Select LGA'); break;
		case is_stateDivisions: $('#dynamicOption').html('Select Electorate'); break;
		case is_federal: $('#dynamicOption').html('Select Electorate'); break;
		case is_zones: $('#dynamicOption').html('Select Zone'); break;
		case is_broadcast: $('#dynamicOption').html('Select Market'); break;
		default: $('#dynamicOption').html('Select Division');
	}
}

/*
for switching imagery provider
https://sandcastle.cesium.com/index.html?src=Imagery%2520Layers%2520Manipulation.html
https://cesium.com/learn/cesiumjs/ref-doc/BaseLayerPicker.html
https://stackoverflow.com/questions/58490396/how-to-change-a-cesiumjs-viewers-baselayer-url
https://cesium.com/learn/cesiumjs/ref-doc/ArcGisMapServerImageryProvider.html
https://cesium.com/learn/cesiumjs/ref-doc/OpenStreetMapImageryProvider.html
https://cesium.com/learn/cesiumjs/ref-doc/ImageryProvider.html
*/

const areaFocus = (e)=>{
	let v = e.target.value;

	if(v == 'deselect'){
		e.target.value = 'clear';
		$('#clearAreaSelection').html('None')

		viewer.trackedEntity = undefined;
		viewer.selectedEntity = undefined;
	}else{
		$('#clearAreaSelection').html('Clear Selection')
	
		let b = window['currentEntities'][v]['boundingBox']
		viewer.selectedEntity = window['currentEntities'][v]
		viewer.camera.flyTo({
			destination : Cesium.Rectangle.fromDegrees(b['W'],b['S'],b['E'],b['N'])
		});
	}
}

const viewControl = (e)=>{
	let x = $(e.target)	
	let menu = $('.localityFocus')
	localities.show = !localities.show;
	menu.prop('disabled',(!menu.prop('disabled')))
	if(x.hasClass('layerOff')){
		x.removeClass('layerOff')
	}else{
		x.addClass('layerOff')
	}
}
/*FUNCTIONS*/

/*DOM*/
$('.cesium-viewer-toolbar').append(`

	<!--<select class="cesium-button baseSelect">
		<option value="1">Simple Map</option>
		<option value="2">Satellite</option>
	</select>-->

	<select class="cesium-button stateSelect" name="state" id="state">
		<option hidden selected value="clear">State / Territory</option>
		<option value="AUS" id="clearStateSelection">None</option>
		<option disabled value="NSW">New South Wales</option>
		<option value="QLD">Queensland</option>
		<option disabled value="VIC">Victoria</option>
		<option disabled value="TAS">Tasmania</option>
		<option disabled value="SA">South Australia</option>
		<option disabled value="WA">Western Australia</option>
		<option disabled value="NT">Northern Territory</option</option>
		<option disabled value="ACT">ACT</option>
	</select>

	<select disabled class="cesium-button areaSelect">
		<option selected hidden value="clear">Division Type</option>
		<option value="deselect" id="clearDivisionSelection">None</option>
		<option value="lgas">LGAs</option>
		<option value="stateDivisions">State Electorates</option>
		<option value="federal">Federal Electorates</option>
		<option value="zones">News Coverage Zones</option>
		<option value="broadcast">Aggregated Broadcast Markets</option>
	</select>

	<select disabled class="cesium-button areaFocus">
		<option selected hidden value="clear" id="dynamicOption">Select Division</option>
	</select>

	<button class="cesium-button viewControl localities layerOn" id="localities">Localities&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>

	<!--<select class="cesium-button localityFocus">
		<option selected disabled value="clear">Select Locality</option>
	</select>-->
`)
/*DOM*/

/*BINDINGS*/
$('.baseSelect').change(baseSelect);
$('.stateSelect').change(stateSelect);
// $('.areaSelect').bind('change mouseover mouseout touchstart touchend',areaSelect);
$('.areaSelect').change(areaSelect);
$('.viewControl').click(viewControl);
$('.areaFocus').change(areaFocus)

$(window).keyup((e)=>{
	if(e.keyCode == 27){
		viewer.trackedEntity = undefined;
		viewer.selectedEntity = undefined;
	}
})
/*BINDINGS*/