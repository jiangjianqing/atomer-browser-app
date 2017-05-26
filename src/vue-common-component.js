/**
 * Created by jjq on 5/25/17.
 */
//browserify官方说法是不会支持模块async加载：
//If you’re a Browserify user that would like to use async components,
// its creator has unfortunately made it clear that async loading “is not something that Browserify will ever support.”
// Officially, at least. The Browserify community has found some workarounds, which may be helpful for existing and complex applications.
// For all other scenarios, we recommend simply using Webpack for built-in, first-class async support.

//推荐使用webpack实现异步加载
/*
 Vue.component('async-webpack-example', function (resolve, reject) {
 // This special require syntax will instruct Webpack to
 // automatically split your built code into bundles which
 // are loaded over Ajax requests.
 require(['./my-async-component'], resolve)
 })
 */
/*
 Vue.component(
 'async-webpack-example',
 () => import('./my-async-component')
 )
 */

//global component  ----  这里注册  ,
//local component ---- 在component内部的[components]属性中注册

function plugin(Vue, options) {
    //Vue自己检测是否已经加载过,以下检测代码无效
    if (plugin.installed) {
        console.log("插件已经加载!");
        return;
    }
    console.log("自定义组件正在加载!");
    Vue.component('welcome',require('./components/welcome.vue'));
    Vue.component('toolbar',require('./components/common/toolbar.vue'));
    Vue.component(
        'v-link',
        //20170525 : 经测试，以下webpac import的异步加载语法无法使用，但使用require写法可以
        //() => import('./components/VLink.vue')
        function (resolve, reject) {
            // This special require syntax will instruct Webpack to
            // automatically split your built code into bundles which
            // are loaded over Ajax requests.
            require(['./components/VLink.vue'], resolve)
        }
    );
    //Vue.directive('e-accordion', require('./accordion'))
    //Vue.directive('e-datagrid', require('./datagrid'))
    //Vue.directive('e-dialog', require('./dialog'))
    //Vue.directive('e-layout', require('./layout'))
    //Vue.directive('e-tabs', require('./tabs'))

}

plugin.version = '0.1';

module.exports = plugin;
/*
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}*/