/**
 * Created by jjq on 5/25/17.
 */

let menus = {
    'welcome':{
        title: '主页',
        componentName: 'welcome'
    },
    'user-manage':{
        title: '用户管理',
        componentName: 'user-manage'
    }
};


module.exports = menus;

let Vue = require('vue').default;
Object.keys(menus).forEach(menu => {
    const Component = require('../components/' + menus[menu].componentName + '.vue');
    Vue.component(menu, Component);
});
