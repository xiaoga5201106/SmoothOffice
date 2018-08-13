<template id="tableList">
  <el-table
    :data="tableData"
    style="width: 100%"
    :header-cell-style="headerColor">
    <el-table-column
      v-for="title in titles"
      v-bind:prop="title.prop"
      v-bind:label="title.label"
      align="center">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "tableList",
        props:['titles','tableData'],
        data() {
        return {

        }
      },
      methods: {
        headerColor(row, rowIndex) {
          return 'background:#e70012;color:#fff';
        }
      }
    }
</script>

<style scoped>
</style>
