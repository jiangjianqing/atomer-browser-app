<template>
    <div>
        <div style="margin:0 auto; width:400px;">
            请选择需要打包的模块：<br><br>
            <template v-for="item in businessEntries">
                <input type="checkbox" v-bind:value="item.name" v-model="checkedNames">{{item.title}}<br><br>
            </template>

            <button class="btn btn-primary" v-on:click="rebuild">重新打包</button>

        </div>

    </div>
</template>

<script>
    let axios = require('axios');
    let modules= require('../../../atom.json');

    export default {
        data : function(){
            return {
                businessEntries : modules["business-entries"],
                checkedNames: []
            }
        },
        methods: {
            rebuild : function(){
                let selectedModules = {
                    "business-entries" :[
                    ]
                };
                if (this.checkedNames.length === 0){
                    console.log('请选择模块');
                    return;
                }
                this.checkedNames.forEach(function(name){
                    modules["business-entries"].forEach(function(item){
                        if(item.name === name){
                            selectedModules["business-entries"].push(item);
                        }
                    })
                });
                axios({
                    method: 'post',
                    url: 'http://localhost:9090/servlet-demo/WeaverServlet',
                    data: JSON.stringify(selectedModules),
                    responseType: 'text'
                }).then(function(){
                    console.log('发送成功！')
                },function(){
                    console.error('发送失败!')
                })
            }
        }
    }
</script>