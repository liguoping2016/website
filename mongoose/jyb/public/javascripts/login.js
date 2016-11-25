$(function(){
	logreTab();
	register();
	// remember();//记住我选中
	//注册
	// changetime();//倒计时
})
//登录注册切换
var logreTab = function(){
	if(undefined != $.cookie("rem")){
		$('login_box input[name=tel]').val('');
		$('login_box input[name=pass]').val('');
		$('login_box input[name=auto]').prop('checked',false);
		if(1 == parseInt($.cookie('rem'))){
			$('remember p').addClass("on");
			if(undefined != $.cookie('phone')){
				$('.login_box input[name=tel]').val($.cookie("phone"));
			}
			if(undefined != $.cookie('password')){
				$('.login_box input[name=pass]').val($.cookie('password'));
			}
		}
	}
	$(".logreg_tle .loginbtn").on("click",function (){
		$(".logreg_tle span").removeClass("on");
		$(this).addClass("on");
		$(".register_box").hide();
		$(".login_box").show();
	});
	$(".logreg_tle .registerbtn").on("click",function(){
		$(".logreg_tle span").removeClass("on");
		$(this).addClass('on');
		$('.login_box').hide();
		$('.register_box').show();
	});
}
// 更换验证码
function change(){
	// .attr返回属性值
	var a=$('.grap_right img').attr('src');
	$('grap_right img').attr('src',a+"?rand='+Math.random()");
}
// error 提示
function loginErr(name,html){
	if(name){
		change();
		console.log("dwer");
		$(".error").remove();
		$(".rendon").removeClass('redon');
		$(name).parent().addClass("redon");
		console.log(name);
		$(name).after('<em class="error">'+html+'</em>');
	}else{
		$('.error').remove();
		$(".redon").removeClass("redon");
	}
	// hasClass() 方法检查被选元素是否包含指定的类名称。
	if($(".messages_left").hasClass("redon")){
		$(".error").remove();
		$(".redon").removeClass("redon");
		$(name).parent().parent().addClass("redon");
		$(name).after('<em class="error">'+html+'</em>');
	}
}
// em.error 请填写手机号！
// keypress 当按钮被按下时发生该事件。
$(document).keypress(function(e){
	e=e||window.event;
	if(e.which==13){
		loginBtn();
	}
});

// 登录
function loginbtn(){
	console.log("123")
	// if($('.log_btn').hasClass("on")){
	// 	return;
	// }
	// 手机号是否为空
	var tel = $("#log_tel").val();
	if(tel == ''){
		console.log(1);
		loginErr("#log_tel","请输入手机号");
		return false;
	}
	// 手机号格式是否正确
	// ^开始符$结束符
	var  reg=/^1[34578]\d{9}$/;
	if(!reg.test(tel)){
		loginErr("#log_tel","请填写正确手机号！")
		return false;
	}
	// 密码是否为空
	var logPass=$.trim($("#log_pass").val());
	if(logPass==''){
		loginErr('#log_pass','密码不能为空！');
		return false;	
	}
	// 密码格式是否正确
	// \w  == [a-zA-Z_0-9] 单词字符 （字母 下划线 数字）
	var reg=/^[0-9a-zA-Z_]{6,20}$/;
	if(!reg.test(logPass)){
		loginErr('#log_pass','密码错误!');
		return false;
	}
	//验证码
	if($("#grap").hasClass("fid")){
		var logGrap=$("#log_grap").val();
		if(logGrap==''){
			loginErr('#log_grap','请填写验证码！');
			$(".ystemError").remove();
			return false;
		}
	}

	loginErr();
}
// 注册
var register=function (){
	$(".reg_btn").on("click",function (){
		if($(this).hasClass("on")){
			return;	
		}		
		
		//验证码
		var regGrap=$("#reg_grap").val();
		if(regGrap==''){
			change();
			loginErr('#reg_grap','请填写验证码！');
			return false;
		}
		
		//短信注册码
		var messCode=$("#message").val();
		if(messCode==''){
			change();	
			loginErr('#message','请填写注册码！');
			return false;
		}

		//电话
		var tel = $('#reg_tel').val();	

		if(tel==''){
			loginErr('#reg_tel','请填写手机号！');
			return false;
		}

		var reg=/^1[34578]\d{9}$/;
		if(!reg.test(tel)){
			loginErr('#reg_tel','请填写正确手机号！');
			return false;
		}
		
		//密码
		var regPass=$.trim($("#reg_pass").val());
		if(regPass==''){
			loginErr('#reg_pass','密码不能为空！');
			return false;	
		}
		var reg=/^[0-9a-zA-Z_]{6,20}$/;
		if(!reg.test(regPass)){
			loginErr('#reg_pass','请填写6-20字符密码,除空格外！');
			return false;
		}
				
		//确认密码
		var regPassed=$("#reg_passed").val();
		if(regPassed==''){
			loginErr('#reg_passed','密码不能为空！');	
			return false;
		}
		if(regPassed!=regPass){
			loginErr('#reg_passed','密码输入不一致！');
			return false;
		}		
		
		loginErr();
	});		
};












// window.onload = function(){
// 	var name = document.querySelector(".username");
// 	var password = document.querySelector(".password");
// 	var btn = document.querySelector(".btn");
// 	var tips = document.querySelector("p");
// 	btn.onclick = function(){
// 		console.log("123");
// 		var tip = "";
// 		if(!name.value || !password.value){
// 			tip = "密码，用户名，邮箱不能为空"
// 			tips.innerHTML = tip;
// 			return;
// 		}
// 		var data = `username=${name.value}&password=${password.value}`;
// 		console.log("123");
// 		AJax("POST","/login",data,function(data){

// 			var data = JSON.parse(data);
// 			console.log(data);
// 			if(data.success){
// 				window.location.href="http://127.0.0.1:3000/"
// 			}
// 		})
// 	}
// }
