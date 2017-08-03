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
		            <h2>${Weather.getDay()}</h2>
		            <img src="img/${data.weather[0].icon}.svg" alt="sunny">
		            <h3>${(Weather.getTempToFahr(data.main.temp))} &deg;</h3>
		            <h3>${data.weather[0].description}</h3>
		          </div>
		        </div>
			`;
		} else if (type === 'five-day') {
			console.log("going to five day");
			let content = `
				<div class="row">
		          <div class="col-md-12"><h2>Forecast For ${data.city.name}</h2></div>
		        </div>`;

			for (let i = 0; i < data.list.length; i+=8) {
				content += `
					<div class="col-md-3 card">
			            <h2>${Weather.getDay(i/8)}</h2>
			            <img src="img/${data.list[i].weather[0].icon}.svg" alt="sunny">
			            <h3>${(Weather.getTempToFahr(data.list[i].main.temp))} &deg;</h3>
			            <h3>${data.list[i].weather[0].description}</h3>
			        </div>
				`;
				console.log("length is", data.list[i].weather[0].description);
			}

			frame.innerHTML = content;
		} else if (type === 'sixteen-day') {
			console.log("going to 16 day");
			frame.innerHTML = `
				Sixteen Day Coming Soon...
			`;
		}


	};
	return obj;
}(Weather || {}));