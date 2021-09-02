// const extent = Cesium.Rectangle.fromDegrees(117.940573,-29.808406,118.313421,-29.468825);
// const extent = Cesium.Rectangle.fromDegrees(W,S,E,N);
// const extent = Cesium.Rectangle.fromDegrees(100,-45,160,-10);
const extent = Cesium.Rectangle.fromDegrees(80,-30,180,-20);

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

const viewer = new Cesium.Viewer('cesiumContainer', {
	// imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	// terrainProvider: Cesium.createWorldTerrain(),
	timeline: false,
	animation: false,
	geocoder: false,
	baseLayerPicker: false,
	sceneModePicker: false,
	navigationHelpButton: false,
	homeButton: false,
	fullscreenButton: false,

	// imageryProvider: false,
	// imageryProvider: Cesium.createWorldImagery({
	// 	style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS,
	// }),

	// rectangle: (113.338953078, -43.6345972634, 153.569469029, -10.6681857235),

	sceneMode: Cesium.SceneMode.SCENE2D,
	mapMode2D: Cesium.MapMode2D.ROTATE,
});

// const collectionP = new Cesium.EntityCollection()

let postcodes = new Cesium.CustomDataSource("postcodes")
let lgas = new Cesium.CustomDataSource("lgas")
let agg = new Cesium.CustomDataSource("agg")

viewer.dataSources.add(postcodes);
viewer.dataSources.add(lgas);
viewer.dataSources.add(agg);

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/NSW.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/VIC.json"));

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/QLD.json"));

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../amalg/qld_01.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../amalg/qld/cairns.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("script/amalg/QLD_01.json"));

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/TAS.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/SA.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/WA.json"));
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/NT.json"));

// viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../geo/TAS.json"));

const toTitleCase = (str)=>{
	return str.replace(
		/\w\S*/g,
		(txt)=>{
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

const loadPostcodes = (state)=>{
	let info = fetch(`script/${state}.json`,{
		method: 'get',
		headers: {'Content-Type': 'application/json'}
	})
	.then((response) => response.json())
	.then((response) => {
		appendPostcodes(response)
	})
	.catch(err => console.error('Caught error: ', err))
};

const appendPostcodes = (o)=>{
	for(let i in o){
		let description = `
			${o[i]['SA4_NAME_2016']}, ${o[i]['state']}<br><br>
			${toTitleCase(o[i]['localities'].toString().replace(/,/g,', '))}
		`
		postcodes.entities.add({
			name: o[i]['postcode'],
			description: description,
			position: Cesium.Cartesian3.fromDegrees(o[i]['long'], o[i]['lat']),
			point: {
				pixelSize : 5,
				color : Cesium.Color.RED,
				outlineColor : Cesium.Color.WHITE,
				outlineWidth : 2,
			},
			label: {
				text: o[i]['postcode'],
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth : 2,
				verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
				pixelOffset : new Cesium.Cartesian2(0, -9),
				scaleByDistance: new Cesium.NearFarScalar(50000, 1, 5000000, 0),
			}
		})
	}
	// viewer.zoomTo(viewer.entities);
};

const loadLGAs = (state)=>{
	let info = fetch(`../geo/${state}.json`,{
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
				material : Cesium.Color.YELLOW.withAlpha(0.5),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			}
		})
	}
	// viewer.zoomTo(viewer.dataSources.lgas)// viewer.camera.flyTo(viewer.dataSources.lgas)
}

const loadAgg = (state)=>{
	let info = fetch(`script/amalg/${state}.json`,{
		method: 'get',
		headers: {'Content-Type': 'application/json'}
	})
	.then((response) => response.json())
	.then((response) => {
		appendAgg(response['features'])
	})
	.catch(err => console.error('Caught error: ', err))
}

const appendAgg = (o)=>{

	for(let i in o){

		let LGA_NAME

		if(o[i]['properties']['NSW_LGA__2']){
			LGA_NAME = o[i]['properties']['NSW_LGA__2']
		}else if(o[i]['properties']['QLD_LGA__2']){
			LGA_NAME = o[i]['properties']['QLD_LGA__2']
		}else{
			LGA_NAME = o[i]['properties']['LGA_NAME']
		}
console.log(i)
		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])
		}

		agg.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				material : Cesium.Color.RED.withAlpha(0.5),
				outline : true,
				outlineColor : Cesium.Color.BLACK,
			}
		})
	}
}


const load = ()=>{
	loadPostcodes('NSW')
	loadLGAs('NSW')	
	loadAgg('NSW')
}
setTimeout(load,2000)


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
	postcodes.entities.removeAll();
	lgas.entities.removeAll();
	agg.entities.removeAll();
	
	let x = e.target
	console.log(x.value)
	// $('.viewControl').removeClass('off')

	loadPostcodes(x.value);
	if(x.value != 'ACT'){
		loadLGAs(x.value);
		loadAgg(x.value);
	}
}

const viewControl = (e)=>{
	// console.log(e)
	let x = $(e.target)
	
	console.log(e.target.id)

	if(x.hasClass('off')){
		x.removeClass('off')
	}else{
		x.addClass('off')
	}

	switch(e.target.id){
		case 'postcodes': postcodes.show = !postcodes.show;
		break;
		case 'lgas': lgas.show = !lgas.show;
		break;
		case 'agg': agg.show = !agg.show;
		break;
	}
	// console.log(postcodes)
}

$('.cesium-viewer-toolbar').append(`
	<select class="cesium-button viewSelect" name="state" id="state">
		<option value="NSW">NSW</option>
		<option value="VIC">VIC</option>
		<option value="QLD">QLD</option>
		<option value="TAS">TAS</option>
		<option value="SA">SA</option>
		<option value="WA">WA</option>
		<option value="NT">NT</option>
		<option value="ACT">ACT</option>
	</select>

	<button class="cesium-button viewControl" id="postcodes">Postcodes</button>
	<button class="cesium-button viewControl" id="lgas">LGAs</button>
	<button class="cesium-button viewControl" id="agg">Aggregated Regions</button>

`)

// $('.viewSelect').change('click',viewSelect);
// $('.viewControl').bind('click',viewControl);

$('.viewSelect').change(viewSelect);
$('.viewControl').click(viewControl);

// <div class="cesium-button">
// 		<input type="checkbox" name="postcodes" checked><label for="postcodes">Postcodes</label>
// 	</div>
// 	<div class="cesium-button">
// 		<input type="checkbox" name="lga" checked><label for="lga">LGAs</label>
// 	</div>