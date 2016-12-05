<?php
include "mysqli.php";
$id  = $_GET['id'];
$sql = "DELETE FROM cart WHERE id=$id ";
echo $sql;
$del = delete($sql);
if ($del) {
	echo "删除成功";
	echo ("<script>window.location.href='shopcart.php'</script>");
} else {
	echo "删除失败";
	header("Location:shopcart.php");
}

?>