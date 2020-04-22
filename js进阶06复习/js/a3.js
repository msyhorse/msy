function aaa(a,b,c,d){
	var a1=document.getElementById(a);
		var a2=document.getElementById(b);
		var ull=document.getElementsByTagName("ul")[0];
		var lii=ull.getElementsByTagName("li");
		var img=ull.getElementsByTagName("img");
		var changdu=lii.length;
		var bushu=0;
		var timer;
		var changdu1;
		ull.innerHTML+=ull.innerHTML;
		move();
//		alert(changdu);
		for(var i=0,count=0;i<changdu;i++){
			img[i].onload=function(){
				count++;
				if(img.length==count){
				changdu1=lii[changdu/2].offsetLeft;
//				alert(changdu1);
//alert(changdu1);
console.log(lii[10]);
				move();}
			}
		};
		a1.onmouseover=function(){
			clearInterval(timer);
		}
		a1.onmouseout=function(){
			move();
		}
		function move(){
			clearInterval(timer);
			timer=setInterval(function(){
				bushu-=c;
				if(bushu<-changdu1){
					bushu=0;
				}
				a2.style.left=bushu+"px";
			},d)
		}
		}
;
