// Import React
var React = require('react');
var ReactDOM = require('react-dom');

var permits = require('./permits.json');
var engineers = require('./engineers.json')

var cities = Object.keys(permits["cities"]);
var counties = Object.keys(permits["counties"]);
var utilities = Object.keys(permits["utilities"]);
var app = document.getElementById('app');

// Class Declarations
class Welcome extends React.Component {
	render() {
		return (
			<div id='welcome'>
				<h1>Welcome to Perfect Permit!</h1>
				<h4>Is your permit City, County, or Utility?</h4>
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
			</div>
		);
	}
};

class City extends React.Component {
	render() {
		return (
			<div id="select-city">
				<p>Which city would you like to permit for?</p>
				<select>{cities.map(makeOption)}</select>
				{engineerSelect()}
				{makeButtons()}
			</div>
		);
	}
};

class County extends React.Component {
	render() {
		return (
			<div id="select-county">
				<p>Which county would you like to permit for?</p>
				<select>{counties.map(makeOption)}</select>
				{engineerSelect()}
				{makeButtons()}
			</div>
		);
	}
};

class EMC extends React.Component {
	render () {
		return (
			<div id="select-utility">
				<p>Which utility company would you like to permit for?</p>
				<select>{utilities.map(makeOption)}</select>
				{engineerSelect()}
				{makeButtons()}
			</div>
		);
	}
};

ReactDOM.render(
	<Welcome />,
	app
);

// Store newly created elements in variables
var city = document.getElementById('city');
var county = document.getElementById('county');
var emc = document.getElementById('emc');
var welcome = document.getElementById('welcome');
var h1 = document.querySelector('h1');
var h4 = document.querySelector('h4');

var elems = [city, county, emc, h1, h4];


// Helper functions
function makeOption(item) {
	return <option value={item}>{item}</option>
};

function engineerSelect() {
	var engineerList = Object.keys(engineers)
	return (
		<div>
			<p>Which engineer are you permitting for?</p>
			<select>{engineerList.map(makeOption)}</select>
		</div>
	)
}

function minusItem(item, list) {
	var newList = [];
	for(elem of list) {
		if(elem !== item) {
			newList.push(elem)
		}
	}
	return newList
};

function makeButtons() {
	return (
		<div className= "row">
			<div className= 'button' id='next'>Next</div>
		</div>
	)
}

// Event Listeners
city.addEventListener('click', function() {
	for(elem of minusItem(city, elems)) {
		elem.classList.add('hidden');
	};
	city.classList.add('expand');
	city.classList.remove('button');

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

	ReactDOM.render(
		<EMC />,
		emc
	);
});