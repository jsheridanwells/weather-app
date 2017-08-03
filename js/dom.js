var Weather = (function(obj){
	let frame = document.getElementById('frame');
	obj.printToDom = function(type, data) {  //writes data to DOM


		if (type === 'today') {
			frame.innerHTML = `
				<div class="row">
		          <div class="col-md-12"><h2>Forecast For ${data.name}</h2></div>
		        </div>
		        <div class="row">
		          <div class="col-md-3 card">
		            <h2>Thursday</h2>
		            <img src="img/${data.weather[0].icon}.svg" alt="sunny">
		            <h3>${(Weather.getTempToFahr(data.main.temp))} &deg;</h3>
		            <h3>${data.weather[0].description}</h3>
		          </div>
		        </div>
			`;
		} else if (type === 'five-day') {
			frame.innerHTML = `
				Five Day Coming Soon...
			`;
		} else if (type === 'sixteen-day') {
			frame.innerHTML = `
				Sixteen Day Coming Soon...
			`;
		}


	};
	return obj;
}(Weather || {}));