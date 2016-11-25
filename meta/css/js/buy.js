
	window.onload=function(){   
    var small=document.querySelector(".magnifier");
    var mask=document.querySelector(".mask");
    var big=document.querySelector(".big");
    var bigImage=document.querySelector(".big img");
    if(small){
        small.onmouseover=function(){
                big.style.display="block";
                mask.style.display="block"
            }
            small.onmouseout=function(){
                big.style.display="none";
                mask.style.display="none"
            }
            small.onmousemove=function(event){

                var oEvent=event||window.event;
                var x=oEvent.clientX-small.offsetParent.offsetLeft;
                var y=oEvent.clientY-small.offsetParent.offsetParent.offsetTop+document.body.scrollTop;
                var l=x-mask.offsetWidth/2;
                var t=y-mask.offsetHeight/2;
                if(x<=mask.offsetWidth/2){
                    l=0;
                }else if(x>=small.offsetWidth-mask.offsetWidth/2){
                    l=small.offsetWidth-mask.offsetWidth;
                }
                if(y<=mask.offsetHeight/2){
                    t=0;
                }else if(y>=small.offsetHeight-mask.offsetHeight/2){
                    t=small.offsetHeight-mask.offsetHeight;
                }
                var ritex=l/(small.offsetWidth-mask.clientWidth);
                var ritey=t/(small.offsetHeight-mask.clientHeight);

                mask.style.left=l+'px';
                mask.style.top=t+'px';
                bigImage.style.left=-ritex*(bigImage.offsetWidth-big.clientWidth)+'px';
                bigImage.style.top=-ritey*(bigImage.offsetHeight-big.clientHeight)+'px';


            }
    }
    var register=document.querySelector(".register");
    var entry=document.querySelector(".entry");
    var login=document.querySelector(".login");
    var loginOne=document.querySelector("#login_one");
    var loginTwo=document.querySelector("#login_two");
    var loginThree=document.querySelector("#login_three");
    var create=document.querySelector(".create");             
    console.log(entry);
    if(register){
        register.onclick=function(){
        login.style.display='block';
        loginOne.style.display='block';
             }
        login.onclick=function(){
            login.style.display='none';
            loginOne.style.display='none';
            loginTwo.style.display='none';
            loginThree.style.display='none';
        }
        loginOne.onclick=function(e){
            var ev =e||window.event;
            ev.stopPropagation();
            console.log('a')
        }
        loginTwo.onclick=function(e){
            var ev =e||window.event;
            ev.stopPropagation();
            console.log('a')
        }
        loginThree.onclick=function(e){
            var ev =e||window.event;
            ev.stopPropagation();
            console.log('a')
        }
        entry.onclick=function(){
            login.style.display='block';
            loginThree.style.display='block';
        }
        create.onclick=function(){
            loginOne.style.display='none';
            loginTwo.style.display='block';
        }
    }
    window.onscroll=function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.scrollHeight;
    var windowHeight=window.innerHeight;
    var nav=document.querySelector('.nav');
        if(nav){
            if(scrollTop>=268){
            nav.style.position='fixed';
            nav.style.zIndex='10';
            nav.style.top='0'+'px';
            nav.style.left='50%';
            nav.style.transform="translateX(-50%)";
        }
        }
    } 
    // var add=document.querySelectorAll(".add");
    // var minus=document.querySelectorAll(".minus");
    // var zongji=document.querySelectorAll(".price span");
    // var total=document.querySelector('.total i span');
    // var subtotal=document.querySelector('.subtotal i span');
    // var fare=document.querySelector('.fare i span');
    // var free=document.querySelector('.free i span');
    // var good=document.querySelectorAll(".good");
    // var delet=document.querySelectorAll('.delete img');
    // console.log(add);
    // if(add.length&&minus.length){
    //     for(i=0;i<add.length;i++){
    //     add[i].index=i;
    //     minus[i].index=i;
    //     add[i].onclick=function(){
    //         var num=document.querySelectorAll("[num='']")[this.index].value;
    //          document.querySelectorAll("[num='']")[this.index].value=++num;
    //        price();
    //        allprice();
    //     }
    //     minus[i].onclick=function(){
    //         var num=document.querySelectorAll("[num='']")[this.index].value;
    //         if(num<=1)
    //         {
    //             document.querySelectorAll("[num='']")[this.index].value=1;
    //         }else{
    //              document.querySelectorAll("[num='']")[this.index].value=--num;
    //         }
    //         price();
    //         allprice();
    //     }
    //  }

    //  function price(){
    //     for(var i=0;i<add.length;i++){
    //         zongji[i].innerHTML=parseInt(document.querySelectorAll("[num='']")[i].value)*199;
    //     }
    //  }
    //  function allprice(){
    //      Price=0;
    //         for(var i=0;i<add.length;i++){
    //             Price+=parseInt(document.querySelectorAll("[num='']")[i].value)*199;
    //         }
    //         subtotal.innerHTML=Price;
    //         total.innerHTML=parseInt(subtotal.innerHTML)+parseInt(fare.innerHTML)-parseInt(free.innerHTML);
    //  }
    //  allprice();

    // console.log(delet);
  
    // console.log(good);
    // for(var i=0;i<add.length;i++){
    //     console.log("aa");
    //     delet[i].index=i;
    //     delet[i].onclick=function(){
    //         console.log(this.index);
    //         good[this.index].style.display='none';

    //     }
    //     price();
    //     allprice();
    // }
        
    // }
  var factoryStory=document.querySelector(".factoryStory") ;
  var box=document.querySelector(".box");
  var width=factoryStory.offsetWidth;
  var ul=document.querySelector(".box ul");
  box.style.width=width*2+'px';
  box.appendChild(ul.cloneNode(true));
  var left=0;
  var timer=null;
  timer=setInterval(function(){
    left--;
    if(Math.abs(left)>=width){
            left=0;
        }
        box.style.left=left+'px';
  },1)

  console.log(factoryStory) ;
 }

