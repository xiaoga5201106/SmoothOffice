<template id="formBox">
  <div class="formBox" v-if="flag == 'newOrder'">
    <el-form   label-width="150px" label-position="left">
     <el-form-item 
      v-for="label in labels"
       :label="label.title">
      <el-input v-if="label.key=='1'" style="width:400px" :placeholder="'请输入'+label.title" v-model="label.value"></el-input>
      <el-select v-if="label.key=='2'" style="width:400px" v-model="label.value">
        <el-option 
           v-for="item in label.items"
          :label="item.item"
           v-model="item.item">  
        </el-option>
      </el-select>
     </el-form-item>
    </el-form>
  </div>
  <div class="informationBox" v-else-if="flag == 'viewInformation'">
    <el-form :inline="true" label-position="left" label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index<=1">
      <span>123456</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true" label-position="left" label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>1 && index<=3">
      <span>123456</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true" label-position="left" label-width="100px">
      <el-form-item  class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>3 && index<=5">
      <span>123456</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true" label-position="left" label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>5 && index<=7">
      <span>123456</span>
     </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name:'formBox',
    props:["labels","flag"],
    data() {
      return {
           
      }
    },
    methods: {
      onSubmit() {
        console.log('1111');
      }
    }
  }
</script>
<style scoped>
  .el-form-item{
     padding: 10px 0 10px;
  }
  .informationBox{
    background: #fff;
    text-align: center;   
  }
  .informationBox .el-form{
    border-bottom: 1px solid #000; 
  }
   .informationBox .el-form:nth-child(4){
    border-bottom: 0px; 
  }
  .informationTitle{
     margin-right:50px;
  }
  .informationTitle label{
    color: red;
  }
  .informationTitle .el-form-item__content span{
    
  }
</style>