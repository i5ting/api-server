// 获取npm安装路径
function _get_npm_installed_path(){
	var path_arr, npm_installed_path;
	// npm_installed_path
	path_arr =  __dirname.split('/');
	path_arr.pop();
	return path_arr.join("/");
}


module.exports = _get_npm_installed_path;