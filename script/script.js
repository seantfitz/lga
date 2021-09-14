Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2JiMDhjMS1jODcyLTQxYWQtYmJiOC1hNTUyNDE0Zjg2N2YiLCJpZCI6NjQ3MDIsImlhdCI6MTYyOTQyMjY0OX0.XrBfYMVmvrlNeNuAdbcCyVHJ44KMq_yCGptHtZ1F9VY';
// const extent = Cesium.Rectangle.fromDegrees(80,-30,180,-20);//(W,S,E,N)
// const extent = Cesium.Rectangle.fromDegrees(90,-30,180,-20);//(W,S,E,N)
const extent = Cesium.Rectangle.fromDegrees(112.921124550164,-43.7429686004967,153.660861,-9.14118954253052);//(W,S,E,N)
// const extent = Cesium.Rectangle.fromDegrees(137,-30,155,-9);

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

// const osm = new Cesium.OpenStreetMapImageryProvider({
// 	// url:'https://a.tile.openstreetmap.org/'
// 	// url:'http://tile.stamen.com/watercolor'
// 	// url:'http://tile.stamen.com/toner-background'
// 	url:'https://tile.stamen.com/toner-background'
// });

// Cesium.OpenStreetMapImageryProvider({url : 'https://a.tile.openstreetmap.org/'})

const viewer = new Cesium.Viewer('cesiumContainer', {
	imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	// imageryProvider: osm,//asset added to account
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

	// imageryProvider: false,
	// imageryProvider: Cesium.createWorldImagery({
	// 	style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
	// }),

	// rectangle: (113.338953078, -43.6345972634, 153.569469029, -10.6681857235),

	// selectionIndicator : false,
	// infoBox : false,

	// sceneMode: Cesium.SceneMode.SCENE2D,
	// mapMode2D: Cesium.MapMode2D.ROTATE,
});

let lgas = new Cesium.CustomDataSource("lgas")
let stateDivisions = new Cesium.CustomDataSource("stateDivisions")
let federal = new Cesium.CustomDataSource("federal")
let zones = new Cesium.CustomDataSource("zones")
let broadcast = new Cesium.CustomDataSource("broadcast")
let localities = new Cesium.CustomDataSource("localities")

viewer.dataSources.add(lgas);
viewer.dataSources.add(stateDivisions);
viewer.dataSources.add(federal);
viewer.dataSources.add(zones);
viewer.dataSources.add(broadcast);
viewer.dataSources.add(localities);

//viewer.scene.globe.depthTestAgainstTerrain = true;//https://community.cesium.com/t/render-polygons-on-ground/7096//2109101041

lgas.show = false;
stateDivisions.show = false;
federal.show = false;
// zones.show = true;
zones.show = false;
broadcast.show = false;
// localities.show = false;

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

const toTitleCase = (str)=>{
	return str.replace(
		/\w\S*/g,
		(txt)=>{
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

const numberWithCommas = (x)=>{
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const decimalise = (val,dec)=>{	
	let multiplier = Number(`1e${dec}`)
	let result = Math.round(Number(val) * multiplier) / multiplier
	return numberWithCommas(result)
}

/****************************************************************************/

const listSelections = (a)=>{console.log(a)

	// if(a === 'clear'){
	if(a === null){
		console.log('what now?')
		$('.areaSelect').prop('disabled',false);
	}else{
	
		let s = Object.keys(selections[a]).sort();
		console.log(selections)
		$('.areaFocus').html('<option selected disabled value="clear" id="dynamicOption">Select Division</option>')
		
		for(let i in s){
			$('.areaFocus').append(`<option value="${selections[a][s[i]]}">${s[i]}</option>`)
		}

		$('.areaSelect, .areaFocus').prop('disabled',false);
	}
};

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

		localities.entities.add({
			name: o[i]['locality'],
			// tooltip: o[i]['locality'],
			description: description,
			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat'],500),
			point: {
				pixelSize : 5,
				color : Cesium.Color.RED,
				outlineColor : Cesium.Color.WHITE,
				outlineWidth : 2,
				translucencyByDistance: new Cesium.NearFarScalar(100000, 1, 5000000, 0),
				depthTestAgainstTerrain: false,
			},
			label: {
				text: o[i]['locality'],
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
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

		// o[i]['boundingBox'] = {W:W,E:E,S:S,N:N}

		lgas.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : colour,
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 1000),
			label: {
				// text: LGA_NAME.replace(/ /g,'\n'),
				text: toTitleCase(LGA_NAME).replace(/ /g,'\n'),
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				fillColor: Cesium.Color.SKYBLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.5, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),
				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})

		let guid = lgas['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = lgas['_entityCollection']['_entities']['_array'][i]
		selections['lgas'][LGA_NAME] = guid

		// o[i]['_id'] = guid
		// o[i]['selectName'] = LGA_NAME
		// console.log(guid)
		// $('.areaFocus').append(`<option value="${guid}">${LGA_NAME}</option>`)
	}
	loadLocalities(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }

	// console.log(window['currentEntities'])
	// console.log(o)
	// console.log(selections)
	// console.log(Object.keys(selections).sort())
	// console.log(o[1]['selectName'],o[1]['_id'])
	// $(`#${o[1]['_id']}`).click()

	// viewer.selectedEntity = $(`#${o[1]['_id']}`);
	// console.log(lgas)
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
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: zoneName.replace(' - ',`\n`),
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				fillColor: Cesium.Color.SKYBLUE,
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
	loadLGAs(state)
	// console.log(o)
}

/******************************/

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
			name: `Electorate of ${Elect_div}`,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height: 0,
				material : colour,
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 5000),
			label: {
				// text: Elect_div.toUpperCase(),
				text: Elect_div,
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				fillColor: Cesium.Color.SKYBLUE,
				// scaleByDistance: new Cesium.NearFarScalar(50000, 1.5, 5000000, 0),
				scaleByDistance: new Cesium.NearFarScalar(50000, 1.25, 5000000, 0.5),
				// translucencyByDistance: new Cesium.NearFarScalar(500, 0.25, 5000000, 1),

				// scaleByDistance: new Cesium.NearFarScalar(50000, 1.5, 5000000, 0),
				translucencyByDistance: new Cesium.NearFarScalar(50000, 0, 100000, 1),

				depthTestAgainstTerrain: false,
			},
			boundingBox: {W:W,E:E,S:S,N:N}
		})
		let guid = federal['_entityCollection']['_entities']['_array'][i]['_id']
		window['currentEntities'][guid] = federal['_entityCollection']['_entities']['_array'][i]
		selections['federal'][Elect_div] = guid
	}
	loadZones(state)
	// console.log(o)
	// console.log(viewer.dataSourceDisplay.ready)
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
		// $('.areaSelect, .areaFocus').prop('disabled',true)//.val('clear');
		$('.areaSelect').prop('disabled',true);
		$('.areaFocus').prop('disabled',true).val('clear');
		$('option[value="AUS"]').prop('disabled',true);
	}else{
		loadFederal(v);
		$('option[value="AUS"]').prop('disabled',false);
	}

	viewer.camera.flyTo({
		destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
	});
}

const viewControl = (e)=>{
	let x = $(e.target)	
	let menu = $('.localityFocus')
	localities.show = !localities.show;
	menu.prop('disabled',(!menu.prop('disabled')))
	// console.log(menu.prop('disabled'))
	if(x.hasClass('layerOff')){
		x.removeClass('layerOff')
	}else{
		x.addClass('layerOff')
	}
}
let selectedArea = 'zones'
const areaSelect = (e)=>{

	// let t = e.type;

	// let change = t == 'change'
	// let mouseover = t =='mouseover'
	// let mouseout = t =='mouseout'
	// let touchstart = t =='touchstart'
	// let touchend = t =='touchend'

	let v = e.target.value;console.log(v)

	// let isLGA = v == 'lgas'
	// let isState = v == 'state'
	// let isFederal = v == 'federal'
	// let isZone = v == 'zones'
	// let isBroadcast = v == 'broadcast'

	let is_lgas = v == 'lgas'
	let is_stateDivisions = v == 'stateDivisions'
	let is_federal = v == 'federal'
	let is_zones = v == 'zones'
	let is_broadcast = v == 'broadcast'

	// switch(true){

	// 	case change:
		
		lgas.show = is_lgas;
		stateDivisions.show = is_stateDivisions;
		federal.show = is_federal;
		zones.show = is_zones;
		broadcast.show = is_broadcast;
		
		selectedArea = v;
		// e.target.value = 'clear';

		viewer.selectedEntity = undefined;

		listSelections(v);

		let b = stateBox[$('.stateSelect').val()];
		viewer.camera.flyTo({
			destination : Cesium.Rectangle.fromDegrees(b[0],b[1],b[2],b[3])
		});
		
	// 	break;

	// 	case touchend:
	// 	case mouseout:
	// 	// e.target.value = 'clear';
	// 	break;

	// 	case touchstart:
	// 	case mouseover:
	// 	// e.target.value = selectedArea;
	// 	break;
	// }

	switch(true){
		case is_lgas: $('#dynamicOption').html('Select LGA'); break;
		case is_federal: $('#dynamicOption').html('Select Electorate'); break;
		case is_zones: $('#dynamicOption').html('Select Zone'); break;
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
	console.log(v)
	console.log(window['currentEntities'][v])
	let b = window['currentEntities'][v]['boundingBox']
	console.log(v,b)
	viewer.selectedEntity = window['currentEntities'][v]



	//https://cesium.com/learn/cesiumjs/ref-doc/Camera.html
	viewer.camera.flyTo({
		// destination : Cesium.Rectangle.fromDegrees(west, south, east, north)
		destination : Cesium.Rectangle.fromDegrees(b['W'],b['S'],b['E'],b['N'])
	});
}

$('.cesium-viewer-toolbar').append(`
	<select class="cesium-button stateSelect" name="state" id="state">
		<option disabled selected value="clear">State / Territory</option>
		<!--<option selected hidden value="clear">State</option>-->
		<option disabled value="AUS">Australia</option>
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
		<option selected disabled value="clear">Division Type</option>
		<option value="lgas">LGAs</option>
		<option hidden value="stateDivisions">State Electorates</option>
		<option value="federal">Federal Electorates</option>
		<option value="zones">News Coverage Zones</option>
		<option hidden value="broadcast">Aggregated Broadcast Markets</option>
	</select>

	<select disabled class="cesium-button areaFocus">
		<option selected disabled value="clear" id="dynamicOption">Select Division</option>
	</select>

	<button class="cesium-button viewControl localities layerOn" id="localities">Localities&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>

	<!--<select class="cesium-button localityFocus">
		<option selected disabled value="clear">Select Locality</option>
	</select>-->
`)

$('.stateSelect').change(stateSelect);

// $('.areaSelect').bind('change mouseover mouseout touchstart touchend',areaSelect);
$('.areaSelect').change(areaSelect);

$('.viewControl').click(viewControl);
$('.areaFocus').change(areaFocus)


// window['currentEntities'] = {};

// const load = ()=>{
// 	loadFederal('QLD')
// }
// setTimeout(load,500)