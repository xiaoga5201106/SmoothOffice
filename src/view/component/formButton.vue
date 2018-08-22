<template id="formButton">
	<div class="formButton">
 <el-button v-if="state1=='通过'" type="primary">{{state1}}</el-button>
   <el-button v-if="state2=='不通过'" type="danger" >{{state2}}</el-button>
   <el-button v-if="state3=='上传'" type="danger" >{{state3}}</el-button>
   <el-button v-if="state4=='提交'" type="danger">{{state4}}</el-button>
	</div>
</template>

<script >
	export default{
		name:'formButton',
		props:["state1","state2","state3","state4"],
		data(){
			return{

			}
		}
	}
</script>