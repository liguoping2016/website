<?php
include "mysqli.php";
if (@!empty($id = $_GET['id'])) {
	$id        = $_GET['id'];
	$sql       = "SELECT * FROM list WHERE id=$id ";
	$book      = getlist($sql);
	$bookid    = $book[0]['id'];
	$bookname  = $book[0]['bookname'];
	$bookprice = $book[0]['price'];
	$bookpic   = $book[0]['pic'];
	$sql2      = "INSERT INTO  cart (id,bookname,price,pic) VALUES ($bookid,'$bookname',$bookprice,'$bookpic')";
	$addbook   = add($sql2);
	// if ($addbook) {
	// 	echo "添加成功";
	// } else {
	// 	echo "添加失败";
	// }
	$sql3 = "SELECT * FROM cart";
	$sql4 = getlist($sql3);
	$arr  = $sql4;

}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>购物车</title>
	<link rel="stylesheet" type="text/css" href="../css/index.css">
	<link rel="stylesheet" type="text/css" href="../css/book.css">
</head>
<body>
	<div class="head">
		<div class="min_head">
			<h2>书吧</h2>
			<ul>
				<li>
					<a href="index.php">网站首页</a>
				</li>
				<li>
					<a href="javascript:void(0)">关于我们</a>
				</li>
				<li>
					<a href="javascript:void(0)">图书展示</a>
				</li>
				<li>
					<a href="javascript:void(0)">联系我们</a>
				</li>
				<li>
					<a href="javascript:void(0)" class="on">购物车</a>
				</li>
				<li>
					<a  href="addbook.html">添加图书</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="shopCart">
		<div class="min_shopCart">
			<h1>购物车</h1>
			<div class="trade">
				<div class="min_trade">
					<table cellspacing="0" width="1144" border="#dddddd">
						<tr>
							<th width="401" >图书</th>
							<th width="201" >书名</th>
							<th width="133.5">数量</th>
							<th width="133.5">单价</th>
							<th width="133.5">结算</th>
							<th width="133.5">删除</th>
						</tr>
<?php if (@$arr) {?>
	<?php foreach ($arr as $key => $value) {?>
				<tr class="on">
				<td>
				<img src="../images/<?php echo $value['pic'];?>" alt="书籍" width="60" height="80">
				</td>
				<td><?php echo $value['bookname'];?></td>
				<td>1本</td>
				<td><?php echo $value['price'];?></td>
				<td>付款</td>
				<td> <a href="delcart.php?id=<?php echo $value['id'];?>">删除</a></td>
				</tr>
		<?php }?>
		<?php } else {?>
		<tr class="on">
			<td>
			<img src="../images/list5.png" alt="书籍" width="60" height="80">
			</td>
			<td>啦啦啦</td>
			<td>1本</td>
			<td>4502</td>
			<td>付款</td>
			<td> <a href="delcart.php?id=<?php echo $value['id'];?>">删除</a></td>
			</tr>
	<?php }?>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="foot">
		<div class="min_foot">
			<ul>
				<li>
					<a href="javascript:void(0)">免费条款</a>
				</li>
				<li>
					<a href="javascript:void(0)">隐私保护</a>
				</li>
				<li>
					<a href="javascript:void(0)">咨询热点</a>
				</li>
				<li>
					<a href="javascript:void(0)">联系我们</a>
				</li>
				<li>
					<a href="javascript:void(0)">公司简介</a>
				</li>
				<li>
					<a href="javascript:void(0)">批发方案</a>
				</li><li>
					<a href="javascript:void(0)">配送方式</a>
				</li>
			</ul>
			<p>2037884534-6593546了覅觉得该喝的</p>
	</div>
</body>
</html>