<?php
include "mysqli.php";
// echo $_GET['now'];
$username   = $_POST["username"];
$password   = $_POST["password"];
@$is_rember = $_POST['rem'];
$sql        = "SELECT * FROM users WHERE username ='$username' AND password = $password ";
$res        = getlist($sql);
if (empty($res)) {
	// 登录失败
	echo "<script>alert('用户名或者密码错误'); window.location='index.php'</script>";
	// header("Location:index.php");//跳转到登录页面
} else {
	//登录成功
	// 存session 这样的话其他页面也可以取到这个值，即判断了登录状态
	session_start();
	$_SESSION['username'] = $username;
	echo $_SESSION['username'];
	//判断是否要记住用户名或密码
	if ($is_rember) {
		setcookie("username", $username, time()+7*24*3600);
	}
	header("Location:index.php");
}

?>