<template id="contract">
 <el-form >
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">基本信息</div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">公司合同编号</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'"  v-model="form.id"></el-input><span v-if="flag=='show'">{{form.id}}</span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">区域</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-select v-if="flag=='edit'" v-model="form.value1"><el-option v-for="items in selectItems" :label="items.area" v-model="items.area"></el-option></el-select><span v-if="flag=='show'">{{form.value2}}</span></div></el-col>
</el-row>
<el-row>

    <el-col :span="4"><div class="grid-content bg-purple">合同签订日期</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-date-picker v-if="flag=='edit'"  v-model="form.signData" type="date" placeholder="选择日期">
    </el-date-picker></div><span v-if="flag=='show'">{{form.signData}}</span></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">合同类型</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'" v-model="form.type"></el-input><span v-if="flag=='show'">{{form.type}}</span></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">标的/项目</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'" v-model="form.project"></el-input><span v-if="flag=='show'">{{form.project}}</span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">合同份数</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-select v-if="flag=='edit'" v-model="form.value2"><el-option v-for="items in selectItems" :label="items.counts" v-model="items.counts"></el-option></el-select><span v-if="flag=='show'">{{form.value2}}</span></div></el-col>
</el-row>
<el-row >
  <el-col :span="4" ><div class="grid-content bg-purple" style="height: 101px;line-height: 100px">合同当事人</div></el-col>
  <el-col :span="20">
    <div class="grid-content bg-purple">
    <el-row style="width: 100%">
      <el-col :span="4" style="border-left: none;border-top: none;border-bottom: none; "><div class="grid-content bg-purple">甲方</div></el-col>
       <el-col :span="20"  style="border-left: none;border-top: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><el-input v-if="flag=='edit'"  v-model="form.partA" ></el-input><span v-if="flag=='show'">{{form.partA}}</span></div></el-col>
    </el-row>
       <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">乙方</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><el-input v-if="flag=='edit'"   v-model="form.partB"></el-input><span v-if="flag=='show'">{{form.partB}}</span></div></el-col>
    </el-row>
  </div>
</el-col>
</el-row> 
<el-row >
  <el-col :span="4" ><div class="grid-content bg-purple" style="height: 101px;line-height: 100px">合同日期</div></el-col>
  <el-col :span="20">
    <div class="grid-content bg-purple">
    <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-top: none;border-bottom: none; "><div class="grid-content bg-purple">生效日期</div></el-col>
       <el-col :span="20" rowspan="2" style="border-left: none;border-top: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><el-date-picker  v-if="flag=='edit'" v-model="form.startData" type="date" placeholder="选择日期">
    </el-date-picker><span v-if="flag=='show'">{{form.startData}}</span></div></el-col>
    </el-row>
       <el-row style="width: 100%">
      <el-col :span="4" rowspan="2" style="border-left: none;border-bottom: none;"><div class="grid-content bg-purple">终止日期</div></el-col>
      <el-col :span="20" rowspan="2" style="border-left: none;border-bottom: none;border-right: none;"><div class="grid-content bg-purple"><el-date-picker  v-if="flag=='edit'" v-model="form.finishData" type="date" placeholder="选择日期">
    </el-date-picker><span v-if="flag=='show'">{{form.finishData}}</span></div></el-col>
    </el-row>
  </div>
</el-col>
</el-row> 
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">合同总价款(元)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'"  v-model="form.price"></el-input><span v-if="flag=='show'">{{form.price}}</span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">次年费用(元)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'"  v-model="form.nextYearPrice"></el-input><span v-if="flag=='show'">{{form.nextYearPrice}}</span></div></el-col>
</el-row>
<el-row>
    <el-col :span="4"><div class="grid-content bg-purple">后端费用</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'"  v-model="form.backPrice"></el-input><span v-if="flag=='show'">{{form.backPrice}}</span></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">收款分期方式</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"><el-select v-if="flag=='edit'" v-model="form.value3"><el-option v-for="items in selectItems" :label="items.paymentMethod" v-model="items.paymentMethod"></el-option></el-select><span v-if="flag=='show'">{{form.value3}}</span></div></el-col>
</el-row> 
<el-row>
    <el-col :span="8"><div class="grid-content bg-purple" >合同应首付金额(元)</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"><el-input v-if="flag=='edit'"  v-model="form.totalPrice"></el-input><span v-if="flag=='show'">{{form.totalPrice}}</span></div></el-col>
</el-row> 
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">其他</div></el-col>
</el-row>
<el-row>
    <el-col :span="8"><div class="grid-content bg-purple" >外勤</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"><el-select v-if="flag=='edit'" v-model="form.value4"><el-option v-for="items in selectItems" :label="items.field" v-model="items.field"></el-option></el-select><span v-if="flag=='show'">{{form.value4}}</span></div></el-col>
</el-row> 
<el-row>
    <el-col :span="8"><div class="grid-content bg-purple" >类型</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light"><span>合同凭证</span></div></el-col>
</el-row> 
<el-row >
    <el-col :span="8"><div class="grid-content bg-purple" >凭证内容(图片)</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light" ><upload flag="图片" ></upload></div></el-col>
</el-row> 
<el-row>
    <el-col :span="8"><div class="grid-content bg-purple" >凭证内容(文件)</div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple-light" ><upload flag="文件"></upload></div></el-col>
</el-row> 
<formButton v-if="flag=='edit'" state4="提交" style="margin: 20px;"></formButton>
</el-form>

</template>
<script>
  import formButton from './formButton'
  import upload from './upload'
  export default {
    components:{formButton,upload},
    props:["form","selectItems","flag"],
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