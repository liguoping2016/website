<?php

include "mysqli.php";

// print_r($_POST);
// die;
$name      = $_POST['name'];
$describe  = $_POST['describe'];
$author    = $_POST['author'];
$address   = $_POST['address'];
$startDate = $_POST['startDate'];
$price     = $_POST['price'];
$isbn      = $_POST['isbn'];
$pic       = $_FILES['pic']['name'];

$newsTime = date("Y-m-d H-i-s", time());

$sql = "INSERT INTO list (bookname,des,author,startTime,address,price,isbn,pic,time) VALUES ('$name','$describe','$author','$startDate','$address',$price,'$isbn','$pic','$newsTime')";
// echo $sql;
// die;
$res = add($sql);
die;

if ($res) {
	$info['status'] = 1;
	$info['info']   = "添加成功";

} else {
	$info['status'] = 0;
	$info['info']   = "添加失败";
}
echo json_encode($info);

?>