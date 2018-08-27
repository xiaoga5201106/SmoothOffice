<template>
  <div id="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in Menutabs" :label="tab.label" :name="tab.name">
        <div>
          <tableList :titles="tab.titles" :tableData="tab.tableData" :operate="operate" type="wait_audit"></tableList>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tableList from './tableList'
    export default {
        name: "tabs",
        props:['Menutabs','operate'],
        components:{
          tableList,
        },
        data() {
          return {
            activeName: '1'
          }
        },
        methods: {
          handleClick(tab, event) {
            console.log(tab, event);
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
