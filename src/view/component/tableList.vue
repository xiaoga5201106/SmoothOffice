<template id="tableList">
  <el-table
    :data="tableData"
    style="width: 100%"
    :header-cell-style="headerColor"
    :cell-style="cellStyle">
    <el-table-column
      v-for="title in titles"
      v-bind:prop="title.prop"
      v-bind:label="title.label"
      v-bind:class-name="title.prop"
      align="center">
    </el-table-column>
    <el-table-column label="操作" v-if="operate=='true'" align="center">
      <template slot-scope="scope" >
          <el-button 
          size="mini"
          @click="opendialogForEditor(scope.$index, scope.row)">编辑</el-button>
          <el-button
          size="mini"
          @click="opendialogForApplyAlter(scope.$index, scope.row)">申请修改</el-button>
          <el-button
          size="mini"
          @click="opendialogForApplyRevoke(scope.$index, scope.row)">申请撤单</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "tableList",
        props:['titles','tableData','operate'],
        data() {
        return {
        }
      },
      methods: {
            opendialogForEditor(index,row){
              index++;
              let flag = "编辑";
              this.$emit('open',index,flag);            
            },
            opendialogForApplyAlter(index,row){
              index++;
              let flag = "申请修改";
              this.$emit('open',index,flag);            
            },
            opendialogForApplyRevoke(index,row){
              index++;
              let flag = "申请撤单";
              this.$emit('open',index,flag);            
            },
        headerColor(row, rowIndex) {
          return 'background:#e70012;color:#fff';
        },
        cellStyle(row, column, rowIndex, columnIndex){
          if(row.column.className=='order_status'&&row.row.order_status=='已提交'){
            return 'color:#8bc34a';
          }
          if(row.column.className=='order_status'&&row.row.order_status=='待提交'){
            return 'color:#e70012';
          }
          if(row.column.className=='pact_status'&&row.row.pact_status=='正办理'){
            return 'color:#FF9800';
          }
          if(row.column.className=='pact_status'&&row.row.pact_status=='待签订'){
            return 'color:#ccc';
          }
          if(row.column.className=='pact_status'&&row.row.pact_status=='已撤单'){
            return 'color:#e70012';
          }
          if(row.column.className=='pact_status'&&row.row.pact_status=='已完成'){
            return 'color:#8bc34a';
          }
        },
        handleDelete(index,row){
          console.log(index);


        }
      }
    }
</script>

<style scoped>
  .el-button{
    display: block;
    margin:5px 0 5px 0;

  }
</style>
