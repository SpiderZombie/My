var express = require("express");
var client = new express();
client.get("",function(request,response){
	response.send("这是一个主页");
});

var server = client.listen(8080,function(){
	var port = server.address().port;
	console.log("服务器端口为:"+ port);
});