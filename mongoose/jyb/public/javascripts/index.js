$(function (){
	curriculum();//课程经过样式
	cooperationTab(".mechanism .next");	
	cooperationTab(".enterprise .next");	
});

//课程经过样式
var curriculum=function (){
	$(".curriculum_cont li").on("mouseover",function (){
		$(this).addClass("on");
		$(this).stop().animate({"top":"-10px"});
	});
	$(".curriculum_cont li").on("mouseout",function (){
		$(".curriculum_cont li").removeClass("on");
		$(".curriculum_cont li").stop().animate({"top":"0px"});
	});	
};
var cooperationTab=function (_this){
	$(_this).on("click",function (){
		// 从this的父级中找到（.mechanism_cont ul）
		var oUl=$(this).parent().find(".mechanism_cont ul");
		var oLi=$(this).parent().find(".mechanism_cont ul li");
		var oImg=$(this).parent().find(".mechanism_cont ul li img");
		
		var marginRight=oLi.css('marginRight');
		// substring(start,stop)start一个非负的整数，第一个字符在 stringObject 中的位置
		// stop一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1;
		var marginR=marginRight.substring(0,marginRight.length-2);
		// 图片的宽度
		var imgWidth=oImg.width();
		// console.log(imgWidth);
		var oUlLeft=-marginR-imgWidth;
		oUl.stop().animate({'left':oUlLeft},200,function (){
			// 在oUl中间添加oLi
			oLi.first().appendTo(oUl);
			oUl.css({left:0});
		});
	});
};