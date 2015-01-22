module.exports = function(app){
	var api_routes = require('node-require-directory')(__dirname + '/routes');
	
	{{#each url_mappings}}
	app.use('{{url}}', api_routes.{{file_name}});
  {{/each}}
}