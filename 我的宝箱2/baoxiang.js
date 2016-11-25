var data=data;
var opened=data.opened;
var unopened=data.unopened;
var gain=data.gain;
var opened_length=opened.length;
var unopened_length=unopened.length;
var gain_length=gain.length;
var html="";
var html3="";
var now=new Date();
var hh=now.getHours();
var mm=now.getMinutes();
var point=document.querySelector(".pointer");
var pointer=document.querySelectorAll(".pointer li");
var li=document.querySelector(".unopened ul li");
var none=document.querySelector(".none");
if(opened_length==1){
	if(opened[0].type==1){
		html+="<li class='red'>"+
				"<h3>"+opened[0].name+"</h3>"+
				"<span>￥<i>"+opened[0].num+"</i></span></li>"+
				"<li class='noGet'>未获得</li><li class='noGet'>未获得</li><li class='noGet'>未获得</li>";
	}else if(opened[0].type==2){
		html+="<li class='flow'>"+
				"<h3>"+opened[0].name+"</h3>"+
				"<span><i>"+opened[0].num+"</i>MB</span></li>"+
				"<li class='noGet'>未获得</li><li class='noGet'>未获得</li><li class='noGet'>未获得</li>";
	}else if(opened[0].type==3){
		html+="<li class='lottery'>"+
				"<h3>"+opened[0].name+"</h3></li>"+
			"<li class='noGet'>未获得</li><li class='noGet'>未获得</li><li class='noGet'>未获得</li>";
	}else if(opened[0].type==4){
		html+="<li class='loss'>"+
				"<h3>"+opened[0].name+"</h3></li>"+
			"<li class='noGet'>未获得</li><li class='noGet'>未获得</li><li class='noGet'>未获得</li>";
	}
}
else if(opened_length==2){
	for(var i=0;i<opened_length;i++){
		if(opened[i].type==1){
		html+="<li class='red'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span>￥<i>"+opened[i].num+"</i></span></li>"
				
	}else if(opened[i].type==2){
		html+="<li class='flow'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span><i>"+opened[i].num+"</i>MB</span></li>"
			
	}else if(opened[i].type==3){
		html+="<li class='lottery'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}else if(opened[i].type==4){
		html+="<li class='loss'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}
	}
	html+="<li class='noGet'>未获得</li><li class='noGet'>未获得</li>";
}
else if(opened_length==3){
		for(var i=0;i<opened_length;i++){
		if(opened[i].type==1){
		html+="<li class='red'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span>￥<i>"+opened[i].num+"</i></span></li>"
				
	}else if(opened[i].type==2){
		html+="<li class='flow'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span><i>"+opened[i].num+"</i>MB</span></li>"
			
	}else if(opened[i].type==3){
		html+="<li class='lottery'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}else if(opened[i].type==4){
		html+="<li class='loss'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}
	}
	html+="<li class='noGet'>未获得</li>";
}
else{
	for(var i=0;i<opened_length;i++){
		if(opened[i].type==1){
		html+="<li class='red'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span>￥<i>"+opened[i].num+"</i></span></li>"
				
	}else if(opened[i].type==2){
		html+="<li class='flow'>"+
				"<h3>"+opened[i].name+"</h3>"+
				"<span><i>"+opened[i].num+"</i>MB</span></li>"
			
	}else if(opened[i].type==3){
		html+="<li class='lottery'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}else if(opened[i].type==4){
		html+="<li class='loss'>"+
				"<h3>"+opened[i].name+"</h3></li>"
	}
	}
	html+="<li class='noGet'>未获得</li>";
}
// 未开宝箱
if(data.unopened.length){
	var html2="<li>";
	for(var i=0;i<unopened_length;i++){
		// html2+="<div class='item item1'></div>"
		if(unopened[i].type==1){
				html2+="<div class='item item1'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}else if(unopened[i].type==2){
				html2+="<div class='item item2'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}else if(unopened[i].type==3){
				html2+="<div class='item item3'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}
			else if(unopened[i].type==4){
				html2+="<div class='item item4'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}
			else if(unopened[i].type==5){
				html2+="<div class='item item5'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}
			else if(unopened[i].type==6){
				html2+="<div class='item item6'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}
			else if(unopened[i].type==7){
				html2+="<div class='item item7'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}
			else if(unopened[i].type==8){
				html2+="<div class='item item8'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"
			}else{
				html2+="<div class='item item9'>"+
					"<div class='white'><span>"+unopened[i].num+"</span></div></div>"

			}

		if(i+1==unopened_length){
			
			html2+="</li>"
		}else if((i+1)%3==0&&(i+1)!=unopened_length){
			html2+="</li><li>"
		}
	}
	if(unopened_length<=3){
		point.style.display='none';
	}else if(3<unopened_length&&unopened_length<=6){
		point.style.display='block';
		pointer[pointer.length-1].style.display='none';
	}else{
		point.style.display='block';
	}
}else{
	none.style.display='block';

}
// 获得更多宝箱
if(data.gain.length){
	html3+="<div class='more'>"+
				"<h2>"+gain[0].name+"</h2></div>"
	for(var i=1;i<gain_length;i++){
		
		if(gain[i].type==1){
			html3+="<li class='treasure'>"+
					"<h3>"+gain[i].name+"</h3><div class='zhi'></div></li>"
		}else if(gain[i].type==2){
			html3+="<li class='share'>"+
					"<h3>"+gain[i].name+"</h3><div class='fenxiang'></div></li>"
		}else if(gain[i].type==3){
			html3+="<li class='desire'>"+
					"<h3>"+gain[i].name+"</h3><div class='qingdan'></div></li>"
		}else if(gain[i].type==4){
			html3+="<li class='treasure'>"+
			"<h3>"+gain[i].name+"</h3><div class='recharge'></div></li>"
		}else if(gain[i].type==5){
			html3+="<li class='share'>"+
			"<h3>"+gain[i].name+"</h3><div class='baby'></div></li>"
		}else{
			html3+="<li class='desire'>"+
			"<h3>"+gain[i].name+"</h3><div class='bill'></div></li>"
		}
	}
}

document.querySelector(".opened h2 i").innerHTML=hh+":"+mm;
document.querySelector(".lodding").style.display='none';
document.querySelector(".opened ul").innerHTML=html;
document.querySelector(".opened").className="opened";
document.querySelector(".unopened").className="unopened";
document.querySelector(".unopened .noBox").innerHTML=html2;
document.querySelector(".gain").className="gain";
document.querySelector(".gain ul").innerHTML=html3;

var pics=document.querySelectorAll(".unopened .noBox li");
var noBox=document.querySelector(".unopened .noBox");
var btn=document.querySelector('.btn');
var index=0;
var pics_length=pics.length;
  for(var i=0;i<pics_length;i++){
  	pointer[i].index=i;
  	// var aa=-498;
  	pointer[i].onclick=function(){
  		// alert("123");
  		for(var i=0;i<pics_length;i++){
  			
  			pointer[i].className="";
  			// pics[i].style.display="none";
  		}
  		index=this.index;
  		a=this.index;
  		var b=-(a*498);
  		pointer[index].className="active";
  		noBox.style.transform='translate('+b+'px)';
  		// pics[index].style.display="block";
  	}
  }

btn.onclick=function(){
	btns();
}
function btns(){
	index++;
	if(index>pics_length-1){
		index=0;
	}
	for(var i=0;i<pics_length;i++){
		pointer[i].className="";
  			// pics[i].style.display="none";
  		}
  		a=this.index;
  		var b=-(a*498);
  		// pointer[index].className="active";
  		noBox.style.transform='translate('+b+'px)';
  		pointer[index].className="active";
  		// pics[index].style.display="block";
}





