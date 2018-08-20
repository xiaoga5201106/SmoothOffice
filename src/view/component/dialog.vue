<template id="dialogbox">
	<el-dialog
  title="提示"
  :visible="dialogVisible"
  width="30%"
  :before-close="handleClose"
  >
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="closedialog">取 消</el-button>
    <el-button type="primary" @click="closedialog">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
 
	export default{
		  name:'dialogbox',
     
		  props:["dialogVisible"],
		  data(){
		  	return{ 
                  
                 
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