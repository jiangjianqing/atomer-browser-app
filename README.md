#browserify和webpack
browserify属于比较旧的，标记为deprecated，
且当前案例中对.vue的支持有问题（应该是vueify的锅），react可以正常使用。
以下为适合browserify的脚本
```json
{
  "scripts": {
        "watchify": "watchify -vd -p browserify-hmr -e src/main.js -o dist/build.js",
        "serve": "http-server -o -s -c 1 -a localhost",
        "dev": "npm-run-all --parallel watchify serve",
        "build": "cross-env NODE_ENV=production browserify -g envify src/main.js | uglifyjs -c warnings=false -m > dist/build.js"
    }
}
```


webpack2当前推荐使用。

有时间会增加rollup的配置。


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

##更新dependencies
```shell
npm outdated #查出哪些有更新
```


##初始化一个项目目录 （根据配置复制必要的文件）
```shell
node create-prj.js ../atomer-vistion-app/
```

