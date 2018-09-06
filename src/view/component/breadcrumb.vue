<template id="breadcrumd">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <!--<el-breadcrumb-item :to="{ path: '/home' }">{{menu1}}</el-breadcrumb-item>-->
    <el-breadcrumb-item>{{menu1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{menu2}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="menu3 != ''">{{menu3}}</el-breadcrumb-item>

    <!-- <el-button @click="show">11</el-button> -->
  </el-breadcrumb>
  
</template>

<script>
  //导出组件接口
  export default {
    name:'breadcrumb',
    props:['menu1',"menu2","menu3"],
    methods:{
       show(){
      console.log(this.menu3);
     }
    }
   
  }
    
</script>

<style scoped>
  .el-breadcrumb{
    background: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }
</style>
