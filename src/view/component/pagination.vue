<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4">
    </el-pagination>
  </div>
</template>

<script>
    export default {
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          currentPage1: 1,
          currentPage2: 2,
          currentPage3: 3,
          currentPage4: 4
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
