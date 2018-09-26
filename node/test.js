var fs = require("fs");

fs.readFile("text.txt",function(error,data){
	if (error)
		console.log("读取失败");
	else
		console.log(data.toString());
});

console.log("test hello world");