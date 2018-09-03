<template id="upload">
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
    <div class="tip">
      <el-button size="small" type="primary">选择{{flag}}</el-button>
      <i v-if="flag == '图片'">只能上传jpg/png文件,且不超过50kb</i>
      <i v-else-if="flag == '文件'">只能上传PDF格式文件,且不超过50kb</i>
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
  .el-upload{
    position: absolute;
    right:0;
  }
  .el-upload-list{
    padding-top: 50px;
  }
  .tip{
    width: 100%
  }
</style>
<script>
  export default{
    name:"upload",
    props:["flag"],
    data(){

      return{

        fileList: [],

      };
    },
    methods:{
      handChange(file, fileList){
        this.fileList.push({
          name: file.name,
          url: file.url
        });
        this.$emit('returnFile');
      },
      handleRemove(file, fileList) {
        for(let i = 0; i< this.fileList.length; i++){
          if(this.fileList[i].name == file.name){
            this.fileList.splice(i,1);
            break;
          }
        }
      },
      handlePreview(file) {

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
          return false;
        }
      }
    }
  }

</script>
