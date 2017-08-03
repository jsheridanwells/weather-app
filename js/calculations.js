var Weather = (function(obj){

	obj.getTempToFahr = function(tempK) {
		console.log("calculations working");
		return ((parseInt(tempK) * 9)/5 - 459.67).toFixed(1);
	};

	obj.capitalize = function(str) {
		return str.replace(/\b\w/g, l => l.toUpperCase());
	};
	return obj;
}(Weather || {}));