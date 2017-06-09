var assert = require('assert');
var events = require('events');
var querystring = require('querystring');
var stream = require('stream');
var util = require('util');
var buffer = require('buffer');

//以上内容都会通过 browserify shim for node

//不要直接使用window,而应该用global变量
//global - top-level scope object (window)

var vue = require('vue');
var q = require('q');
var axios = require('axios');

var getBrowserStorage = require('./services/browser-storage');

//一定要注意：jquery是通过browserify-shim引入的，只能在由browserify打包、符合commonjs规范的模块中使用
//所以在index.html中直接使用会出错
//在这里使用就不会出错
//console.log("这里输出jquery");
//var jquery = require("jquery");
//console.log(jquery);



//entry.js的作用就是方便browserify使用 --require 导出需要的包