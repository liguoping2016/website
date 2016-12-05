<?php
include "mysqli.php";
if (@!empty($id = $_GET['id'])) {
	$id  = $_GET['id'];
	$sql = "SELECT * FROM list WHERE id=$id ";
	$one = getlist($sql);

}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>图书展示</title>
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
					<a href="javascript:void(0)" class="on">图书展示</a>
				</li>
				<li>
					<a href="javascript:void(0)">联系我们</a>
				</li>
				<li>
					<a href="javascript:void(0)">购物车</a>
				</li>
				<li>
					<a href="addbook.html">添加图书</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="details">
		<div class="min_details">
<?php if (@$one) {?>
	<img src="../images/<?php echo $one[0]['pic'];?>" alt="">
	<div class="des">
	<h2><?php echo $one[0]['bookname'];?></h2>
	<p><?php echo $one[0]['des'];?></p>
	<div class="des_right">
	<span>作者： <i><?php echo $one[0]['author'];?> </i></span>
	<span>出版社： <i><?php echo $one[0]['address'];?> </i></span>
	<span>出版时间： <em><?php echo $one[0]['startTime'];?></em></span>

	<span>国际标准书号ISBN： <em><?php echo $one[0]['isbn'];?></em></span>
	<span class="last">友情价格： <strong>￥<?php echo $one[0]['price'];?></strong></span>
	</div>
	<a href="shopcart.php?id=<?php echo $one[0]['id']?>" class="addcart">加入购物车</a>
	<a href="shopcart.php?id=<?php echo $one[0]['id']?>" class="shopping">立即购买</a>
	</div>
	<?php } else {?>
	<img src="../images/list3.png" alt="">
		<div class="des">
			<h2>巨人的陨落(世界是属于勇敢者的，所以世界是属于我的)</h2>
			<p>(全球读者平均3个通宵读完的超级巨作，全球每三秒卖出一本！十年来，横扫欧美16国排行榜的超级小说。碾压全球畅销榜的伟大故事，18次登上10国畅销榜第一名！首次登陆中国！)读客出品</p>
			<div class="des_right">
				<span>作者： <i>[英]肯·福莱特</i></span>
				<span>出版社： <i>江苏文艺出版社 </i></span>
				<span>出版时间： <em>2016年4月</em></span>

				<span>国际标准书号ISBN： <em>4545445454545</em></span>
				<span class="last">友情价格： <strong>￥110.30</strong></span>
			</div>
			<a href="shopcart.php?id=<?php echo $one[0]['id']?>" class="addcart">加入购物车</a>
			<a href="shopcart.php?id=<?php echo $one[0]['id']?>" class="shopping">立即购买</a>
		</div>

	<?php }?>
		</div>
	</div>
	<div class="foot">
		<div class="min_foot">
			<ul>
				<li>
					<a href="">免费条款</a>
				</li>
				<li>
					<a href="">隐私保护</a>
				</li>
				<li>
					<a href="">咨询热点</a>
				</li>
				<li>
					<a href="">联系我们</a>
				</li>
				<li>
					<a href="">公司简介</a>
				</li>
				<li>
					<a href="">批发方案</a>
				</li><li>
					<a href="">配送方式</a>
				</li>
			</ul>
			<p>2037884534-6593546了覅觉得该喝的</p>
	</div>
</body>
</html>