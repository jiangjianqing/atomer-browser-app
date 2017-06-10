/**
 * Created by cz_jjq on 17-6-10.
 */
// Rollup plugins
import vue from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-only';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';//运行加载 node_modules 中的三方模块。
import commonjs from 'rollup-plugin-commonjs';	//将CommonJS模块转换成ES6，防止他们在Rollup中失效。
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

var __DEV__ = !(process.env.NODE_ENV === 'production');

/*

 .babelrc中需要加入
 {
   presets: [
   	["es2015", { "modules": false }]
   ]
 }
 注意:不能用 babel 转换 ES6 的模块，因为 rollup 的打包是依赖于 ES6 模块的。.babelrc`配置如下：
 */

export default {
  entry: 'src/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife', // Rollup支持多种输出格式。因为我们是要在浏览器中使用，需要使用立即执行函数表达式(IIFE)[注1]
  sourceMap: __DEV__,
  moduleName: 'dqSystem',
  plugins: [
	globals(),
	builtins(),
  	vue(),
	css(),
	resolve({
	  jsnext: true,//jsnext 属性是为了帮助 Node模块迁移到ES2015 的一部分。
	  main: true, //main 和 browser 属性帮助插件决定哪个文件应该被bundle文件使用。
	  browser: true
	}),
	commonjs(),/*
	eslint({
	  exclude: [
		'src/styles/**'
	  ]
	}),*/
	babel({
	  exclude: 'node_modules/**'
	}),
	replace({
	  exclude: 'node_modules/**',
	  NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
	}),
	(__DEV__ || uglify())
  ]
};