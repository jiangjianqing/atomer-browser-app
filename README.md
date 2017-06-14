#对source-map支持比较好的浏览器
特别注意：优先使用chrome

#browserify和webpack
browserify比较旧，适合用于开发传统型通用库。注意：在当前案例中对.vue的支持有问题（应该是vueify的锅），react可以正常使用。
browserify没有找到合适的replace插件来处理NODE_ENV变量(gulp-replace无法过滤node_modules目录,这一个功能非常重要，browserify显得弱了)
browserify对vue的支持不够，对react不错

webpack2当前推荐使用。

rollup对于非es6的package兼容性不好，目前测试不成功，将以webpack2为主
,后续继续观察

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

#执行以下命令测试babel的支持能力
babel-node src/test.js

# -s 参数生成source map文件
$ babel src -d lib -s

# 使用 -w 参数，这个命令参数指定的是watch，每次code目录的文件修改后都会触发babel命令的再次执行。
babel -w code/ -d build/

#代码静态检查
flow init  //用于生成.flowconfig文件

#npm-run-all
npm-s and npm-p are shorthand commands.
```shell
npm-run-all clean lint build:*     // npm-s .....
npm-run-all --parallel watch:*     // npm-p .....
```

#babel "add-module-exports" 作用:
es6模块转es5时，加入一句module.exports['default'] = xxx

这样可以兼容 es6的export default 和commonjs 的module.exports
