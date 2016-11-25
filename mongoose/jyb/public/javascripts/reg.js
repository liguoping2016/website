window.onload = function(){
	var name = document.querySelector(".username");
	var password = document.querySelector(".password");
	var email = document.querySelector(".email");
	var btn = document.querySelector(".btn");
	var tips = document.querySelector("p");
	btn.onclick = function(){
		var tip = "";
		if(!name.value || !password.value || !email.value){
			tip = "密码，用户名，邮箱不能为空"
			tips.innerHTML = tip;
			return;
		}
		var data = `username=${name.value}&password=${password.value}&email=${email.value}`
		AJax("POST","/reg",data,function(data){
			console.log(data)
		})
	}
}