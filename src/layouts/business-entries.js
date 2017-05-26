
/**
 * Automately created by atomer.
 */
let entries = [
	{
	"sn": 1,
	"title": "算法开发",
	"selected": true,
	"name": "algorithm-dev",
	"component-path": "./components/algorithm-dev.vue"
},
	{
	"sn": 3,
	"title": "项目快速开发",
	"selected": true,
	"name": "project-dev",
	"component-path": "./components/project-dev"
},
];
module.exports = entries;

let Vue = require('vue').default;

Vue.component('algorithm-dev', require('/home/jjq/git/js/atomer-browser-app/src/components/algorithm-dev.vue'));
Vue.component('project-dev', require('/home/jjq/git/js/atomer-browser-app/src/components/project-dev'));
