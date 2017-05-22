# atomer-browser-app
the skeleton of my browser app

##q可以同时用于node和browser环境,所以使用
https://www.npmjs.com/package/q

##ajax请求使用axios库
https://www.npmjs.com/package/axios

##自动构建工具使用gulp
https://www.npmjs.com/package/gulp

browserify -r assert -r events -r querystring -r stream -r util -r buffer ./app/main.js > ./dist/common.js

##使用以下第三方库作为基础功能模块
handlebars  --  模板处理
vue -- view处理，类似还有react，但是vue感觉更接地气

#### Auto--test
测试使用了karma+mocha的组合

karma方便在浏览器端进行调试 -- 通过karma start 启动
```shell
但要先安装karma的命令行
npm install -g karma-cli
```
mocha则集成进命令行 -- 通过npm test 启动
上述两种方法组合使用

##babel的使用
browserify中使用babelify   transform
webpack中使用babel-loader
mocha中使用参数配置直接调用babel