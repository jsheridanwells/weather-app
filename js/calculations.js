var Weather = (function(obj){

	obj.getTempToFahr = function(tempK) {
		console.log("calculations working");
		return ((parseInt(tempK) * 9)/5 - 459.67).toFixed(1);
	};
	return obj;
}(Weather || {}));