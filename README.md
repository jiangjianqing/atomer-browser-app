# atomer-browser-app
the skeleton of my browser app

##q可以同时用于node和browser环境,所以使用
https://www.npmjs.com/package/q

##ajax请求使用axios库
https://www.npmjs.com/package/axios

##自动构建工具使用gulp
https://www.npmjs.com/package/gulp

browserify -r assert -r events -r querystring -r stream -r util -r buffer ./app/main.js > ./dist/common.js
