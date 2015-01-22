// var fs = require('fs');
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
// var console = require('logge');

/**
 * 读取当前目录下面的server/route.js
 * 增加路由（由json_obj）
 */ 
function register_in_route(json_obj) {
	console.log('register_in_route+++'+json_obj);
	
	// return fs.readFileAsync(file,{encoding: 'utf-8'}).then(function(str){
	// 	// json 不支持属性里有冒号的情况
	// 	// 我其实想用yaml的，暂时先这样
	// 	var a = str.replace(/\":/g,'@@');
	// 	a = a.replace(/:/g,'__');
	// 	a = a.replace(/@@/g,'":');
	// 	var _new_json_string = JSON.parse(JSON.stringify(a));
	// 	var obj = JSON.parse(_new_json_string);
	// 	// obj.url = decode_url(obj.url);
	// 	return Promise.resolve(obj);
	// });
}

module.exports = register_in_route