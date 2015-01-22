# api-server

## install

	[sudo] npm install -g apis

## Usages

执行命令

	apis .
	
## 实现步骤

1. 根据request生成server/routes.js
1. 根据*.request生成server/routes/*.js
1. 如果server目录没有server.js，从api-server安装地址copy
1. 从api-server安装地址copy node_modules
1. 从api-server安装地址copy vendor/package.json
1. 在当前目录，执行npm start，调用supervisor
1. 使用`api .`测试

