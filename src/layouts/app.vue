<template>
    <div class="app-container">
        <app-header v-bind:func-menus="menus" v-on:viewchanged="changeView"></app-header>
        <app-main v-bind:menu-name="currentView" ></app-main>
    </div>
</template>

<script>
    import AppHeader from '../components/app-header.vue';
    import AppMain from './app-main.vue';


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
            AppHeader, AppMain
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
