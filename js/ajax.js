var Weather = (function(obj) {
	let _data = [];
	obj.getData = function(callback, url) {
		let xhr = new XMLHttpRequest();

		xhr.addEventListener('load', function() {
			console.log("xhr successful");
			if (xhr.status === 404) {
				alert('Please enter a valid US zip code');
			}
			_data = JSON.parse(xhr.responseText);
			callback(_data);
		})
		xhr.addEventListener('error', function() {
			console.log('xhr failed');
		});
		xhr.open('GET', url);
		xhr.send();
	};
	return obj;
}(Weather || {}));