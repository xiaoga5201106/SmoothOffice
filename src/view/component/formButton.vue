<template id="formButton">
	<div class="formButton">
   <el-button v-if="state1=='确定'" type="primary" size="small">{{state1}}</el-button>
   <el-button v-if="state2=='取消'" @click="closedialog" size="small">{{state2}}</el-button>
   <el-button v-if="state3=='上传'" type="danger" size="small">{{state3}}</el-button>
   <el-button v-if="state4=='提交'" type="danger" @click="submit" size="small">{{state4}}</el-button>
   <el-button v-if="state5=='通过'" type="danger" size="small">{{state5}}</el-button>
   <el-button v-if="state6=='不通过'" type="danger" size="small">{{state6}}</el-button>
	</div>
</template>

<script >
	export default{
		name:'formButton',
		props:["state1","state2","state3","state4","state5","state6"],
		data(){
			return{

			}
		},
		methods:{
			   //调用父组件的close函数 用来让父组件的父组件关闭该窗口
               closedialog(){
                      	this.$emit("close");
                      },
               submit(){
                   this.$emit("submit");
               }

		}
	}
</script>
