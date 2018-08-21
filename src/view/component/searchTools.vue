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
      <span>{{searchData.item}}</span>
      <div v-html="searchData.content">{{searchData.content}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "search-tools",
        props:['searchDatas'],
        data() {
          return {
            options: [{
              value: '1',
              label: '黄金糕'
            }, {
              value: '2',
              label: '双皮奶'
            }],
            value: ''
          }
        },
        methods:{

      },
      //生命函数，加载页面时自动执行
      mounted:function(){
          let searchSelect=[];
          let searchInput=[];
          for(let i=0;i<this.searchDatas.length;i++){
            if(this.searchDatas[i].content=="select"){
              searchSelect[i]='<select></select>';
              this.searchDatas[i].content=searchSelect[i];
            }
            if(this.searchDatas[i].content=="input"){
              searchInput[i]='<input/>';
              this.searchDatas[i].content=searchInput[i];
            }
        }
      }
    }
</script>

<style scoped>
  #searchTools{
    background: #fff;
    margin: 20px 0;
    overflow: auto;
    padding: 10px;
  }
  #searchTools .items{
    float: left;
    overflow: auto;
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
    width: 220px;
  }
</style>
