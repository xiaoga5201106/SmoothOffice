<template id="dialogbox">
  <el-dialog v-if="flag == '编辑'"
  :title="flag"
  :visible="dialogVisible"
  width="30%"
  :before-close="handleClose"
  >
<el-form >
    <el-form-item v-for="datas1 in datas" v-bind:label="datas1.name" :label-width="formLabelWidth">
      <el-input v-model="datas1.data" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" align="center">
    <formButton state1="确定"  state2="取消" @close="close"></formButton>
  </div>
</el-dialog>



<el-dialog v-else-if="flag == '申请修改'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
     <p>{{flag}}备注</p>
     <p>*必填</p>
  </div>
     <el-input
    type="textarea"
    :rows="6"
    :maxlength="200"
    placeholder="请输入内容"
    resize="none"
    @input="handleInput"
    >
  </el-input>
  <div class="limit">
    <p>{{inputSum}}/200</p>

  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close"></formButton>
  </div>
</el-dialog>


<el-dialog v-else-if="flag == '申请撤单'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
     <p>{{flag}}备注</p>
     <p>*必填</p>
  </div>
     <el-input
    type="textarea"
    :rows="6"
    :maxlength="200"
    placeholder="请输入内容"
    resize="none"
    @input="handleInput"
    >
  </el-input>
  <div class="limit">
    <p>{{inputSum}}/200</p>

  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close"></formButton>
  </div>
</el-dialog>

<el-dialog v-else-if="flag == '申请变更'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
     <p>{{flag}}备注</p>
     <p>*必填</p>
  </div>
     <el-input
    type="textarea"
    :rows="6"
    :maxlength="200"
    placeholder="请输入内容"
    resize="none"
    @input="handleInput"
    >
  </el-input>
  <div class="limit">
    <p>{{inputSum}}/200</p>

  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close"></formButton>
  </div>
</el-dialog>
</template>
<style>
  .pOff{
    float: left;
    font-size: 18px;
  }
  .pOff p{
    margin-top: 0px;
    margin-left: 10px;
  }
  .pOff p:nth-child(2){
    color: red;
    text-align: right;
    font-size: 15px;
  }
  .el-textarea{
    width: 70%;
    margin-left: 10px;
  }
  .limit{
    text-align: right;
    padding-right:16px;
  }
  .upload{
    margin-top:15px;
  }
  .uploadTip{
    font-size: 18px;
    position: absolute;
    margin-left: 10px;
  }
  .el-upload{
   position: absolute;
   right: 0;
  }
  .el-upload-list{

    padding-top: 50px;
  }
  .tip{
    text-align: right;
  }
</style>


<script>
 import upload from './upload'
 import formButton from './formButton'
  export default{
      name:'dialogbox',
      props:["datas","dialogVisible","flag"],
      components:{
         upload,
         formButton,
      },
      data(){
        return{
                 inputSum:0,
                 formLabelWidth:'120px',
        }
      },
      methods: {
                      closedialog(){
                      	this.$emit("close")
                      },
                      handleClose(){
                        this.$emit("close")
                      },
                      close(){
                        this.$emit("close")
                      },
                      handleInput(event){
                         console.log(event);
                         this.inputSum = event.length;
                         if(event.length == 200){
                          this.$message({
                              message: '已经到200字了！',
                              type: 'warning'
                          });
                         }
                      }
    }
  }
</script>
