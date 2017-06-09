<template>
    <div>主页
        <input type="text" v-model="message"/>
        <button class="btn btn-default" @click="showDialog">对话框</button>
    </div>

</template>

<script>

    export default {
        data : function(){
            return {
                message : '123123'
            }
        },
        methods: {
            showDialog : function(){
                let serviceManager = require('atomer-common-lib').serviceManager;
                serviceManager.get('dialog').show({
                    title : this.message? this.message : "welcome"
                });
            }
        }
    }
</script>