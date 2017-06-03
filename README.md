#browserify和webpack
browserify属于比较旧的，标记为deprecated，
且当前案例中对.vue的支持有问题（应该是vueify的锅），react可以正常使用。

webpack2当前推荐使用。

有时间会增加rollup的配置。

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

##更新dependencies
```shell
npm outdated #查出哪些有更新
```


##初始化一个项目目录 （根据配置复制必要的文件）
```shell
node create-prj.js ../atomer-vistion-app/
```

##使用watchify出现错误:watch  xx/xx/events.js ENOSPC
原因是：主要是因为gulp的watch需要监听很多文件的改动,但是fedora、ubuntu系统的文件句柄其实是有限制的,因此可以使用以下命令
```shell
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

```


#检查nodejs对es标准的兼容程度
npm -g install es-checker
命令行执行：es-checker


#如果要使用babel命令行，则需要安装babel-cli
npm -g  install babel-cli

#执行以下命令测试babel的支持能力
babel-node src/test.js

# 转码结果输出到标准输出
$ babel example.js

# -s 参数生成source map文件
$ babel src -d lib -s

# 使用 -w 参数，这个命令参数指定的是watch，每次code目录的文件修改后都会触发babel命令的再次执行。
babel -w code/ -d build/

#将src转码到dist
npm run build