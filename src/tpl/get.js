var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	{{#each mocks}}
	api_render(req, res, '{{type}}','{{{this.api_render_file_path}}}')
  {{/each}}
	
	res.json({
		status:{
			code	: '500',
			msg		: 'api server无法解析改参数'
		}
	});
});

function api_render(req, res, method, file_path){
	var path_arr = file_path.split('/');
	
	//a=1&b=2&c=3.json
	param_string = path_arr.pop().replace(/.json/,'');
	
	console.log(param_string + '= param_string')
	
		console.dir(req.query)
	var a = params_to_string(req);
	
	console.dir(a)
	if(a == param_string){
		console.dir('sssssssssssssssssss');
		json_render(req,res,file_path);
	}
}

function json_render(req,res,file_path){
	if(req.method.toLowerCase() == 'get'){		
		console.log('file_path = ' + file_path)
		var file_content = fs.readFileSync(file_path, {encoding: 'utf-8'});
		console.log('file_content = ' +file_content);
		json_obj = get_json(file_content);
		return res.json(json_obj);
	}
}

function params_to_string(req){
	var cparams = [];
	
	console.dir('----------' + req.method)
	if(req.method.toLowerCase() == 'get'){
		
		for(var i in req.query){
			console.dir(i + ' --- ' +  req.query[i]);
			cparams.push(i + '=' + req.query[i])
		}
		
		return cparams.join('&');
	}
	
	if(req.method.toLowerCase() == 'post'){
		for(var i in req.body){
			cparams.push(i + '=' + req.query[i])
		}
		
		return cparams.join('&');
	}
	
	return cparams.join('&');
}

function get_json(str){
	return JSON.parse(str);
}
	
module.exports = router;
