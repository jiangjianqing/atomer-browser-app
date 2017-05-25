<template>
    <keep-alive>
        <component v-bind:is="currentView">
            <!-- component changes when vm.currentView changes! -->
        </component>
    </keep-alive>
</template>

<script>

    export default {
        props : [],
        data: function () {
            return {
                currentView: 'algorithmDev'
            }
        },
        components: {
            home: require('../components/welcome.vue'),
            userManage:require('../components/user-manage.vue'),
            algorithmDev:require('../components/algorithm-dev.vue')
        }
    }
</script>