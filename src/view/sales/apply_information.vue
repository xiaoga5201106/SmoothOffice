<template>
  <div id="main">
    <div>
      <div><el-tag>合同基本信息</el-tag></div>
      <formBox :labels="labels" flag="viewInformation"></formBox>
    </div>
  </div>
</template>

<script>
   import formBox from '../component/formBox'
    export default {
        name: "apply_information",
        components: {
         formBox
        },
      data () {
        return{
          labels:[
               {
                 key:'1',
                title:'订单编号'
               },
               {
                 key:'1',
                title:'客户名称'
               },
               {
                 key:'1',
                title:'区域'
               },
               {
                 key:'1',
                title:'合伙人名称'
               },
               {
                 key:'1',
                title:'业务类型'
               },
               {
                 key:'1',
                title:'合伙人销售'
               },
               {
                 key:'1',
                title:'协助成单'
               },
               {
                 key:'1',
                title:'订单提交时间'
               }
             ],
        }
      }
    }
</script>

<style scoped>
 .el-tag{
  width: 100%;
  text-align: left;
  padding: 10px;
  height: auto;
  font-size: 15px;
 }
</style>
