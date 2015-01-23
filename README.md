# api-server

## install

	[sudo] npm install -g apis

## Usages

执行命令

	apis .
	
test

	curl http://127.0.0.1:3333/users

## 实现步骤

- [x] 根据request生成server/routes.js
- [x] 根据*.request生成server/routes/*.js
- [x] 如果server目录没有server.js，从api-server安装地址copy
- [x] 从api-server安装地址copy node_modules
- [x] 从api-server安装地址copy vendor/package.json
- [x] 在当前目录，执行npm start，调用supervisor
- [x] 使用`api .`测试

## Request

get

```
{
  "name": "这是一个get请求",
  "url": "http://218.247.15.102/appfuse_emm_backend/v1/appversions.json",
  "type": "get",
  "params": {},
  "desc": " - aaaa\n - bbb\n"
}
```

post

```
{
	"name":"这是一个post2请求",
	"url":"http://218.247.15.102/appfuse_emm_backend/v1/appschedule/list.json",
	"type":"post",
	"params":{
	}
}
```

upload

```
{
  "name": "这是一个upload请求",
  "url": "http://127.0.0.1:3456/post/formdata.json",
  "type": "upload",
  "params": {
    "names": "pic",
    "filename": "da_qin_huang_ling_.mobi"
  }
}
```