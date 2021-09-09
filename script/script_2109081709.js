const extent = Cesium.Rectangle.fromDegrees(80,-30,180,-20);//(W,S,E,N)

Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
// Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

const viewer = new Cesium.Viewer('cesiumContainer', {
	// imageryProvider: new Cesium.IonImageryProvider({ assetId: 3954 }),//asset added to account
	imageryProvider: false,
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

let electorates = new Cesium.CustomDataSource("electorates")
let lgas = new Cesium.CustomDataSource("lgas")
let agg = new Cesium.CustomDataSource("agg")
let sites = new Cesium.CustomDataSource("sites")

viewer.dataSources.add(electorates);
viewer.dataSources.add(lgas);
viewer.dataSources.add(agg);
viewer.dataSources.add(sites);

electorates.show = false;
lgas.show = false;

let hue = -25;

const CalculateRGBfromHSL = (H, S, L)=>{
	let colour = { R: 0, G: 0, B: 0 };

	if(H == -1.0 && S == -1.0){
		colour.R = L * 255.0;
		colour.G = L * 255.0;
		colour.B = L * 255.0;
	}
	else{
		let temporary_1;

		if(L < 0.5)
			temporary_1 = L * (1.0 + S);
		else
			temporary_1 = L + S - L * S;

		let temporary_2;

		temporary_2 = 2.0 * L - temporary_1;

		let hue = H / 360.0;

		let temporary_R = hue + 0.333;
		let temporary_G = hue;
		let temporary_B = hue - 0.333;

		if(temporary_R < 0.0)
			temporary_R += 1.0;
		if(temporary_R > 1.0)
			temporary_R -= 1.0;

		if(temporary_G < 0.0)
			temporary_G += 1.0;
		if(temporary_G > 1.0)
			temporary_G -= 1.0;

		if(temporary_B < 0.0)
			temporary_B += 1.0;
		if(temporary_B > 1.0)
			temporary_B -= 1.0;

		// RED
		if((6.0 * temporary_R) < 1.0)
		{
			colour.R = (temporary_2 + (temporary_1 - temporary_2) * 6.0 * temporary_R) * 255.0;
		}
		else if((2.0 * temporary_R) < 1.0)
		{
			colour.R = temporary_1 * 255.0;
		}
		else if((3.0 * temporary_R) < 2.0)
		{
			colour.R = (temporary_2 + (temporary_1 - temporary_2) * (0.666 - temporary_R) * 6.0) * 255.0;
		}
		else
		{
			colour.R = temporary_2 * 255.0;
		}

		// GREEN
		if((6.0 * temporary_G) < 1.0)
		{
			colour.G = (temporary_2 + (temporary_1 - temporary_2) * 6.0 * temporary_G) * 255.0;
		}
		else if((2.0 * temporary_G) < 1.0)
		{
			colour.G = temporary_1 * 255.0;
		}
		else if((3.0 * temporary_G) < 2.0)
		{
			colour.G = (temporary_2 + (temporary_1 - temporary_2) * (0.666 - temporary_G) * 6.0) * 255.0;
		}
		else
		{
			colour.G = temporary_2 * 255.0;
		}

		// BLUE
		if((6.0 * temporary_B) < 1.0)
		{
			colour.B = (temporary_2 + (temporary_1 - temporary_2) * 6.0 * temporary_B) * 255.0;
		}
		else if((2.0 * temporary_B) < 1.0)
		{
			colour.B = temporary_1 * 255.0;
		}
		else if((3.0 * temporary_B) < 2.0)
		{
			colour.B = (temporary_2 + (temporary_1 - temporary_2) * (0.666 - temporary_B) * 6.0) * 255.0;
		}
		else
		{
			colour.B = temporary_2 * 255.0;
		}
	}

	colour.R = Math.round(Math.abs(colour.R));
	colour.G = Math.round(Math.abs(colour.G));
	colour.B = Math.round(Math.abs(colour.B));

	return colour;
}

// console.log(CalculateRGBfromHSL(25,1,0.5))

let hughes = {}
colours = []

for(let i = 0; i < 60; i++){
	hue += 25;
	if(hue >= 360){
		hue -= 360
	}
	// console.log(!hughes[hue])
	// hughes[hue] = hue
	
	// console.log(hue)

	let col = CalculateRGBfromHSL(hue,1,0.5)

	// console.log(col)
	colours[i] = [col['R'],col['G'],col['B']]
}
console.log(JSON.stringify(colours))


// while(!hughes[hue]){
// 	hue += 25
// 	if(hue >= 360){
// 		hue -= 360
// 	}
// 	hughes[hue] = hue;
// 	console.log(hue)
// }

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

const appendLGAs = (o,state)=>{
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

		let coords = o[i]['geometry']['coordinates'][0]
		let boundary = []
		// let colour = (255,200,0)
		let colour = new Cesium.Color(0,1,0,0.5)

		for(let i in coords){
			boundary.push(coords[i][0],coords[i][1])
		}

		lgas.entities.add({
			name: LGA_NAME,
			polygon: {
				hierarchy: Cesium.Cartesian3.fromDegreesArray(boundary),
				height : 0,
				// material : Cesium.Color.WHITE.withAlpha(0.25),
				// material : Cesium.Color[colour].withAlpha(1),
				material : colour,
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
	loadSites(state)
}

const loadAgg = (state)=>{
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
			appendAgg(window[propName],state)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendAgg(window[propName],state)
	}
}

const appendAgg = (o,state)=>{
	// console.log(o.length)
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
	loadAgg(state)
}

const viewSelect = (e)=>{
	sites.entities.removeAll();
	lgas.entities.removeAll();
	agg.entities.removeAll();
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
		case 'agg': agg.show = true; lgas.show = false; electorates.show = false; break;
		case 'lgas': agg.show = false; lgas.show = true; electorates.show = false; break;
		case 'electorates': agg.show = false; lgas.show = false; electorates.show = true; break;
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

	<select class="cesium-button boundarySelect" name="state" id="state">
		<option value="agg">Aggregated Regions</option>
		<option value="lgas">LGAs</option>
		<option value="electorates">Federal Electorates</option>
	</select>

	<button class="cesium-button viewControl sites layerOn" id="sites">Sites&nbsp;<span class="on">ON</span>&nbsp;<span class="off">OFF</span></button>
`)

$('.viewSelect').change(viewSelect);
$('.boundarySelect').change(boundarySelect);
$('.viewControl').click(viewControl);

const load = ()=>{
	loadElectorates('QLD')
}
setTimeout(load,500)