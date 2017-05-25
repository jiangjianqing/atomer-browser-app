<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Brand</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <template v-for="item in funcMenus">
                    <li v-bind:class="{active : item.name == currentView}">
                        <a href="#" v-bind:data-name="item.name" v-on:click.prevent="changeView">{{ item.title }}</a>

                    </li>
                    </template>
                </ul>


            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

    export default {
        props : ['funcMenus'],
        data : function () {
            return {
                currentView : 'welcome'
            }
        },
        methods:{
            changeView: function(event){
                this.currentView = event.target.dataset.name;
                this.$emit('viewchanged',this.currentView);
            }
        },
        computed: {

        }
    }
</script>