<template id="upload">
	<el-upload
   class="upload-demo"
  :action="UploadUrl()"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  :before-upload="beforeAvatarUpload"
  :auto-upload="true"
  list-type="picture">
  <div class="tip">
  <el-button size="small" type="primary">选择{{flag}}</el-button>
  <i v-if="flag == '图片'">只能上传jpg、png文件，且不超过50kb</i>
  <i v-if="flag == '文件'">只能上传PDF格式文件，且不超过50kb</i>
 </div>
</el-upload>
</template>
<style>
  .upload-demo{
  	
    position: relative;
  }
  .el-upload-list{
    
  	width: 100%;
  }
  .el-upload{
  }
  .el-upload-list--picture .el-upload-list__item{
  	width: 10%;
  	height: 110px;
    display: inline-block;
    margin:0 5px;
    position: relative; 
  }
  .el-upload-list__item-thumbnail{
  	display: block;
  }
  .el-upload-list__item-name{
   	color:blue;
    position:absolute;
    left: 10px;
    top:60px;
   }
</style>
<script>
	export default{
		name:"upload",
		props:["flag"],
		data(){
          
           return{
            
            fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
              
           };
		},
		methods:{
		 UploadUrl :function(){
		 	return "https://jsonplaceholder.typicode.com/posts/";
		 },
	     handleRemove(file, fileList) {
          console.log(file, fileList);
      		},
      	 handlePreview(file) {
          console.log(file);
            },
         beforeAvatarUpload(file){
         	let fileType = file.name.substring(file.name.lastIndexOf('.')+1);
         	if (fileType != 'jpg' && fileType !='png'){
                     this.$message({  
                        message: '上传文件只能是 jpg、png格式!',  
                        type: 'warning'  
                    }); 
                    console.log(fileType); 
                    return false;
         	 }  
         }
		}
	}
</script>