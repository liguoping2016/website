var http = require("http");
var mime = require("mime");
var fs = require("fs");
var server =http.createServer(handler);
var io = require('socket.io')(server);
var express = require ("express")(); 
function handler(req,res){
	var filePath = "";
	if(req.url == "/"){
		var filePath = "./html/index.html";
	}else{
		var filePath = "." + req.url;
	}
	serverStatic(res,filePath);
}
function serverStatic(res,filePath){
	fs.exists(filePath,function(exists){
		fs.readFile(filePath,function(err,data){
			if(err){
				send404(res)
			}
			res.writeHead(200,{
				"Content-Type":mime.lookup(filePath)
			})
			res.end(data)
		})
	})
}
function send404(res){
	res.writeHead(404,{
		"Content-Type":"text/plain"
	})
	res.end("404!sorry,Not found")
}
   var num =0;
   var arr=[];

io.on("connection",function(socket){
	//emit(事件名，{发射主题})
    //on(事件名，接收回调)
    //服务端与客户端一一对应
    num ++;
	socket.on("message",function(data){
		arr.push(data)
		io.sockets.emit("news",{hello:data.Info,num:num,arr:arr});
	})
})
server.listen(4040,function(){
	console.log("go!go!go!");
})