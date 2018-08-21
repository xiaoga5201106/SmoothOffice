<template id="dialogbox">
  <el-dialog
  title="提示"
  :visible="dialogVisible"
  width="30%"
  :before-close="handleClose"
  >
<el-form >
    <el-form-item v-for="datas1 in datas" v-bind:label="datas1.name" :label-width="formLabelWidth">
      <el-input v-model="datas1.data" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="closedialog">取 消</el-button>
    <el-button type="primary" @click="closedialog">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
 
  export default{
      name:'dialogbox',
     
      props:["dialogVisible","datas"],
      data(){
        return{ 
                  
                 formLabelWidth:'120px',
        }
      },    
      methods: {
                      closedialog(){
                      	this.$emit("close")
                      },
                      handleClose(){
                        this.$emit("close")
                      }
    }
  }
</script>
