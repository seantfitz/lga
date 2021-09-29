const loadSet(state,set)=>{
	let propName = `${set}_${state}`
	if(typeof(window[propName]) !== 'object'){
		let info = fetch(`script/${set}/${state}.json`,{
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
			appendBroadcast(window[propName],state,set)
		})
		.catch(err => console.error('Caught error: ', err))
	}else{
		appendBroadcast(window[propName],state,set)
	}
}

const appendEntities = (o,state,set)=>{

	$(`.areaSelect option[value="${set}"]`).prop('disabled',o.length <= 0);
	$('.areaSelect').val('clear')

	if(o.length <= 0){
		switch(set){
			case 'broadcast':loadSet(state,'zones');return false;
			case 'zones':loadSet(state,'federal');return false;
			case 'federal':loadSet(state,'statedivisions');return false;
			case 'statedivisions':loadSet(state,'lgas');return false;
			case 'lgas':loadSet(state,'localities');return false;
			case 'localities':
			listSelections($('.areaSelect').val())
			return false;
		}
	}

	let repNames = {};
	let thisCol = 0;
	let entGroup;
	let guid;

	let r = colours[0][0] / 255;
	let g = colours[0][1] / 255;
	let b = colours[0][2] / 255;
	let colour = new Cesium.Color(r,g,b,0.25);


	/********************************************/

	let k = Object.keys(repNames);
	let colourStep = Math.floor(colours.length / k.length);

	/*****/
	let thisName;
	let name;
	let description;
	
	let colour;
	let coords;
	let boundary;

	let labelElevation;
	let SBD0,SBD1,SBD2,SBD3;
	let TBD0,TBD1,TBD2,TBD3;

	/*broadcast*/
	let people;
	let households;
	let fta;
	let ftaStr;
	/*broadcast*/

	/*zones*/
	let population;//localities
	let thisLGAs;
	let lgaStr;
	/*zones*/

	/*federal / state*/
	let E_div_numb;
	let Numccds;
	let Actual;
	let Projected;
	let Total_Popu;
	let Australian;
	let Area_SqKm;
	let Sortname;

	let mp;
	let party;
	let tenure;
	let wiki;
	//state
	let namesake;
	let electors;
	/*federal / state*/

	/*lga*/
	let mayor;
	let url;
	let pixelSize;
	/*lga*/

	/*****/

	for(let i in o){

		let W = o[i]['properties']['boundingBox']['W'];
		let E = o[i]['properties']['boundingBox']['E'];
		let S = o[i]['properties']['boundingBox']['S'];
		let N = o[i]['properties']['boundingBox']['N'];

		let midLat = (S + N) / 2;
		let midLon = (W + E) / 2;

		let coords = o[i]['geometry']['coordinates'][0];
		let boundary = [];

		switch(set){
			case 'broadcast':


		}
	}
}