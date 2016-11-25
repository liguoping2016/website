var express = require('express');

var router = express.Router();
var mongo = require(path+"/Model/users");
/* GET home page. */
// 渲染页面
router.get('/', function(req, res, next){	
  if(req.session.user){
  	res.render('layout',{title:'登录成功后的Express',islogin:true,isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
  }else{
  	res.render('layout',{title:'登录失败后的Express',islogin:false,isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
  }
});

// 直播课程
router.get('/list?*',function(req,res,next){
	mongo.classList.find({type:'list',},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/all',istrue:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
// 点播课程
router.get('/dian?*',function(req,res,next){
	mongo.classList.find({type:'dian',all:'all'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'db',bo:'/all2',title:'点播课程',istrue:true,active:{zhibo:'',dianbo:"on",all:''},isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
})
router.get('/all2/zb',function(req,res,next){
	mongo.classList.find({type:'list',},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'zb',bo:'/all2',active:{zhibo:'on',dianbo:"",all:''},istrue:true,title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/ios2/zb',function(req,res,next){
	mongo.classList.find({name:'ios',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'zb',bo:'/ios2',isios:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/html2/zb',function(req,res,next){
	mongo.classList.find({name:'html',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'zb',bo:'/html2',ishtml:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
})
router.get('/unity2/zb',function(req,res,next){
	mongo.classList.find({name:'unity',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'zb',bo:'/unity2',isunity:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/react2/zb',function(req,res,next){
	mongo.classList.find({name:'react',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'zb',bo:'/react2',isreact:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
// 点播课程1
router.get('/all2/db',function(req,res,next){
	mongo.classList.find({all:'all',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'db',bo:'/all2',active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
})

router.get('/ios2/db',function(req,res,next){
	mongo.classList.find({name:'ios',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'db',bo:'/ios2',isios:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
router.get('/html2/db',function(req,res,next){
	mongo.classList.find({name:'html',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'db',bo:'/html2',ishtml:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
})
router.get('/unity2/db',function(req,res,next){
	mongo.classList.find({name:'unity',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,dian:'db',bo:'/unity2',isunity:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
router.get('/react2/db',function(req,res,next){
	mongo.classList.find({name:'react',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'db',bo:'/react2',isreact:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
// 全部1
router.get('/all2/alls',function(req,res,next){
	mongo.classList.find({all:'all'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'alls',bo:'/all2',istrue:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
})

router.get('/ios2/alls',function(req,res,next){
	mongo.classList.find({name:'ios'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'alls',bo:'/ios2',isios:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})
router.get('/html2/alls',function(req,res,next){
	mongo.classList.find({name:'html'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'alls',bo:'/html2',ishtml:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
})
router.get('/unity2/alls',function(req,res,next){
	mongo.classList.find({name:'unity'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'alls',bo:'/unity2',isunity:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})
router.get('/react2/alls',function(req,res,next){
	console.log("123");
	mongo.classList.find({name:'react'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('dianclass',{data:data,dian:'alls',bo:'/react2',isreact:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})







// 直播课程1
router.get('/all/zhibo',function(req,res,next){
	mongo.classList.find({type:'list',},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/all',active:{zhibo:'on',dianbo:"",all:''},istrue:true,title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/ios/zhibo',function(req,res,next){
	mongo.classList.find({name:'ios',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/ios',isios:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/html/zhibo',function(req,res,next){
	mongo.classList.find({name:'html',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/html',ishtml:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
})
router.get('/unity/zhibo',function(req,res,next){
	mongo.classList.find({name:'unity',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/unity',isunity:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
router.get('/react/zhibo',function(req,res,next){
	mongo.classList.find({name:'react',type:'list'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'zhibo',cname:'/react',isreact:true,active:{zhibo:'on',dianbo:"",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isDirec:true})
		}

	})
	
})
// 点播课程1
router.get('/all/dianbo',function(req,res,next){
	mongo.classList.find({all:'all',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'dianbo',cname:'/all',active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
})

router.get('/ios/dianbo',function(req,res,next){
	mongo.classList.find({name:'ios',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'dianbo',cname:'/ios',isios:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
router.get('/html/dianbo',function(req,res,next){
	mongo.classList.find({name:'html',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'dianbo',cname:'/html',ishtml:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
})
router.get('/unity/dianbo',function(req,res,next){
	mongo.classList.find({name:'unity',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'dianbo',cname:'/unity',isunity:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
router.get('/react/dianbo',function(req,res,next){
	mongo.classList.find({name:'react',type:'dian'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'dianbo',cname:'/react',isreact:true,active:{zhibo:'',dianbo:"on",all:''},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isBunc:true})
		}

	})
	
})
// 全部1
router.get('/all/total',function(req,res,next){
	mongo.classList.find({all:'all'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'total',cname:'/all',istrue:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
})

router.get('/ios/total',function(req,res,next){
	mongo.classList.find({name:'ios'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'total',cname:'/ios',isios:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})
router.get('/html/total',function(req,res,next){
	mongo.classList.find({name:'html'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'total',cname:'/html',ishtml:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
})
router.get('/unity/total',function(req,res,next){
	mongo.classList.find({name:'unity'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'total',cname:'/unity',isunity:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})
router.get('/react/total',function(req,res,next){
	console.log("123");
	mongo.classList.find({name:'react'},function(err,data){
		if(err){
			return res.send({
				success: 0,
				info: "没有成功"
			})
		}
		if(data){
			res.render('class',{data:data,name:'total',cname:'/react',isreact:true,active:{zhibo:'',dianbo:"",all:'on'},title:'直播课程',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
		}

	})
	
})






router.get('/details',function(req,res,next){
	res.render('goods',{title:'商品详情',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册'})
})
// 登录
router.get('/login',function(req,res,next){
	res.render('login',{title:'登录',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isLogi:true,on:true})
})
// 注销
// router.get('/cancel',function(req,res,next){
// 	res.render('cancel',{title:'注销'})
// })
// 注册
router.get('/reg',function(req,res,next){
	res.render('login',{title:'注册',isDirect:'直播课程',isBunch:'点播课程',isLogin:'登录',isRegister:'注册',isRegiste:true,onr:true})
})

// 处理登录请求
router.post("/login",function(req,res,next){
	// console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	mongo.users.findOne({"username":username},function(err,user){
		if(user){
			if(user.password == password){
				req.session.user = 1;
				res.send({
					success:true,
					info:"登录成功"
				})
			}
		}	
	})
})
// 处理注销请求
router.get("/cancel",function(req,res,next){
	res.session.user = null;
	res.redirect("/")
})
// 处理注册请求
router.post("/reg",function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	console.log(username,password,email,"123");
	mongo.users.findOne({"username":username},function(err,user){
		if(err){
			return res.send({
				success:false,
				info:'注册失败'
			})
		}
		if(user){
			return res.end({
				success:false,
				info:'有重名'
			})
		}else{
			mongo.users.create({
				username:username,
				password:password,
				email:email
			},function(err,data){
				if(err){
					return res.send({
						success:false,
						info:'注册失败'
					})
				}
				return res.send({
					success:true,
					info:'注册成功'
				})
			})
		}
	})
})
module.exports = router;
