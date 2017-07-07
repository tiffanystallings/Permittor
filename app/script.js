// Import React
var React = require('react');
var ReactDOM = require('react-dom');

var app = document.getElementById('app');

class Welcome extends React.Component {
	render(){
		return (
			<div id='welcome'>
				<h1>Welcome to Permittor!</h1>
				<h4>Is your permit City, County, or EMC?</h4>
				<div className = 'row'>
					<div className = 'button' id='city'>
						<p>City</p>
					</div>
					<div className = 'button' id='county'>
						<p>County</p>
					</div>
					<div className = 'button' id='emc'>
						<p>EMC</p>
					</div>
				</div>
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
var h1 = document.querySelector('h1');
var h4 = document.querySelector('h4');

var elems = [city, county, emc, h1, h4]


// Helper functions
function minusItem(item, list) {
	var newList = [];
	for(elem of list) {
		if(elem !== item) {
			newList.push(elem)
		}
	}
	return newList
};

// Event Listeners
city.addEventListener('click', function() {
	for(elem of minusItem(city, elems)) {
		elem.classList.add('hidden');
	};
	city.classList.add('expand');
	city.classList.remove('button');
});

county.addEventListener('click', function() {
	for(elem of minusItem(county, elems)) {
		elem.classList.add('hidden');
	};
	county.classList.add('expand');
	county.classList.remove('button');
});

emc.addEventListener('click', function() {
	for(elem of minusItem(emc, elems)) {
		elem.classList.add('hidden');
	};
	emc.classList.add('expand');
	emc.classList.remove('button');
});