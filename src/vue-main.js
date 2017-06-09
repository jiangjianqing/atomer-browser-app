/**
 * Created by jjq on 5/23/17.
 */
let Vue = require('vue'); //20170523 : vue2.x需要这样使用
//20170525 重要: page和director都是路由组件,page的介绍中可以学到一些route知识,director可以动态定义路由(Adhoc Routing 和 Scoped Routing)，各有优缺点
//20170525 :经过测试 ,director 1.2.6在使用时不会拦截页面向服务器请求数据，暂时还是用page
//When developing large client-side or server-side applications it is not always possible to define routes in one location.
// Usually individual decoupled components register their own routes with the application router.
// We refer to this as Adhoc Routing

var vueComponents = require('./vue-common-component');
Vue.use(vueComponents);

//var router = require('./config-route');

//不包含template的时候，会替换el的外部元素
//compile el's outerHtml as template
const app = new Vue({
    //router : router,
    el: '#app',
    data: {
        ViewComponent: {render: h => h('div', 'loading...')}
    },
    render (h) {
        return h(require('./vue-app/app.vue'))
    }
});
