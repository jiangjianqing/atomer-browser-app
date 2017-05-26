<template>
    <div>请选择需要打包的模块：<br><br>
        <div>
            <template v-for="item in businessEntries">
                <input type="checkbox" v-bind:value="item.name" v-model="checkedNames">{{item.title}}<br><br>
            </template>

            <button class="btn btn-primary" v-on:click="rebuild">重新打包</button>

        </div>

    </div>
</template>

<script>
    let modules= {
        "business-entries" :[
            {
                "sn" : 2,
                "title": "用户管理",
                "selected" : true,
                "name":"user-manage",
                "component-path": "./components/user-manage.vue"
            },
            {
                "sn" : 1,
                "title": "算法开发",
                "selected" : true,
                "name":"algorithm-dev",
                "component-path": "./components/algorithm-dev.vue"
            },
            {
                "sn" : 3,
                "title": "项目快速开发",
                "selected" : true,
                "name":"project-dev",
                "component-path": "./components/project-dev"
            }
        ]
    };

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
                console.log(JSON.stringify(selectedModules,null,'\t'));
            }
        }
    }
</script>