<template>
  <div id="searchTools">
    <!--<div class="items">
      <span>区域</span><el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </div>
    <div class="items"><span>订单编号</span><el-input v-model="input" placeholder="请输入订单编号"></el-input></div>
    <div class="items"><span>客户名称</span><el-input v-model="input" placeholder="请输入客户名称"></el-input></div>-->
    <div class="items"  v-for="searchData in searchDatas">
      <span  v-if="searchData.item!==undefined">{{searchData.item}}</span>
      <el-select v-if="searchData.content=='select'" v-model="searchData.value" :placeholder="searchData.placeholder">
        <el-option
          v-for="item in searchData.option"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-if="searchData.content=='input'" :placeholder="searchData.placeholder"></el-input>
    </div>
    <el-button type="danger" class="searchBtn">搜索</el-button>
    <el-button type="primary" class="searchBtn" v-if="level==1">高级搜索</el-button>
  </div>
</template>

<script>
    export default {
        name: "search-tools",
        props:['searchDatas','level'],
        data() {
          return {
            value: ''
          }
        },
        methods:{

      },
      //生命函数，加载页面时自动执行
      /*mounted:function(){
        console.log(this.searchDatas[0].item)
      }*/
    }
</script>

<style scoped>
  #searchTools{
    background: #fff;
    margin-bottom: 20px;
    overflow: auto;
    padding: 10px 10px 0 10px;
  }
  #searchTools .items{
    float: left;
    overflow: auto;
    padding-bottom: 10px;
  }
  #searchTools .items span{
    float: left;
    width: 80px;
    text-align: left;
    line-height: 40px;
  }
  #searchTools .items>div{
    float: left;
    margin-right: 20px;
  }
  #searchTools .el-input{
    width: 200px;
  }
  .searchBtn{
    float: left;
  }
</style>
