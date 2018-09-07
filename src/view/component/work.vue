<template>
    <div id="work">
      <div class="work_status" v-for="works in workData">
        <h4>{{works.title}}</h4>
        <div :class='{width1: works.isWidtn1,width2: works.isWidtn2,width3: works.isWidtn3}' >
          <h2 :class="works.num1Color"><router-link :to="works.href">{{works.num1}}</router-link></h2>
          <span>{{works.num1Title}}</span>
        </div>
        <div :class='{width1: works.isWidtn1,width2: works.isWidtn2,width3: works.isWidtn3}' v-if="works.num2 != null">
          <h2 :class="works.num2Color"><router-link :to="{path:works.href, query: {state:'3'}}">{{works.num2}}</router-link></h2>
          <span>{{works.num2Title}}</span>
        </div>
        <div :class='{width1: works.isWidtn1,width2: works.isWidtn2,width3: works.isWidtn3}' v-if="works.num3 != null">
          <h2 :class="works.num3Color"><router-link :to="works.href">{{works.num3}}</router-link></h2>
          <span>{{works.num3Title}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "work",
        props:['workData'],
        data(){
          return{
            
          }
        }
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
   .width1{
    width: 33%;
    float: left;
   }
   .width2{
    width: 50%;
    float: left;
   }
   .width3{
    width: 100%;
    float: left;
   }
 .work_status:nth-child(odd){
   margin-right: 2%;
 }
  h2.blue a{
    color: #409EFF;
  }
  h2.red a{
    color: #e70012;
  }
  h2.orange a{
    color: #ff9c0b;
  }
</style>
