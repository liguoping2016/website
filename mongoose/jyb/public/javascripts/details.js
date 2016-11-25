$(function(){
	courseDetaTab();
})
var courseDetaTab = function(){
	$(".courseDetaCont_tile span").on("click",function(){
		var num = $(".courseDetaCont_tile span").index(this);
		$(".courseDetaCont_tile span").removeClass("on");
		$(this).addClass("on");
		$(".courseDetaCont_box").hide();
		$("#courseDetaCont_box"+num+"").show()
	})
}