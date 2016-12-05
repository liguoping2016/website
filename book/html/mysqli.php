<?php
//echo phpinfo();
//php5.5以下的是用mysql来连接（面向过程），5.5以上的使用mysqli来连接（面向过程/面向对象）；

//连接数据库
//面向过程
//$link = mysqli_connect("localhost","root","root","house");
//
//if(mysqli_errno($link)){
//	echo mysqli_error($link);
//}
////sql语句
//$sql = "INSERT INTO users (username,age,pwd) VALUES ('王五',20,654321)";
////设置编码格式
////方式一：
////mysqli_query($link,"set names utf8");
////方式二
//mysqli_set_charset($link, "utf8");
//
//
//
////执行sql
//$res = mysqli_query($link, $sql);
//if($res){
//	echo "添加成功";
//}else{
//	echo "添加失败";
//}

//面向对象
//$mysqli = new mysqli("localhost","root","root","house");
//if($mysqli->errno){
//	echo $mysqli->error;
//}else{
//	echo "连接数据库成功";
//}
//$name = "马云";
//$age  = 38;
//$pwd = 123654;
//
//$sql = "INSERT INTO users (username,age,pwd) VALUES ('".$name."',$age,$pwd)";
////echo $sql;
// die;
//$reslut = add($sql);
//if($reslut){
//	echo "添加成功";
//}else{
//	echo "添加失败";
//}
//添加函数
//function add($sql){
//	$mysqli = new mysqli("localhost","root","root","house");
//	if($mysqli->errno){
//		echo $mysqli->error;
//	}
//	//设置编码
//	$mysqli->query("set names utf8");
//	$res = $mysqli->query($sql);
//	if($res){
//		return true;
//	}else{
//		return false;
//	}
//}
//$sql = "INSERT INTO users(username,pwd,age) VALUES ('王林',123123,45)";
//$res = add($sql);
//if($res){
//	echo "成功";
//}else{
//	echo "失败";
//}

//$sql = "UPDATE users SET username='王建林' WHERE id=18";
//$res = update($sql);
//if($res){
//	echo "更新成功";
//}else{
//	echo "更新失败";
//}

//$sql = "DELETE FROM users WHERE id=18";
//$res = delete($sql);
//if($res){
//	echo "删除成功";
//}else{
//	echo "删除失败";
//}

//删除
function delete($sql) {
	//连接数据库
	$link = mysqli_connect("localhost", "root", "", "book");
	mysqli_query($link, "set names utf8");
	$res = mysqli_query($link, $sql);
	if ($res) {
		return true;
	} else {
		return false;
	}
}

//更新数据库
function update($sql) {
	//连接数据库
	$link = mysqli_connect("localhost", "root", "", "book");
	mysqli_query($link, "set names utf8");
	$res = mysqli_query($link, $sql);
	if ($res) {
		return true;
	} else {
		return false;
	}
}

/**
 * 数据库添加函数
 * $sql  string ：sql语句；
 * @return bool ;
 */
// function add($sql) {
// 	//连接数据库
// 	$link = mysqli_connect("localhost", "root", "", "book");
// 	//设置编码格式
// 	mysqli_query($link, "set names utf8");
// 	$res = mysqli_query($link, $sql);

// 	//	$reslut = mysqli_insert_id($link);
// 	//	echo $reslut;
// 	// die;
// 	if ($res) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function add($sql) {
	//连接数据库
	$link = mysqli_connect("localhost", "root", "", "book");
	//设置编码格式
	mysqli_query($link, "set names utf8");
	$res = mysqli_query($link, $sql);

	//	$reslut = mysqli_insert_id($link);
	//	echo $reslut;
	// die;
	if ($res) {
		return true;
	} else {
		return false;
	}
}
//$sql = "INSERT INTO users (username,pwd,age) VALUES ('周鸿祎',123456,19)";
//add($sql);

//事务

//$sql = "SELECT * FROM users WHERE is_delete=1 ORDER BY id DESC";
//$list = getlist($sql);
//pre($list);
function pre($data) {
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}
//查询
function getlist($sql) {
	//连接数据库
	$link = mysqli_connect("localhost", "root", "", "book");
	//设置编码格式
	mysqli_query($link, "set names utf8");
	//执行sql
	$res = mysqli_query($link, $sql);
	//取所有数据
	//	$list = mysqli_fetch_all($res);//常用
	//	$arr = array();
	//	while($list = mysqli_fetch_row($res)){
	//		$arr[] = $list;
	//	}
	//常用
	if ($res) {
		while ($list = mysqli_fetch_assoc($res)) {
			$arr[] = $list;
		}
		return $arr;
	} else {
		return false;
	}
	//	$res = mysqli_num_rows($res);
	//	echo $res;

	//$list = mysqli_fetch_object($res);
	return $arr;
}

?>