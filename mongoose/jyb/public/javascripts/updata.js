window.onload=function(){
	console.log("a");
	var sbtn = document.querySelector(".register_box .log_btn")
	var name = document.querySelector(".register_box #log_tel")
	var password = document.querySelector(".register_box #log_pass")
	var mail = document.querySelector(".register_box #log_mail")
	sbtn.onclick = function(){
		var data = `username=${name.value}&password=${password.value}&email={mail.value}`
		AJax('POST',"reg",data,function(data){
			console.log(data);
		})
	}
	var btn = document.querySelector(".login_box .log_btn")
	var name1 = document.querySelector(".login_box #log_tel")
	var password1 = document.querySelector(".login_box #log_pass")
	btn.onclick = function(){
		console.log("123");
		var data = `username=${name1.value}&password=${password1.value}`;
		AJax("POST","/login",data,function(data){
			var data = JSON.parse(data);
			if(data.success){
				window.location.href = 'http://127.0.0.1:3000/'
			}
		})
	}
}