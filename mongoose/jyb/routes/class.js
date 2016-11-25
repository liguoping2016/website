var express = require('express');
var router = express.Router();

var mongo = require(path+"/Model/users")


/* GET users listing. */
router.get('/config', function(req, res, next) {
  res.render("hello",{
  	title: "课程后台上传"
  })
});
router.post('/classList', function(req, res, next) {
  	var className = req.body.className;
	var des = req.body.des;
	var date = req.body.date;
	var price = req.body.price;
	var oldPrice = req.body.oldPrice;
	var pic = req.body.pic;
	var type = req.body.type;
	var name = req.body.name;
	// mongo.classList.findById("582c1b39af1c4d3e61f0b838",function(err,data){
	// 	console.log(data)
	// })
	// mongo.classList.find({"className":"vr"},function(err,data){
	// 	console.log(data);
	// })
	mongo.classList.create({
		className: className,
		des: des,
		date: date,
		price: price,
		oldPrice: oldPrice,
		pic: pic,
		type: type
	},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		return res.send({
			success: 1,
			info: "成功"
		})
	})

});

module.exports = router;

// div.livecourse_right_box
// 						a(href="/details")
// 							img(src="/images/HTML5.jpg")
// 							div.info
// 								div.title HTML5网络课
// 								p 
// 									span 蓝鸥科技
// 									span 2016-11-22~2017-03-15
// 								p.places
// 									span 剩余名额：60
// 								em  直播和录播结合，解决在职学习时间、地域冲突难题，确保学习质量。直播互动，名师重点知识串讲、随时在线答疑。录播可随到随学，还能查漏补缺、反复学，巩固学习效果
// 					div.livecourse_right_box
// 					div.livecourse_right_box
// 					div.livecourse_right_box