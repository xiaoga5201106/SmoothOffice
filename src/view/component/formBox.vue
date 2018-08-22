<template id="formBox">
  <div class="formBox">
      <el-form   label-width="150px" label-position="left">
    <el-form-item 
    v-for="label in labels"
     :label="label.title">
    <el-input v-if="label.key=='1'" style="width:400px" :placeholder="'请输入'+label.title"></el-input>
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

</template>

<script>
  export default {
    name:'formBox',
    props:["labels"],
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
</style>