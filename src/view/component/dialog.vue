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
  <div slot="footer" class="dialog-footer" align="center">
    <el-button v-if="state1=='确定'" type="danger" @click="closedialog">{{state1}}</el-button>
   <el-button v-if="state2=='取消'" type="info" @click="closedialog">{{state2}}</el-button>
   <el-button v-if="state3=='上传'" type="danger" @click="closedialog">{{state3}}</el-button>
   <el-button v-if="state4=='提交'" type="danger" @click="closedialog">{{state4}}</el-button>
  </div>
</el-dialog>
</template>
<script>
 
  export default{
      name:'dialogbox',
     
     props:["datas","dialogVisible","state1","state2","state3","state4"],
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
