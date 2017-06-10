<template>
    <div class="app-container">
        <app-nav v-bind:func-menus="menus" v-on:viewchanged="changeView"></app-nav>
        <app-view v-bind:menu-name="currentView" ></app-view>
        <app-dialog></app-dialog>
    </div>
</template>

<script>
    import AppNav from './app-nav.vue';
    import AppView from './app-view.vue';
    import AppDialog from './components/common/dialog.vue';


    import businessEntires from './business-entries';

    //20170526: welcome是框架自带的，不需要进行初始化
    businessEntires.unshift({
        "sn" : -9999,
        "title": "主页",
        "name":"welcome",
        "component-path": "./components/welcome.vue"
    });

    export default {
        data : function(){
            return {
                currentView : 'welcome',
                menus : businessEntires
            };
        },
        methods:{
            changeView:function(viewName){
                this.currentView = viewName;
                console.log('收到view name : '+viewName);
            }
        },
        components: {
            AppNav, AppView, AppDialog
        }
    }
</script>

<style scoped>
    .app-container {
        margin: 0 0;
        height: inherit;
        padding: 0 0;
        background: #f9f7f5;
    }
</style>
