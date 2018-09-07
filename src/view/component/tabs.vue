<template>
  <div id="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in Menutabs" :label="tab.label" :name="tab.name">
        <div>
          <tableList :titles="tab.titles" :tableData="tab.tableData" :operate="operate" :type="tab.type" :father="father"></tableList>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tableList from './tableList'
    export default {
        name: "tabs",
        props:['Menutabs','operate','father','queryState'],
        components:{
          tableList,
        },
        data() {
          return {
            activeName: "1"
          }
        },
        methods: {
          handleClick(tab) {
            this.$emit('getTab',tab.name);
          }
        },
      created(){
          if(this.queryState!=undefined){
            this.activeName=this.queryState;
          }
      }
    }
</script>

<style scoped>
  #tabs{
    background: #fff;
    padding: 10px;
  }
</style>
