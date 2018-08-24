<template>
    <div id="work">
      <div class="work_status" v-for="works in workData">
        <h4>{{works.title}}</h4>
        <div class="num">
          <h2 :class="works.num1Color">{{works.num1}}</h2>
          <span>{{works.num1Title}}</span>
        </div>
        <div class="num">
          <h2 :class="works.num2Color">{{works.num2}}</h2>
          <span>{{works.num2Title}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "work",
        props:['workData']
    }
</script>

<style scoped>
  #work{
    overflow: auto;
  }
  .work_status{
    background: #fff;
    overflow: auto;
    width:49%;
    float: left;
    padding: 10px 10px 30px 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .work_status h4{
    text-align: left;
    margin: 0;
    padding-bottom: 10px;
    color: #354b60;
    border-bottom: 1px solid #eee;
  }
  .work_status .num{
    width: 50%;
    float: left;
  }
 .work_status:nth-child(odd){
   margin-right: 2%;
 }
  h2.blue{
    color: #409EFF;
  }
  h2.red{
    color: #e70012;
  }
</style>
