/**
 * Created by jjq on 5/25/17.
 */
let Vue = require('vue').default;
var VueRouter = require('vue-router');

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


Vue.use(VueRouter);


var router = new VueRouter({
    // history: true,
    saveScrollPosition: true
});

router.map(configRouter);

var App = Vue.extend({});
// var App = Vue.extend(require('./contract/updateFrame'));
router.start(App, '#app');

// just for debugging
window.router = router;