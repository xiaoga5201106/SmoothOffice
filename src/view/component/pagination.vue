<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="listTotal">
    </el-pagination>
  </div>
</template>

<script>
    export default {
      props:['listTotal'],
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.$emit('page',val);
        }
      },
      create(){
        console.log(this.listTotal)
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
