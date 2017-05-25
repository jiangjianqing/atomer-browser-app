<template>
    <div class="app-container">
        <app-header v-bind:func-menus="menus" v-on:viewchanged="changeView"></app-header>
        <app-main v-bind:menu-name="currentView" ></app-main>
    </div>
</template>

<script>
    import AppHeader from '../components/app-header.vue';
    import AppMain from './app-main.vue';


    import menus from './menus';


    export default {
        data : function(){
            return {
                currentView : 'welcome',
                menus : menus
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
