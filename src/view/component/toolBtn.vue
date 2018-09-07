<template>
  <div id="toolBtn">
    <div v-for="(btn,index) in btns">
      <el-button @click="click(btn.func,index)" :type="btn.color">{{btn.label}}</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "tool-btn",
        props:['btns'],
      data () {
        return{
        }
      },
      methods:{
         click(func,index){
          if(func=="submit"){
            this.$emit("submit");
          }
          if(func=="routeGo"){
            this.$router.push(this.btns[index].path);
          }
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
  float: right;
  margin-right: 20px;
}
</style>
