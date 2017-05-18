var assert = require('assert');
var events = require('events');
var querystring = require('querystring');
var stream = require('stream');
var util = require('util');
var buffer = require('buffer');

//以上内容都会通过 browserify 的 --require 导出

//不要直接使用window,而应该用global变量
//global - top-level scope object (window)
