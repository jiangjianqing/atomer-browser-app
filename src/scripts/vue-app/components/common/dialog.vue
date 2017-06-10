<template>
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    <h4 class="modal-title" >New message</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">Recipient:</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="control-label">Message:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //modal-footer 的内容根据dialog.type确定

    let serviceManager = require('atomer-common-lib').serviceManager;
    let vm;
    let $dialogEl;
    let dialog = {
        show : function(opts){  //显示对话框
            if(opts.title){
                $dialogEl.find('.modal-title').text(opts.title);
            }
            if(opts.fields){ //field中存放了form-group 信息 格式如:[{...},{...},{...}]

            }
            $dialogEl.modal(opts);
        }
    };
    let $ = require('jquery');
    //务必将模态框的 HTML 代码放在文档的最高层级内（也就是说，尽量作为 body 标签的直接子元素），以避免其他组件影响模态框的展现或功能。
    export default {
        data : function(){
            return {
                type : 'info'  //question warning  , info = 提示，只有ok按钮
            }
        },
        mounted: function(){
            vm = this;
            serviceManager.set('dialog', dialog);
            $dialogEl = $(this.$el);
        }

    }
</script>