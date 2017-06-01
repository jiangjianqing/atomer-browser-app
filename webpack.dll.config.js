var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

var package = require("./package.json");

var BUILD_PATH = path.resolve(package.output? package.output : './build');

module.exports = {
    entry: {
        vender: [//公共组件
            "assert",
            "events",
            "querystring",
            "stream",
            "util",
            "buffer",
            "vue",
            "q",
            "axios",
            "handlebars",
            "react"
            /*
            'react',
            'react-dom',
            'react-router',
            'react-bootstrap',
            'redux',
            'react-redux',
            'redux-thunk',
            'react-intl',
            'intl',
            'react-dnd',
            'react-dnd-html5-backend',
            'immutable',
            'antd',
            'moment',
            'isomorphic-fetch',
            'pure-render-decorator',*/
            // 'lodash',
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: 'dll.[name].[hash].js',
        library: '[name]'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader', 'autoprefixer-loader']
            },{
                test: /\.less$/,
                use:['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            },
            {
                test: /\.hbs/,
                loader: "handlebars-template-loader"
            }
        ]
    },
    node: {
        //解决以下错误:
        //ERROR in ./~/handlebars/lib/index.js
        //Module not found: Error: Can't resolve 'fs' in '/home/jjq/git/js/atomer-browser-app/node_modules/handlebars/lib'
        fs: "empty"
    },
    resolve: {
        //解决以下警告:
        //WARNING in ./~/handlebars/lib/index.js
        //require.extensions is not supported by webpack. Use a loader instead.
        alias: {
                'handlebars': 'handlebars/runtime.js'
            }
    },
    resolveLoader: {
        alias: {
            'hbs': 'handlebars-loader'
        },
        modules:["node_modules",path.resolve(__dirname, "lib")]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.DllPlugin({
            path: path.resolve(BUILD_PATH+'/dll-manifest.json'),
            name: '[name]',
            context: __dirname
        }),
        new AssetsPlugin({ //生成bundleinfo.json，用于向index.hbs中注入
            prettyPrint: true,
            filename: '/dll-bundle-info.json',
            path: BUILD_PATH
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['exports', 'require']
            }
        })
    ]
};