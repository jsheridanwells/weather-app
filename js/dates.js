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

	obj.getDay = function(num) {  //gets day of the week using arrays of days
		let index = now.getDay() + num;
		if (index > days.length - 1) {
			index = index - days.length;
		}
		console.log("getDay: ", index, days[index]);
		return days[index];
	};


	return obj;
}(Weather || {}));