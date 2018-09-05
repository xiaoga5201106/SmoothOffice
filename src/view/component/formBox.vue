<template id="formBox">
  <div class="formBox" v-if="flag == 'newOrder'">
    <el-form   label-width="150px" label-position="left">
     <el-form-item 
      v-for="label in labels"
       :label="label.title"
       :prop="label.prop">
      <span v-if="label.key=='0'" style="width:400px">{{label.value}}</span>
      <el-input v-else-if="label.key=='1'" style="width:380px" :placeholder="label.placeholder" v-model="label.value" :maxlength="label.maxlength"></el-input>
      <el-select v-else-if="label.key=='2'" style="width:380px" v-model="label.value">
        <el-option 
           v-for="item in label.items"
          :label="item.item"
           v-model="item.item">  
        </el-option>
      </el-select>
        <el-radio-group v-else-if="label.key=='3'" v-model="label.value">
      <el-radio 
          v-for="label in label.items"
      :label="label.item"></el-radio>
    </el-radio-group><span>{{label.msg}}</span>
     </el-form-item>
    </el-form>
  </div>
    <div class="informationBox" v-else-if="flag == 'viewInformation'">
    <el-form :inline="true" label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index<=1">
      <span>{{label.message}}</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true"  label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>1 && index<=3">
      <span>{{label.message}}</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true"  label-width="100px">
      <el-form-item  class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>3 && index<=5">
      <span>{{label.message}}</span>
     </el-form-item>
    </el-form>
    <el-form :inline="true"  label-width="100px">
      <el-form-item class="informationTitle" v-for="(label,index) in labels" :label="label.title" v-if="index>5 && index<=7">
      <span>{{label.message}}</span>
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


      }
    }
  }
</script>
<style scoped>
.formBox{
  width: 600px
}
  .el-form-item{
     padding: 10px 0 10px;
  }
    .el-form-item span:nth-child(2){
     color: red;
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
    .informationBox span{
    display: inline-block;
    width: 200px;
  }

  .el-form-item__label{
    color: red !important;
  }
  .informationTitle .el-form-item__content span{
    
  }
  .el-form-item{
    margin-bottom: 0 !important;
  }
</style>