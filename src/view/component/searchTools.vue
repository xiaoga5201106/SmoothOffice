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
    <div class="items"  v-for="(searchData,index) in searchDatas">
      <span  v-if="searchData.item!==undefined">{{searchData.item}}</span>
      <el-select v-if="searchData.content=='select'" v-model="selectValue[index]" :placeholder="searchData.placeholder">
        <el-option
          v-for="item in searchData.option"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-model="item.label"
          >
        </el-option>
      </el-select>
      <el-input v-if="searchData.content=='input'" :placeholder="searchData.placeholder" v-model="inputValue[index]"></el-input>
       <el-date-picker v-if="searchData.content=='datapicker'"  v-model="searchData.value" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
    </div>
    <el-button type="danger" class="searchBtn" @click="search">搜索</el-button>
    <el-button type="primary" class="searchBtn" v-if="level==1" @click="openDialogTopsearch()">高级搜索</el-button>
  </div>
</template>

<script>
    export default {
        name: "search-tools",
        props:['searchDatas','level'],
        data() {
          return {
            inputValue: [],
            selectValue:[]
          }
        },
        methods:{

          openDialogTopsearch(){
            let flag = "高级搜索";
            this.$emit('open',flag);
          },
          search(){
             this.$emit('search',this.inputValue,this.selectValue);
          }
      }
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
    width: 90px;
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
