<template>
  <div id="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in Menutabs" :label="tab.label" :name="tab.name">
        <div v-if="tab.label == '待审核'">
          <tableList :titles="auditTitles" :tableData="applyTableData" :operate="operate" type="wait_audit"></tableList>
        </div>
        <div v-else-if="tab.label == '已通过'">
          <tableList :titles="titles" :tableData="passTableData" :operate="operate" type="pass"></tableList>
        </div>
        <div v-else="tab.label == '未通过'">
          <tableList :titles="titles" :tableData="noPassTableData" :operate="operate" type="no_pass"></tableList>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tableList from './tableList'
    export default {
        name: "tabs",
        props:['Menutabs','auditTitles','titles','applyTableData','passTableData','noPassTableData','operate'],
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
