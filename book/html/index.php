<?php
include "mysqli.php";
$sql        = "SELECT * FROM list";
$list       = getlist($sql);
$perages    = 3;//每页要显示的数据条数
$totalCount = count($list);
if (empty($_GET['p'])) {
	$strpage = 0;
} else {
	$strpage = ($_GET['P']-1)*$perages;
}
$sql  = "SELECT * from list LIMIT $strpage,$perages";
$list = getlist($sql);
$page = ceil($totalCount/$perages);

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>首页</title>
	<link rel="stylesheet" type="text/css" href="../css/index.css">
	<script type="text/javascript" src="../js/jquery.js"></script>
</head>
<body>
	<div class="head">
		<div class="min_head">
			<h2>书吧</h2>
			<ul>
				<li>
					<a href="javascript:void(0)" class="on">网站首页</a>
				</li>
				<li>
					<a href="javascript:void(0)">关于我们</a>
				</li>
				<li>
					<a href="showbook.php">图书展示</a>
				</li>
				<li>
					<a href="javascript:void(0)">联系我们</a>
				</li>
				<li>
					<a href="shopcart.php">购物车</a>
				</li>
				<li>
					<a href="addbook.html">添加图书</a>
				</li>
<?php
session_start();
if (!empty($_COOKIE["username"])) {
	$_SESSION['username'] = $_COOKIE['username'];//转存

}
if (!empty($_SESSION['username'])) {
	echo "<span style='color:#fff;font-size:20px;margin-right:20px;padding-right:10px;'>".$_SESSION['username']."欢迎你</span><span style='color:#fff;font-size:20px;margin-right:20px' >|</span><a href='login.php?out=1' style='color:#fff;font-size:20px;'>退出</a>";
}
?>
</ul>
		</div>
	</div>
	<div class="main">
		<div class="min_main">
			<div class="left_main">
				<h1>我的书城</h1>
				<p>这里拥有世界各地的书籍，只有你想不到，没有我们这里没有的图书</p>
				<img src="../images/pic1.png" alt="">
			</div>
			<div class="right_main">
				<form action="login.php" method="post">
					<h2>快速登录</h2>
					<div>
						<input type="text" name="username" placeholder="用户名">
					</div>
					<div>
						<input type="password" name="password" placeholder="密码">
					</div>
					<input type="checkbox" name="rem[]">记住我
					<br/>
					<input type="button" name="name" value="登录">
					<input type="submit" name="name" value="注册">
				</form>
			</div>
		</div>
	</div>
	<div class="list">
		<div class="min_list">
			<ul  class="ul">
<?php foreach ($list as $key => $value) {?>
	<li>
	<div>
	<a href="showbook.php?id=<?php echo $value['id']?>">
	<img src="../images/<?php echo $value['pic']?>" alt="">
	</a>
	</div>
	<h3><?php echo $value['bookname']?></h3>
	<span>
	￥
	<em><?php echo $value['price']?></em>
	</span>
	<span class="shop">
	<a href="shopcart.html">立即购买</a>
	</span>
	</li>
	<?php }?>
</ul>
<div class="page">

<!-- <div class="fanYe"> -->
        <ul class="num">
          <li class="per">&lt;
&lt;
</li>
          <li id="nums1" class="nu num3">1</li>
          <li id="nums2" class="num3">2</li>
          <li class="next">&gt;
&gt;
</li>
        </ul>
</div>
 <!-- </div> -->

		</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	var nums1 = $("#nums1");
	var nums2 = $("#nums2");

	console.log(nums1.html(),nums2.html());
	$('.per').click(function(){
		console.log(1);
		if(parseInt($('#nums1').html())<=1){
			$('#nums1').html(1);
    		$('#nums2').html(2);
		}else{
			$('#nums1').html(parseInt($('#nums1').html())-1);
    		$('#nums2').html(parseInt($('#nums2').html())-1);
		}
		if($(".num3").eq(0).hasClass("nu")){
			getData($('#nums1').html());
		}else{
			getData($('#nums2').html());
		}
	})
	$('.next').click(function(){
		console.log(2);
		if(parseInt($('#nums2').html())>=<?php echo $page;?>){
			$('#nums1').html(<?php echo $page-1;?>);
    		$('#nums2').html(<?php echo $page;?>);
		}else{
			$('#nums1').html(parseInt($('#nums1').html())+1);
    		$('#nums2').html(parseInt($('#nums2').html())+1);
		}
		if($(".num3").eq(0).hasClass("nu")){
			getData($('#nums1').html());
		}else{
			getData($('#nums2').html());
		}
	})
	$('.num3').click(function(){
  getData($(this).html());
  $('.num3').removeClass('nu');
  $(this).addClass('nu');
});

	function getData(p){
		$.ajax({
			type:"post",
			url:"getData.php",
	 		dataType:"json",
            data:{
                p:p,
                prepage:<?php echo $perages;
?>
            },
			success:function(data){
				str="";
				for(var i=0;i<data.length;i++){
					str +="<li><div><a href='showbook.php?id="+data[i].id+"'><img src='../images/"+data[i].pic+"' alt=''></a>"+
					"</div><h3>"+data[i].bookname+"</h3><span>￥<em>"+data[i].price+"</em></span>"+
					"<span class='shop'><a href='shopcart.html'>立即购买</a></span></li>";
				}
				$(".min_list .ul").html(str);
			}
		})
	}
</script>
</script>
</html>