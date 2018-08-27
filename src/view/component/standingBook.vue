<template id="standingBook">
 <el-form >
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">公司合同编号</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">公司转包合同编号</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">所属区域</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">合同签订日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
<el-col :span="4"><div class="grid-content bg-purple">合同签转包订日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
    
  <el-col :span="4"><div class="grid-content bg-purple-light">合同类型</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">业务类型</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">注册公司名称</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col>
</el-row>

<el-row >
  <el-col :span="4" ><div class="grid-content bg-purple" style="height: 101px;line-height: 100px">合同当事人</div></el-col>
  <el-col :span="20">
    <div class="grid-content bg-purple">
    <el-row style="width: 100%">
      <el-col :span="4" style="border-left: none;border-top: none;border-bottom: none; "><div class="grid-content bg-purple">甲方</div></el-col>
       <el-col :span="20"  style="border-left: none;border-top: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
       <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">乙方</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
  </div>
</el-col>
</el-row>
<el-row >
  <el-col :span="4" ><div class="grid-content bg-purple" style="height: 101px;line-height: 100px">转包合同</div></el-col>
  <el-col :span="20">
    <div class="grid-content bg-purple">
    <el-row style="width: 100%">
      <el-col :span="4" style="border-left: none;border-top: none;border-bottom: none; "><div class="grid-content bg-purple">甲方</div></el-col>
       <el-col :span="20"  style="border-left: none;border-top: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
       <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">乙方</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
  </div>
</el-col>
</el-row>

<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">客户名称</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">客户联系方式</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col> 
</el-row> 

<el-row >
  <el-col :span="4" ><div class="grid-content bg-purple" style="height: 101px;line-height: 100px">合伙人</div></el-col>
  <el-col :span="20">
    <div class="grid-content bg-purple">
    <el-row style="width: 100%">
      <el-col :span="4" style="border-left: none;border-top: none;border-bottom: none; "><div class="grid-content bg-purple">合伙人合同编号</div></el-col>
       <el-col :span="20"  style="border-left: none;border-top: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
       <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">合伙人部门</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
      <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">合伙人销售</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><span></span></div></el-col>
    </el-row>
  </div>
</el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">合同总价款(元)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col>
</el-row>
<el-row>
    <el-col :span="4"><div class="grid-content bg-purple">线索</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">协助单位</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
</el-row> 
<el-row>
    <el-col :span="8"><div class="grid-content bg-purple" >合同应首付金额(元)</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
</el-row> 
<el-row>
  <el-col :span="24"><div class="grid-content" style="font-size: 25px;">签合同信息</div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">是否签署合同</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">合同约定终止日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row> 
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">合同份数</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">合同总价款</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">转包合同总价款</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">转包差价</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">次年费用</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">后端费用</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">收款分期方式</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">合同应首付金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">合同已收金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">首收金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">首收日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">次收金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">次收日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">第三次收款金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">第三次收款日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">业务办理情况</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content" style="font-size: 25px;">提成发放情况(基础服务)</div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">销售提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">协助销售提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">内务提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">审核提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">财务提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">外勤提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple-light">会计主管提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">出纳提成金额</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">提成发放时间</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><span ></span></div></el-col> 
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple-light">合伙人返佣(基础服务费)</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"><span ></span></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">佣金发放时间</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div><span></span></el-col>
</el-row>
</el-form>

</template>
<script>
  import formButton from './formButton'
  export default {
    components:{formButton},
    props:["msg"],
    data() {
      return {  
              
      }
    },
    methods: {
           show(form){
            console.log(form.value1)
           }   
    }
  }
</script>
<style scoped>
  .el-row {
    border: 1px solid black;
    margin: auto;
     width: 80%;
  }
   .el-form {
    margin: auto;
     width: 80%;
  }
  .el-col {
    border-left: 1px solid black;

  }
  .bg-purple-dark {
    background: #d3dce6;
    font-size: 25px;
  }
  .grid-content {
    min-height: 50px;
    line-height: 50px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
  .el-input{
    width: 80%;
  }
      .el-select{
    width: 80%;
  }

</style>