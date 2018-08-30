<template>
  <div id="toolBtn">
    <div v-for="btn in btns">
      <el-button @click="submit" :type="btn.color">{{btn.label}}</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tool-btn",
        props:['btns'],
        methods:{
           submit(){
            this.$emit("submit")
           }
        }
    }
</script>

<style scoped>
#toolBtn{
  background: #fff;
  margin-bottom: 20px;
  padding: 10px;
  overflow: auto;
}
.el-button{
  float: left;
  margin-right: 20px;
}
</style>
