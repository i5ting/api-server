require('shelljs/global')
var gulp = require('gulp');

var path_arr, npm_installed_path;
// npm_installed_path
path_arr =  __dirname.split('/');
path_arr.pop();

npm_installed_path = path_arr.join("/");

// only for cli test
var desc_path = process.cwd() + '/node_modules';

var sources_npm = ['supervisor','shelljs','node-require-directory',"express","body-parser","cookie-parser","morgan","serve-favicon","debug","jade" ]


function main(desc_path){
	var desc_path_npm = desc_path + '/node_modules';
	// npm copy
	sources_npm.forEach(function(folder_name){
		var source_path = _get_npm_path_with(folder_name);
		_cp(source_path, desc_path_npm);
	});
	
	// npm/.bin copy
	cp_bin();
	
	// vendor copy
	var source_path_vendor = _get_vendor_path();
	_cp(source_path_vendor, desc_path);
}

function cp_bin(){
	var source_path = _get_path_with('/.bin/*');
	desc_path = desc_path + '/.bin/'
	mkdir('-p',desc_path);
	cp('-Rf', source_path, desc_path);
}

function _get_npm_path_with(folder_name){
	return npm_installed_path + '/node_modules/' + folder_name;
}

function _get_vendor_path(){
	return npm_installed_path + '/vendor';
}

function _cp(source_path,desc_path){
	 gulp.src(source_path).pipe(gulp.dest(desc_path));
}

if( process.argv.length > 1){
	main(desc_path);
}

module.exports = main;