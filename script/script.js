Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxY2JiMDhjMS1jODcyLTQxYWQtYmJiOC1hNTUyNDE0Zjg2N2YiLCJpZCI6NjQ3MDIsImlhdCI6MTYyOTQyMjY0OX0.XrBfYMVmvrlNeNuAdbcCyVHJ44KMq_yCGptHtZ1F9VY';
// const extent = Cesium.Rectangle.fromDegrees(80,-30,180,-20);//(W,S,E,N)
const extent = Cesium.Rectangle.fromDegrees(90,-30,180,-20);//(W,S,E,N)
// const extent = Cesium.Rectangle.fromDegrees(137,-30,155,-9);

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

const viewer = new Cesium.Viewer('cesiumContainer', {
	imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	// imageryProvider: false,
	// terrainProvider: Cesium.createWorldTerrain(),
	timeline: false,
	animation: false,
	geocoder: false,
	baseLayerPicker: false,
	sceneModePicker: false,
	navigationHelpButton: false,
	// homeButton: false,
	fullscreenButton: false,

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

let electorates = new Cesium.CustomDataSource("electorates")
let lgas = new Cesium.CustomDataSource("lgas")
let aggregated = new Cesium.CustomDataSource("aggregated")
let sites = new Cesium.CustomDataSource("sites")

viewer.dataSources.add(electorates);
viewer.dataSources.add(lgas);
viewer.dataSources.add(aggregated);
viewer.dataSources.add(sites);

//viewer.scene.globe.depthTestAgainstTerrain = true;//https://community.cesium.com/t/render-polygons-on-ground/7096//2109101041

electorates.show = false;
lgas.show = false;
aggregated.show = true;

const colours = [[255,0,0],[255,106,0],[255,213,0],[191,255,0],[84,255,0],[0,255,22],[0,255,128],[0,255,234],[0,169,255],[0,63,255],[42,0,255],[148,0,255],[254,0,253],[255,0,147],[255,0,41],[255,64,0],[255,170,0],[233,255,0],[127,255,0],[21,255,0],[0,255,86],[0,255,192],[0,211,255],[0,105,255],[0,0,255],[106,0,255],[212,0,255],[255,0,190],[255,0,83],[255,21,0],[255,128,0],[255,234,0],[169,255,0],[63,255,0],[0,255,43],[0,255,149],[0,254,255],[0,148,255],[0,41,255],[63,0,255],[169,0,255],[255,0,232],[255,0,126],[255,0,20],[255,85,0],[255,191,0],[212,255,0],[106,255,0],[1,255,1],[0,255,107],[0,255,213],[0,190,255],[0,84,255],[21,0,255],[127,0,255],[233,0,255],[255,0,168],[255,0,62],[255,43,0],[255,149,0]]

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

const loadSites = (state)=>{
	let propName = `sites_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/sites/${state}.json`,{
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
			appendSites(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendSites(window[propName],state)
	}
};

const appendSites = (o,state)=>{
	// console.log(o.length)
	for(let i in o){
		let description = `Population: ${numberWithCommas(o[i]['population'])}`

		sites.entities.add({
			name: o[i]['locality'],
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
			}
		})
	}
	// viewer.zoomTo(viewer.entities);
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
			}
		})
	}
	loadSites(state)
	// console.log(JSON.stringify(repNames))
	// let k = Object.keys(repNames)
	// for(let i in k){
	// 	if(repNames[k[i]] > 1){
	// 		console.log(k[i],repNames[k[i]])
	// 	}
	// }
}

const loadAggregated = (state)=>{
	let propName = `aggregated_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/aggregated/${state}.json`,{
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
			appendAggregated(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendAggregated(window[propName],state)
	}
}

const appendAggregated = (o,state)=>{
	// console.log(o.length)
	for(let i in o){

		let groupName = o[i]['properties']['id']
		let population = o[i]['properties']['population']
		let sites = o[i]['properties']['sites']
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

		aggregated.entities.add({
			name: groupName,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.25),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			},
			position: Cesium.Cartesian3.fromDegrees(midLon, midLat, 250000),
			label: {
				text: groupName.replace(' - ',`\n`),
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				fillColor: Cesium.Color.SKYBLUE,
				scaleByDistance: new Cesium.NearFarScalar(50000, 2, 5000000, 0.5),
				translucencyByDistance: new Cesium.NearFarScalar(10000, 0, 5000000, 1),
				depthTestAgainstTerrain: false,
			}
		})
	}
	loadLGAs(state)
}

/******************************/

const loadElectorates = (state)=>{
	let propName = `electorates_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/electorates/${state}.json`,{
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
			appendElectorates(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendElectorates(window[propName],state)
	}
}

const appendElectorates = (o,state)=>{

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

		electorates.entities.add({
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
			}
		})
	}
	loadAggregated(state)
}

const viewSelect = (e)=>{
	sites.entities.removeAll();
	lgas.entities.removeAll();
	aggregated.entities.removeAll();
	electorates.entities.removeAll();
	loadElectorates(e.target.value);
}

const viewControl = (e)=>{
	let x = $(e.target)	
	sites.show = !sites.show;
	if(x.hasClass('layerOff')){
		x.removeClass('layerOff')
	}else{
		x.addClass('layerOff')
	}
}

const boundarySelect = (e)=>{
	switch(e.target.value){
		case 'aggregated': aggregated.show = true; lgas.show = false; electorates.show = false; break;
		case 'lgas': aggregated.show = false; lgas.show = true; electorates.show = false; break;
		case 'electorates': aggregated.show = false; lgas.show = false; electorates.show = true; break;
	}
}

$('.cesium-viewer-toolbar').append(`
	<select class="cesium-button viewSelect" name="state" id="state">
		<option value="QLD">QLD</option>
		<option value="NSW">NSW</option>
		<option value="VIC">VIC</option>
		<option value="TAS">TAS</option>
		<option value="SA">SA</option>
		<option value="WA">WA</option>
		<option value="NT">NT</option>
		<option value="ACT">ACT</option>
	</select>

	<select class="cesium-button boundarySelect">
		<option value="aggregated">News Zones</option>
		<option value="lgas">LGAs</option>
		<option value="electorates">Federal Electorates</option>
	</select>

	<button class="cesium-button viewControl sites layerOn" id="sites">Towns&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>
`)

$('.viewSelect').change(viewSelect);
$('.boundarySelect').change(boundarySelect);
$('.viewControl').click(viewControl);

const load = ()=>{
	loadElectorates('QLD')
}
setTimeout(load,500)