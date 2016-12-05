<?php
include "mysqli.php";
//处理分页数据的php
// 接收点击的当前页面
$p          = $_POST['p'];
$perages    = $_POST['prepage'];
$sql        = "SELECT * FROM list";
$list       = getlist($sql);
$totalCount = count($list);
$strpage    = ($p-1)*$perages;
$sql2       = "SELECT * FROM list LIMIT  $strpage,$perages";
$list2      = getlist($sql2);
echo json_encode($list2);

?>