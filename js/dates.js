var Weather = (function(obj){

	let now = new Date();
	let days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

	obj.getDay = function() {  //gets day of the week using arrays of days
		let index = now.getDay();
		console.log("getDay: ", index, days[index]);
		return days[index];
	};


	return obj;
}(Weather || {}));