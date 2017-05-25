<template>
    <div class="app-container">
        <app-header ></app-header>
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
                currentView : 'welcome'//,
                //menus : menus
            };
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
