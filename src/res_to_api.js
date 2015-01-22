var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var shell = require('shelljs');
var tpl = require('tpl_apply');

var console = require('logge');

REQUEST_FOLDER_NAME = "/request"
RESPONSE_FOLDER_NAME = "/response"
SERVER_FOLDER_NAME = "/server"
GENERATE_MARKDOWN_FILE_NAME = "api.md"

function log(t){
	console.log(t);
}
var request_dir = process.cwd() + REQUEST_FOLDER_NAME;
var api_md_file = process.cwd() + '/' + GENERATE_MARKDOWN_FILE_NAME;
var response_dir = process.cwd() + RESPONSE_FOLDER_NAME;
var server_dir = process.cwd() + SERVER_FOLDER_NAME;
var server_routes_dir = process.cwd() + SERVER_FOLDER_NAME + '/routes';

function decode_url(url){
	url = url.replace(/__/g,':');
	return url;
}

function get_url(jsonObj){
	var url = jsonObj['url'];
	return decode_url(url);
}

function res_to_api(jsonObj, api_md_file ,cb_succ, cb_fail) {	
	var file_name = jsonObj.file_name.replace(/.req/, '');
	var _url = jsonObj.url.replace(/http__\/\//,'')
	
	console.dir(_url)
	var aa = _url.split('/');
		
	aa.shift();
	_url = aa.join('/')
	var url = '/' + _url;
		
		
	source = require('./get_npm_installed_path')() + '/src/tpl/route.js'
	
	dest = server_routes_dir + '/route.generate.js'
	console.dir(source)
	
	var mappings = [];
	
	url_mappings.forEach(function(obj){
		//
		var _url = obj.url.replace(/http__\/\//,'')
		
		 console.dir(_url)
			var aa = _url.split('/');
			
			aa.shift();
			_url = aa.join('/')
			obj.url = '/' + _url;
	})

	tpl.tpl_apply(source, {
	  url_mappings:url_mappings
	}, dest);
	
	return Promise.resolve(result);
}

module.exports = res_to_api