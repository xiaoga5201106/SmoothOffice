<template>
	<div id="main">
	<standingBook :msg="msg"></standingBook>
	</div>
</template>

<script>
	 import standingBook from '../component/standingBook'
	 export default{
	 	 name:'standingbook_detail',
	 	 components:{
	 	 	standingBook
	 	 },
	 	 data(){
	 	 	return{
	 	 		msg:{},
	 	 		
	 	 	}
	 	 }
	 }
</script>
<style scoped>
	  #main{
	  	background: #fff
	  }
</style>