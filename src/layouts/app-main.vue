<template>
    <keep-alive>
        <component v-bind:is="currentView">
            <!-- component changes when vm.currentView changes! -->
        </component>
    </keep-alive>
</template>

<script>

    export default {
        props : ['menuName'],
        data: function () {
            console.log(this.menuName);
            return {
                //currentView: 'welcome'  //data属性的优先级比 computed高
            }
        },
        computed:{
            currentView : function(){
                //console.log(this.menuName);
                return this.menuName;
            }
        }
        /*
        components: {
            home: require('../components/welcome.vue'),
            userManage:require('../components/user-manage.vue'),
            algorithmDev:require('../components/algorithm-dev.vue')
        }*/
    }
</script>