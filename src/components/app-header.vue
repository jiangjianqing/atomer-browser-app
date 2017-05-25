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
                    <li v-for="item in funcMenus">
                        <a href="#" v-bind:data-name="item.name" v-on:click.prevent="changeView">{{ item.title }}</a>

                    </li>
                </ul>


            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

    export default {
        props : ['funcMenus'],
        methods:{
            changeView: function(event){
                let viewName = event.target.dataset.name;
                this.$emit('viewchanged',viewName);
                console.log('准备 改变view name : '+viewName);
            }
        },
        computed: {

        }
    }
</script>