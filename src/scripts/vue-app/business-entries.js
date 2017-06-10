
/**
 * Automately created by atomer.
 */
let entries = [
	{
	"sn": 1,
	"title": "算法开发",
	"name": "algorithm-dev",
	"component-path": "./vue-app/components/algorithm-dev.vue"
},
	{
	"sn": 2,
	"title": "用户管理",
	"name": "user-manage",
	"component-path": "./vue-app/components/user-manage.vue"
},
	{
	"sn": 3,
	"title": "项目快速开发",
	"name": "project-dev",
	"component-path": "./vue-app/components/project-dev"
}
];
module.exports = entries;

let Vue = require('vue');

Vue.component('algorithm-dev', require('/home/cz_jjq/git/js/atomer-browser-app-template/src/scripts/vue-app/components/algorithm-dev.vue'));
Vue.component('user-manage', require('/home/cz_jjq/git/js/atomer-browser-app-template/src/scripts/vue-app/components/user-manage.vue'));
Vue.component('project-dev', require('/home/cz_jjq/git/js/atomer-browser-app-template/src/scripts/vue-app/components/project-dev'));
