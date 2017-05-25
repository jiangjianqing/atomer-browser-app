/**
 * Created by jjq on 5/25/17.
 */
let Vue = require('vue').default;
var VueRouter = require('vue-router').default;
/*
var configRouter = {
    '/contract/updateFrame': {
        component: function (resolve, reject) {
            //重要
            // This special require syntax will instruct Webpack to
            // automatically split your built code into bundles which
            // are loaded over Ajax requests.
            require(['./contract/updateFrame'], resolve);
        }
    },
    '/finance/summaryIncome': {
        component: function (resolve, reject) {
            require(['./finance/summaryIncome'], resolve);
        }
    },
    '/dmap/task': {
        component: function (resolve, reject) {
            require(['./dmap/task'], resolve);
        }
    }
};
*/
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

//Vue.use(VueRouter);


module.exports = new VueRouter({
    // history: true,
    mode: 'history', //html5History mode
    //saveScrollPosition: true,
    routes : routes
});

