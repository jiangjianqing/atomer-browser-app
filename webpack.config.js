/**
 * Created by jjq on 5/22/17.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //2、进出口文件配置
    entry:__dirname+'/lib/entry.js',//指定的入口文件
    output: {//输出
        path: path.resolve('./dist'),//输出路径
        filename: 'webpack-bundle.js'//输出文件名
    },
    // 表示这个依赖项是外部lib，遇到require它不需要编译，
    // 且在浏览器端对应window.React
    externals: {
        'react': 'window.React'
    },
    module: {//在配置文件里添加加载器说明，指明每种文件需要什么加载器处理
        rules: [
            {//20170522:经测试，多个同样的测试放在一起最ok
                test: /\.js$/,
                exclude:/node_modules/,
                use : [ //多个loader一起使用
                    {//es2015处理
                        loader : 'babel-loader'
                    },
                    //重要：结合使用webpack和browserify的transform
                    "transform-loader?brfs",
                    "transform-loader?browserify-shim"
                ]
            },
             //20170522 暂时都放在上面同一个loader中测试一下是否可行

            {//3、CSS-loader
                test:/\.css$/,
                use : [
                    {loader : "style-loader"},
                    {
                        loader : "css-loader",
                        options : {
                            modules : true
                        }
                    }
                ]
                //loader:'style-loader!css-loader'//deprecated,感叹号的作用在于使同一文件能够使用不同类型的loader
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

    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ],//插件

    //使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
    //这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。
    // 不过在开发阶段这是一个非常好的选项.
    //https://webpack.github.io/docs/configuration.html#devtool
    devtool: '#eval-source-map'
};

//如果是产品模式则设定一些
if (process.env.NODE_ENV === 'production') {
    //在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap : true
        })
        //new ExtractTextPlugin("[name]-[hash].css")
    ]);
}