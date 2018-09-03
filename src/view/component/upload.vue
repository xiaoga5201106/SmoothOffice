<template id="upload">
 <div>  
     <div class="tip"> 
       <el-button size="small" type="primary" @click="choose">选择{{flag}}</el-button> 
      <i v-if="flag == '图片'">只能上传jpg/png文件,且不超过50kb</i>
      <i v-else-if="flag == '文件'">只能上传PDF格式文件,且不超过50kb</i>
     </div>
    <el-upload
    class="upload-demo"
    action="string"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-change="handChange"
    :file-list="fileList"
    :before-upload="beforeAvatarUpload"
    :auto-upload="false"
    list-type="picture">
    </el-upload>
     <input type="file" name="" :id="id" style="display:none" @change="tirggerFile($event)">
 </div> 
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
    width: 5%;
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
  .tip{
   text-align: right;
  }
</style>
<script>
  export default{
    name:"upload",
    props:["flag"],
    data(){
          
           return{
            id:'file',
            fileList:[],
            fileListShow: [],              
           };
    },
    methods:{
         //点击按钮后触发input[type=file]事件
         choose(){
          document.getElementById('file').click();
         },
         //input事件操作
         tirggerFile(event) {
           let file = event.target.files;
           let imgDataUrl =this.getObjectURL(document.getElementById(this.id).files[0]); 
          
           this.fileList.push({
                 file:file
           });
           this.fileListShow.push({
               name: file[0].name,
               url: imgDataUrl
           });
           console.log(file);
           console.log(this.fileList);
           
          },
          //获取当前图片路径
          getObjectURL (file) {
            let url = null ;
            if (window.createObjectURL!=undefined) { // basic
              url = window.createObjectURL(file) ;
            }else if (window.webkitURL!=undefined) { // webkit or chrome
              url = window.webkitURL.createObjectURL(file) ;
            }else if (window.URL!=undefined) { // mozilla(firefox)
              url = window.URL.createObjectURL(file) ;
            }
            return url ;
          },
         handChange(file, fileList){
          console.log(file)           
         },
         handleRemove(file, fileList) {
             for(let i = 0; i< this.fileListShow.length; i++){
               if(this.fileListShow[i].name == file.name){
                   this.fileList.splice(i,1);
                   break;
               }
             }
             for(let i = 0; i< this.fileList.length; i++){
               if(this.fileList[i][0].name == file.name){
                   this.fileList.splice(i,1);
                   break;
               }
             }
         },
         handlePreview(file) {
          console.log(file);
         },
         uploadData(){
          console.log(this.flag);
           if(this.flag == '图片'){
            console.log('tupa ');
              this.$emit('getImg',this.fileList);
           }
           else if(this.flag == '文件'){
              this.$emit('getPdf',this.fileList);
           }
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