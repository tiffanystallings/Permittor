// Import React
var React = require('react');
var ReactDOM = require('react-dom');

var permits = require('./permits.json');
var engineers = require('./engineers.json')

var cities = Object.keys(permits["cities"]);
var counties = Object.keys(permits["counties"]);
var utilities = Object.keys(permits["utilities"]);

var heading = document.getElementById('heading');
var main = document.getElementById('main');
var nav = document.getElementById('nav');

var inputs = {};

// Class Declarations
class Welcome extends React.Component {
	render() {
		return (
			<div id='welcome'>
				<h1>Welcome to Perfect Permit!</h1>
				<h4>Is your permit City, County, or Utility?</h4>
			</div>
		);
	}
};

class Buttons extends React.Component {
	render() {
		return (
			<div className = 'row'>
				<div className = 'button' id='city'>
					<p>City</p>
				</div>
				<div className = 'button' id='county'>
					<p>County</p>
				</div>
				<div className = 'button' id='emc'>
					<p>Utility</p>
				</div>
			</div>
		)
	}
}

class BackNext extends React.Component {
	render() {
		return (
			<div className= "hidden row" id='nav-buttons'>
				<div className= 'button' id='back'>Back</div>
				<div className= 'button' id='next'>Next</div>
			</div>
		)
	}
};

class City extends React.Component {
	render() {
		return (
			<div id='child-div'>
				<p>Which city would you like to permit for?</p>
				<select id="select-permit">{cities.map(makeOption)}</select>
				{makeInputs()}
			</div>
		);
	}
};

class County extends React.Component {
	render() {
		return (
			<div id='child-div'>
				<p>Which county would you like to permit for?</p>
				<select id="select-permit">{counties.map(makeOption)}</select>
				{makeInputs()}
			</div>
		);
	}
};

class EMC extends React.Component {
	render () {
		return (
			<div id='child-div'>
				<p>Which utility company would you like to permit for?</p>
				<select id="select-permit">{utilities.map(makeOption)}</select>
				{makeInputs()}
			</div>
		);
	}
};

ReactDOM.render(
	<Welcome />,
	heading
);
ReactDOM.render(
	<Buttons />,
	main
);
ReactDOM.render(
	<BackNext />,
	nav
);

// Store newly created elements in variables
var city = document.getElementById('city');
var county = document.getElementById('county');
var emc = document.getElementById('emc');
var navButtons = document.getElementById('nav-buttons');

var elems = [city, county, emc];


// Helper functions

function trim (str) {
     return str.replace (/^\s+|\s+$/g, '');
};

function makeOption(item) {
	return <option value={item}>{item}</option>
};

function makeInputs() {
	return (
		<div>
			{engineerSelect()}
			<p>Permit Number</p>
			<input id="number" type="text" />
			<p>Project Name</p>
			<input id="name" type="text" />
			<p>Project Address</p>
			<input id="address" type="text" />
			<p>Description of Work</p>
			<textarea id="description" rows="2" cols="25"></textarea>
		</div>
	)
};

function engineerSelect() {
	var engineerList = Object.keys(engineers)
	return (
		<div>
			<p>Which engineer are you permitting for?</p>
			<select id="select-engineer">{engineerList.map(makeOption)}</select>
		</div>
	)
};

function minusItem(item, list) {
	var newList = [];
	for(elem of list) {
		if(elem !== item) {
			newList.push(elem)
		}
	}
	return newList
};

function getFirstInputs(inputs) {
	var pSlct = document.getElementById('select-permit');
	inputs['permit'] = pSlct.options[pSlct.selectedIndex].text;

	var eSlct = document.getElementById('select-engineer');
	inputs['engineer'] = eSlct.options[eSlct.selectedIndex].text;

	var numberInput = document.getElementById('number');
	inputs['permit-number'] = numberInput.value;

	var nameInput = document.getElementById('name');
	inputs['project-name'] = nameInput.value;

	var addressInput = document.getElementById('address');
	inputs['project-address'] = addressInput.value;

	var description = document.getElementById('description');
	inputs['description'] = description.value;

	return inputs
};

function nextClicked() {
	getFirstInputs(inputs);
	console.log(inputs);
	var current = document.getElementById('child-div');
	current.classList.add('hidden');
}

// Event Listeners
city.addEventListener('click', function() {
	ReactDOM.unmountComponentAtNode(heading);
	for(elem of minusItem(city, elems)) {
		elem.classList.add('hidden');
	};
	city.classList.add('expand');
	city.classList.remove('button');
	navButtons.classList.remove('hidden');

	ReactDOM.render(
		<City />,
		city
	);
});

county.addEventListener('click', function() {
	for(elem of minusItem(county, elems)) {
		elem.classList.add('hidden');
	};
	county.classList.add('expand');
	county.classList.remove('button');
	navButtons.classList.remove('hidden');

	ReactDOM.render(
		<County />,
		county
	);

});

emc.addEventListener('click', function() {
	for(elem of minusItem(emc, elems)) {
		elem.classList.add('hidden');
	};
	emc.classList.add('expand');
	emc.classList.remove('button');
	navButtons.classList.remove('hidden');

	ReactDOM.render(
		<EMC />,
		emc
	);
});

next.addEventListener('click', function() {
	nextClicked();
});