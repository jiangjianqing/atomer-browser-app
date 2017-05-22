/**
 * Created by jjq on 5/22/17.
 */
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));

module.exports = {
    //2、进出口文件配置
    entry:__dirname+'/lib/entry.js',//指定的入口文件
    output: {//输出
        path: __dirname+'/dist',//输出路径
        filename: 'webpack-bundle.js'//输出文件名
    },
    module: {//在配置文件里添加加载器说明，指明每种文件需要什么加载器处理
        loaders: [
            {//json加载器
                test: /\.json$/,
                loader: "json-loader"//注意-loader不能省略，网上说能省略，经测试编译会报错
            },
            {//5、编译es6配置
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query:babelConfig
            },
            {//3、CSS-loader
                test:/\.css$/,
                loader:'style-loader!css-loader'//添加对样式表的处理
            }

        ]
    },
    //4、服务器依赖包配置
    //https://webpack.js.org/configuration/dev-server/#devserver
    devServer: {//注意：网上很多都有colors属性，但是实际上的webpack2.x已经不支持该属性了
        port:9191,
        contentBase : [//本地服务器所加载的页面所在的目录
            path.join(__dirname, "./app"),
            path.join(__dirname, "."), //2017.05.22 保持webpack和webstorm调试index一致的设置项：使都能访问dist目录
            path.join(__dirname, "public"),
            path.join(__dirname, "assets")
        ],

        historyApiFallback: true,//spa使用html5的route mode , 不跳转
        inline: true,//实时刷新

        //hot：true,//不要书写该属性，否则浏览器无法自动更新
        //publicPath："/asses/",//设置该属性后，webpack-dev-server会相对于该路径

        //Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors
        overlay: {
            warnings: true,
            errors: true
        }
    },

    plugins:[]//插件
}