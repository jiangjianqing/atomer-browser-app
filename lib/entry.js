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



//entry.js的作用就是方便browserify使用 --require 导出需要的包