<template id="upload">
  <el-upload
    class="upload-demo"
    action="string"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-change="handChange"
    :file-list="fileListShow"
    :accept="type"
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
    height: 50px;
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
        fileListShow: [],
        fileList:[],
        type:[],
      };
    },
    methods:{

      handChange(file, fileList){
          let tempFile = '';
        if(this.flag == '图片'){
          tempFile = document.getElementsByClassName("el-upload__input")[0].files[0];
        }
        else if(this.flag == '文件'){
          tempFile = document.getElementsByClassName("el-upload__input")[1].files[0];
        }
         //判断是否超过大小
         //把下面个push代码放在if外面是因为组件本身原因，导致即使没有push进入fileListShow也会显示出图片
         //所以在外面统一放进去后在else里删除最后一个元素
         this.fileListShow.push({
            name: file.name,
            url: file.url
          });
        if((tempFile.size/1024) < 50){           
           this.fileList.push(tempFile);
        }
        else{
          this.$message({
            message : '超出大小限制！',
            type : 'warning'
          })
          this.fileListShow.splice(this.fileListShow.length-1,1);
        }

      },
      handleRemove(file, fileList) {
        for(let i = 0; i< this.fileListShow.length; i++){
          if(this.fileListShow[i].name == file.name){
            this.fileListShow.splice(i,1);
            break;
          }
        }
        for(let i = 0; i< this.fileList.length; i++){
          if(this.fileList[i].name == file.name){
            this.fileList.splice(i,1);
            break;
          }
        }
      },
      handlePreview(file) {
      },
      getUploadData(){
        if(this.flag == '图片'){
          this.$emit('getImg',this.fileList);
        }
        else if(this.flag == '文件'){
          this.$emit('getPdf',this.fileList);
        }
      },

     },
     //限制上传的文件格式
     created :function(){
       if(this.flag == '图片'){
         this.type='.jpg,.png';
       }
       else if(this.flag == '文件'){
         this.type='.pdf';
       }
     }


    }
</script>