$(function (){
	floatboxPos();//右侧浮动框位置	
	popupositon();//弹窗的位置
	headSelect();//头部下拉
	code();//底部经过出二维码	
	backTop();//回顶部
	
});

$(window).resize(function(){
  	// public();//加载公共部分
   	floatboxPos();//右侧浮动框位置
});



//加载公共部分
var public=function (){	
	$(".header").load("head.html .header",function (){
		headSelect();//头部下拉
	});
	$(".footer").load("footer.html .footer",function (){
		code();//底部经过出二维码	
	});
	$(".floatbox").load("floatbox.html",function (){
		code();//底部经过出二维码	
		backTop();//回顶部		
	});
};




//底部经过出二维码
var code=function (){
	//公众号
	$(".code .wechat").on("mouseover",function (){
		$(".wechat_code").show();	
	});
	$(".code .wechat").on("mouseout",function (){
		$(".wechat_code").hide();	
	});
	
	//微博
	$(".code .microblog").on("mouseover",function (){
		$(".microblog_code").show();	
	});
	$(".code .microblog").on("mouseout",function (){
		$(".microblog_code").hide();	
	});
	
	//app
	$(".footer_right p span").on("mouseover",function (){
		$(".footer_right p img").show();	
	});
	$(".footer_right p span").on("mouseout",function (){
		$(".footer_right p img").hide();	
	});
	
	//右侧浮动
	$(".floatbox .wechat").on("mouseover",function (){
		$(".publicno").show();	
	});
	$(".floatbox .wechat").on("mouseout",function (){
		$(".publicno").hide();	
	});
};

//右侧浮动框位置
var floatboxPos=function (){
	var	windWidth=$(window).width();
	var centWidth=$(".minWidth").width();
	var right=(windWidth-centWidth)/2-74+'px';	
	if(windWidth<1385||windWidth==1385){
		$(".floatbox").css("right",0+'px');
	}else{
		$(".floatbox").css("right",right);	
	}
};


//回顶部
var backTop=function (){	
	$(".returntotop").click(function(){
		$("html,body").animate({scrollTop:0}, 300);
	});
};


//下拉框
var selectBox=function (){
	$(".select .select_cont").on("click",function (){
		$(this).next().show();	
	});	
	
	$(".select .option").on("mouseleave",function (){
		$(this).hide();	
	});
	
	$(".option li").on("click",function (){
		var html=$(this).html();
		$(this).parent().prev().html(html);
		$(this).parent().hide();
	});
};


//头部下拉
var headSelect=function (){
	$(".loggingIn .core").on("mouseover",function (e){
		$(".loggingIn div").show();
		 e.stopPropagation();
	});
	
	$(".loggingIn div").click(function(e){
		 e.stopPropagation();
	   });
   
	$(document.body).on("click",function (){
		$(".loggingIn div").hide();
		
	});
};

//弹窗的位置
var popupositon=function (){
	var popupHeight=$(".popup").height();
	$(".popup").css("marginTop",-(popupHeight/2)+'px');
};


//弹窗
var popupShow=function (t,p,fn){
	var html='<div class="popup"><div class="popup_title">'+t+'<i onclick="popup();"></i></div><div class="popup_cont">'+p+'</div><div class="popup_bot"><span class="confirm" onclick="'+fn+'">确认</span><span class="cancel" onclick="popup();">取消</span></div></div>';
	$(".mask").show();
	$(".mask").after(html);
};


//弹窗关闭
var popup=function (){
	$(".mask").hide();
	$(".popup").hide();
	$(".order_info").hide();
};
