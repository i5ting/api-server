var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

	{{#each mocks}}
	api_render(req, res, '{{type}}','{{{this.api_render_file_path}}}')
  {{/each}}
	
});

function api_render(req, res, method, file_path){
	var path_arr = file_path.split('/');
	
	//a=1&b=2&c=3.json
	param_string = path_arr.pop().replace(/.json/,'');
	
	console.log(param_string + '= param_string')
	
	if(method == 'get'){
		var file_content = fs.readFileSync(file_path + file,{encoding: 'utf-8'});
		console.log('file_content' +file_content);
		json_obj = get_json(file_content);
		res.json(json_obj);
	}
}

function get_json(str){
	return JSON.parse(str);
}
	
module.exports = router;
