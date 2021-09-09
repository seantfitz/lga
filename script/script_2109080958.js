// const extent = Cesium.Rectangle.fromDegrees(117.940573,-29.808406,118.313421,-29.468825);
// const extent = Cesium.Rectangle.fromDegrees(W,S,E,N);
// const extent = Cesium.Rectangle.fromDegrees(100,-45,160,-10);
const extent = Cesium.Rectangle.fromDegrees(80,-30,180,-20);

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

	selectionIndicator : false,
	// infoBox : false,

	sceneMode: Cesium.SceneMode.SCENE2D,
	// mapMode2D: Cesium.MapMode2D.ROTATE,
});

// const collectionP = new Cesium.EntityCollection()

// let postcodes = new Cesium.CustomDataSource("postcodes")
let sites = new Cesium.CustomDataSource("sites")
let lgas = new Cesium.CustomDataSource("lgas")
let agg = new Cesium.CustomDataSource("agg")
let electorates = new Cesium.CustomDataSource("electorates")

// viewer.dataSources.add(postcodes); postcodes.show = false

viewer.dataSources.add(lgas);
viewer.dataSources.add(agg);
viewer.dataSources.add(electorates);
viewer.dataSources.add(sites);

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

// const loadPostcodes = (state)=>{console.log('loadPostcodes')
// 	let info = fetch(`script/postcodes/${state}.json`,{
// 		method: 'get',
// 		headers: {'Content-Type': 'application/json'}
// 	})
// 	.then((response) => response.json())
// 	.then((response) => {
// 		appendPostcodes(response)
// 	})
// 	.catch(err => console.error('Caught error: ', err))
// };

// const appendPostcodes = (o)=>{
// 	for(let i in o){
// 		let description = `
// 			${o[i]['SA4_NAME_2016']}, ${o[i]['state']}<br><br>
// 			${toTitleCase(o[i]['localities'].toString().replace(/,/g,', '))}
// 		`
// 		postcodes.entities.add({
// 			name: o[i]['postcode'],
// 			description: description,
// 			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat']),
// 			point: {
// 				pixelSize : 5,
// 				color : Cesium.Color.RED,
// 				outlineColor : Cesium.Color.WHITE,
// 				outlineWidth : 2,
// 			},
// 			label: {
// 				text: o[i]['postcode'],
// 				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
// 				outlineWidth : 2,
// 				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
// 				pixelOffset : new Cesium.Cartesian2(0, -9),
// 				scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
// 			}
// 		})
// 	}
// 	// viewer.zoomTo(viewer.entities);
// };

const loadSites = (state)=>{console.log('loadSites')
	let info = fetch(`script/sites/${state}.json`,{
		method: 'get',
		headers: {'Content-Type': 'application/json'}
	})
	.then((response) => response.json())
	.then((response) => {
		appendSites(response)
	})
	.catch(err => console.error('Caught error: ', err))
};

const appendSites = (o)=>{
	for(let i in o){
		let description = `Population: ${o[i]['population']}`

		sites.entities.add({
			name: o[i]['locality'],
			description: description,
			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat']),
			point: {
				pixelSize : 5,
				color : Cesium.Color.RED,
				outlineColor : Cesium.Color.WHITE,
				outlineWidth : 2,
			},
			label: {
				text: o[i]['locality'],
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
				pixelOffset : new Cesium.Cartesian2(0, -9),
				scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
				// scaleByDistance: new Cesium.NearFarScalar(50000, 1, 2500000, 0),
			}
		})
	}
	// viewer.zoomTo(viewer.entities);
};

const loadLGAs = (state)=>{console.log('loadLGAs')
	let info = fetch(`script/lgas/${state}.json`,{
		method: 'get',
		headers: {'Content-Type': 'application/json'}
	})
	.then((response) => response.json())
	.then((response) => {
		appendLGAs(response['features'])
	})
	.catch(err => console.error('Caught error: ', err))
}

const appendLGAs = (o)=>{

	for(let i in o){

		let LGA_NAME

		if(o[i]['properties']['NSW_LGA__2']){
			LGA_NAME = o[i]['properties']['NSW_LGA__2']
		}else if(o[i]['properties']['QLD_LGA__2']){
			LGA_NAME = o[i]['properties']['QLD_LGA__2']
		}else{
			LGA_NAME = o[i]['properties']['LGA_NAME']
		}

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])
		}

		lgas.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color.WHITE.withAlpha(0.25),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			},
			label: {
				text: LGA_NAME,
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				// verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
				// pixelOffset : new Cesium.Cartesian2(0, -9),
				// scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
			}
		})
	}
	// viewer.zoomTo(viewer.dataSources.lgas)// viewer.camera.flyTo(viewer.dataSources.lgas)
	// console.log(lgas.entities)
	loadSites('QLD')
}

const loadAgg = (state)=>{console.log('loadAgg')
	let propName = `aggregated_${state}`
	if(typeof(window[propName]) !== 'object'){
		console.log('NO')
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
		// .then((response) => {
		.then(() => {
			// appendAgg(response['features'])
			appendAgg(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		console.log('YES')
		appendAgg(window[propName],state)
	}
}

const appendAgg = (o,state)=>{

	for(let i in o){

		let groupName = o[i]['properties']['id']
		let population = o[i]['properties']['population']
		let sites = o[i]['properties']['sites']
		let colour = o[i]['properties']['colour']

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])
		}

		agg.entities.add({
			name: groupName,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color[colour].withAlpha(0.5),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			}
		})
	}
	// loadLGAs('QLD')
	// loadLGAs(state)
}

/******************************/

const loadElectorates = (state)=>{console.log('loadElectorates')
	let propName = `electorates_${state}`
	if(typeof(window[propName]) !== 'object'){
		console.log(`${propName} does not exist yet`)
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
		console.log(`${propName} was prepared earlier`)
		appendElectorates(window[propName],state)
	}
}

const appendElectorates = (o,state)=>{
console.log(o.length)
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


		let colour = 'PINK'// o[i]['properties']['colour']

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []

		let description = `
			Area:&nbsp;${decimalise(Area_SqKm,2)}&nbsp;km<sup>2</sup>
		`

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])
		}

		electorates.entities.add({
			name: `Electorate of ${Elect_div}`,
			description: description,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height: 0,
				material : Cesium.Color[colour].withAlpha(0.5),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			}
		})
	}
	// loadAgg('QLD')
	loadAgg(state)
}


const load = ()=>{console.log('load')
	// loadPostcodes('NSW')
	// loadSites('QLD')
	// loadLGAs('QLD')
	// loadAgg('QLD')
	loadElectorates('QLD')
}
setTimeout(load,500)


/*
REGIONAL TOP 1-13
Gold Coast
Sunshine Coast
Newcastle
Wollongong
Geelong
Ipswich
Townsville
Cairns
Toowoomba
Ballarat
Bendigo
Albury-Wodonga
Launceston

REGIONAL 14-23
Mackay
Rockhampton
Bunbury
Coffs Harbour
Bundaberg
Wagga Wagga
Hervey Bay
Mildura-Wentworth
Shepparton-Mooroopna
Tweed Heads

REGIONAL 24-33
Port Macquarie
Gladstone
Tamworth
Traralgon-Morwell
Orange
Bowral-Mittagong
Busselton
Dubbo
Warragul-Drouin
Geraldton

REGIONAL 34-43
Nowra-Bomaderry
Bathurst
Warrnambool
Albany
Devonport
Kalgoorlie-Boulder
Mount Gambier
Lismore
Nelson Bay
Maryborough

REGIONAL 44-53
Burnie-Wynyard
Alice Springs
Victor Harbor-Goolwa
Ballina
Taree
Morrisset-Cooranbong
Armidale
Goulburn
Whyalla
Gympie
*/

const viewSelect = (e)=>{

	// viewer.entities.removeAll();
	// postcodes.entities.removeAll();
	sites.entities.removeAll();
	lgas.entities.removeAll();
	agg.entities.removeAll();
	electorates.entities.removeAll();
	
	let x = e.target
	console.log(x.value)
	// $('.viewControl').removeClass('off')

	// loadPostcodes(x.value);
	// loadSites(x.value);
	loadElectorates(x.value);
	// if(x.value != 'ACT'){
	// 	loadLGAs(x.value);
	// 	loadAgg(x.value);
	// }
}

const viewControl = (e)=>{
	// console.log(e)
	let x = $(e.target)
	
	console.log(e.target.id)

	if(x.hasClass('layerOff')){
		x.removeClass('layerOff')
	}else{
		x.addClass('layerOff')
	}

	switch(e.target.id){
		// case 'postcodes': postcodes.show = !postcodes.show;
		// break;
		case 'sites': sites.show = !sites.show;
		break;
		case 'lgas': lgas.show = !lgas.show;
		break;
		case 'agg': agg.show = !agg.show;
		break;
		case 'electorates': electorates.show = !electorates.show;
		break;
	}
	// console.log(postcodes)
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

	<!--<button class="cesium-button viewControl layerOff" id="postcodes">Postcodes&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>-->
	<button class="cesium-button viewControl" id="sites">Sites&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>
	<button class="cesium-button viewControl" id="lgas">LGAs&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>
	<button class="cesium-button viewControl" id="agg">Aggregated Regions&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>
	<button class="cesium-button viewControl" id="electorates">Federal Electorates&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>

`)

// $('.viewSelect').change('click',viewSelect);
// $('.viewControl').bind('click',viewControl);

$('.viewSelect').change(viewSelect);
$('.viewControl').click(viewControl);