(function() {
	var divClock = document.getElementById('clock');
					console.log(divClock)
	function formatTime(num) {
		return(num >= 10 ? "" : "0") + num;
	}

	function showTime() {
		var date = new Date();
		divClock.innerHTML = formatTime(date.getHours()) + ':' + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
	}
//	showTime()
	/*function init(){
		set
	}*/
	//setInterval(函数(是函数的名字/"函数名字()"),时间);
	alert(new Date());
	console.log(new Date());
	setInterval(showTime, 1000);
//	setInterval(new Date, 1000);
}())