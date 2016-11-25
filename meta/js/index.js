window.onload=function(){
	var btns = document.querySelectorAll(".tab ol li");
	var pics = document.querySelectorAll(".tab ul li");
	var length = btns.length;
	var index = 0;
	if(btns){
		for(var i=0;i<length;i++){
			btns[i].index=i;
			btns[0].style.backgroundColor="red";
			pics[0].style.opacity="1";
			btns[i].onmouseover=function(){
				clearInterval(time);
				for(var i=0;i<length;i++){
					btns[i].style.backgroundColor="white";
					pics[i].style.opacity="0";
				}
				index=this.index;
				btns[index].style.backgroundColor="red";
				pics[index].style.opacity="1";
			}
			btns[i].onmouseout=function(){
				time=setInterval(nextbtns, 3000);
			}
		}
		function nextbtns(){
		var btns = document.querySelectorAll("ol li");
		var pics = document.querySelectorAll("ul li");
		var length = btns.length;
			index++;
			if(index>btns.length-1){
				index=0;
			}
			for(var i = 0;i<btns.length;i++){
				btns[i].style.backgroundColor="white";
				pics[i].style.opacity="0";	
			}
			btns[index].style.backgroundColor="red";
			pics[index].style.opacity="1";
		}
		time=setInterval(nextbtns, 3000); 
	}

}



	
		