var Weather= (function(){
	let frame = document.getElementById('frame');
	let zipInput = document.getElementById('zip-input');
	let selectors = document.getElementsByClassName('select');
	let weatherData = [];
	let forecastType;

	for (let i = 0; i < selectors.length; i++) {
		selectors[i].addEventListener('click', function(e) {
			Weather.getData(Weather.sendData, Weather.selectForecast(e, Weather.getZip()));
		});
	}

	return {
		getZip: function() {  //gets zip code that the user inputs
			return zipInput.value;
		},
		selectForecast: function(e, zip) {
			let id = e.target.id  //gets id of clicked on element, return correct API query
			forecastType = id;
			if (id === 'today') {
				return 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=' + api;
			} else if (id === 'five-day') {
				return 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zip + ',us&APPID=' + api;
			} else if (id === 'sixteen-day') {
				return 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + ',us&APPID=' + api;
			}
		},
		sendData: function(data) {  //sends data to other functions in the program
			weatherData = data;
			Weather.printToDom(forecastType, weatherData);

		}
	};
}());

