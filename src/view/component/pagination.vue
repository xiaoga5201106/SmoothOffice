<template>
  <div class="block">
    <el-pagination v-if="paginationShow"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="listTotal">
    </el-pagination>
  </div>
</template>

<script>
    export default {
      props:['listTotal','paginationShow'],
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.$emit('page',val);
        }
      },
      created(){

    },
      data() {
        return {
        };
      }
    }
</script>

<style scoped>
.el-pagination{
  text-align: right;
  background: #fff;
  padding: 10px;
}
</style>
