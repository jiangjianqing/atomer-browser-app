/**
 * Created by jjq on 5/23/17.
 */
let Vue = require('vue').default; //20170523 : vue2.x需要这样使用
//20170525 重要: page和director都是路由组件,page的介绍中可以学到一些route知识,director可以动态定义路由(Adhoc Routing 和 Scoped Routing)，各有优缺点
//20170525 :经过测试 ,director 1.2.6在使用时不会拦截页面向服务器请求数据，暂时还是用page
//When developing large client-side or server-side applications it is not always possible to define routes in one location.
// Usually individual decoupled components register their own routes with the application router.
// We refer to this as Adhoc Routing
let page = require('page');
let Router = require('router'); //director router的导入方式

//let routes = require('./routes');

//require('./config-route');
let routes = {
    "/" : ()=>require("./vue-main"),
    "/react" : ()=>require("./react-main.jsx")
};


let router = new Router();
//require('easyui/jquery.easyui.min.js');
//20170524:由于 easyui的使用模式(修改html模板)与组件框架冲突，所以用bootstrap代替

Object.keys(routes).forEach(route => {
    //const Component = require('./pages/' + routes[route] + '.vue');
    //let cb = () => app.ViewComponent = Component;
    let cb = routes[route];
    page(route, cb);
    router.on(route, cb);
});


let notFuncCall = ()=>app.ViewComponent = require('./pages/404.vue');
router.configure({
    html5history : true,
    notfound : notFuncCall //not found
});
page('*', notFuncCall); //not round
//page();  //20170601 关闭page router

router.init(); //20170525 director的路由会重新向服务器请求数据，还是用page