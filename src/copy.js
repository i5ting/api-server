require('shelljs/global')
var gulp = require('gulp');

var path_arr, npm_installed_path;
// npm_installed_path
path_arr =  __dirname.split('/');
path_arr.pop();

npm_installed_path = path_arr.join("/");


var desc_path = process.cwd() + '/node_modules';

var sources = ['supervisor','shelljs','node-require-directory',"express","body-parser","cookie-parser","morgan","serve-favicon","debug","jade" ]

function main(){
	sources.forEach(function(folder_name){
		var source_path = _get_path_with(folder_name);
		_cp(source_path,desc_path);
	});
	
	cp_bin();
}

function cp_bin(){
	var source_path = _get_path_with('/.bin/*');
	desc_path = desc_path + '/.bin/'
	mkdir('-p',desc_path);
	cp('-Rf', source_path, desc_path);
}

function _get_path_with(folder_name){
	return npm_installed_path + '/node_modules/' + folder_name;
}

function _cp(source_path,desc_path){
	 gulp.src(source_path).pipe(gulp.dest(desc_path));
}

if( process.argv.length > 1){
	main();
}

module.exports = main;