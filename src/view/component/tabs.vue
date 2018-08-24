<template>
  <div id="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="tab in Menutabs" :label="tab.label" :name="tab.name">{{tab.label}}</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "tabs",
        props:['Menutabs'],
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
