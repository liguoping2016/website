$(function(){
	banner();
	livecourseNav();
	livecourseTitle();
})
var banner = function(){
	var num=0;
	var lilength = $(".circular li").length;
	// each() 方法为每个匹配元素规定要运行的函数。
	$(".circular li").each(function(i){
		$(this).click(function(){
			num = i;
			tab();
		})
	})
	//定时器
	var timer = setInterval(next,5000)
		$(".banner").mouseover(function(){
			$(".banner .banner_btn").show();
			clearInterval(timer)
		});
		$(".banner").mouseout(function(){
			$('.banner .banner_btn').hide();
			timer=setInterval(next,2000);
		})
		// 下一个
		$(".banner .banner_right").click(function(){
			next()
		})
		// 上一个
		$(".banner .banner_left").click(function(){
			upper()
		})
		function tab(){
			var conwidth=$(".banner_cont ul li").width()
			var left = -num*conwidth;
			$(".circular li").removeClass("on");
			// eq() 方法返回带有被选元素的指定索引号的元素
			$(".circular li:eq("+num+")").addClass("on");
			$(".banner_cont ul").animate({'left':left+'px'});

		}
		function next(){
			num++;
			num%=lilength;
			tab();
		}
		function upper(){
			num--;
			if(num<0){
				num = lilength -1;
			}
			num%=lilength;
			tab();
		}
}
//左侧导航切换
	var livecourseNav =function(){
		$(".livecourse_left ul li a").click(function(){
			$(".livecourse_left ul li a").removeClass("on");
			$(this).addClass("on");
		})
	}



//头部导航切换
	var livecourseTitle =function(){
		$(".livecourse_right_tle span").click(function(){
			$(".livecourse_right_tle span").removeClass("on");
			$(this).addClass("on");
		})
	}



// 分页
    // $(function(){
    //     var a=$(".num").html();
    //     var pid = $('.main').attr('did');


    //     $(".num").html('第<input type="text" disabled="disabled" value='+a+'>页');
    //     $(".num").attr('href', 'javascript:void(0);');

    //     // $(".did").blur(function(){
    //     //     var b = $(this).val();

    //     //     $(".num").attr('href', "/Home/Courselist/index/id/"+pid+"/p/"+b+'.html');

    //     // });



    // })















