(function(){
	function a1(a){
		return (a>=10?"":0+"")+a;
	}
//	alert(a1(12));
var colick=document.getElementById("clock");
//console.log(colick);
function sTime(){
	var ddtime=new Date();
	colick.innerHTML=a1(ddtime.getHours()) + ':' +a1(ddtime.getMinutes()) + ':' +a1(ddtime.getSeconds());
}
sTime()
setInterval(sTime,1000)
}())
