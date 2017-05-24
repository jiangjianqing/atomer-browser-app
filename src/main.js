/**
 * Created by jjq on 5/23/17.
 */
let Vue = require('vue').default; //20170523 : vue2.x需要这样使用
let page = require('page');
let routes = require('./routes');
require('easyui/jquery.easyui.min.js');

const app = new Vue({
    el: '#app',
    data: {
        ViewComponent: {render: h => h('div', 'loading...')}
    },
    render (h) {
        return h(this.ViewComponent)
    }
});

Object.keys(routes).forEach(route => {
    const Component = require('./pages/' + routes[route] + '.vue');
    page(route, () => app.ViewComponent = Component);
});
page('*', () => app.ViewComponent = require('./pages/404.vue'));
page();