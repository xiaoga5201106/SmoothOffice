<template id="dialogbox">
  <el-dialog v-if="flag == '编辑'"
  :title="flag"
  :visible="dialogVisible"
  width="30%"
  :before-close="handleClose"
  >
<el-form >
    <el-form-item v-for="datas1 in datas" v-bind:label="datas1.name" :label-width="formLabelWidth">
      <el-input v-model="datas1.data" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" align="center">
    <formButton state1="确定"  state2="取消" @close="close"></formButton>
  </div>
</el-dialog>

<el-dialog v-else-if="flag == '查看订单详情'"
           :title="flag"
           :visible="dialogVisible"
           width="30%"
           :before-close="handleClose"
>
  <el-form >
    <el-form-item v-for="datas1 in datas" v-bind:label="datas1.name" :label-width="formLabelWidth">
      <span>{{datas1.data}}</span>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" align="center">
    <formButton state7="关闭"   @close="close"></formButton>
  </div>
</el-dialog>
<el-dialog v-else-if="flag == '修改密码'"
           :title="flag"
           :visible="dialogVisible"
           width="30%"
           :before-close="handleClose"
>
  <el-form >
    <el-form-item v-for="datas1 in datas" v-bind:label="datas1.name" :label-width="formLabelWidth">
     <span>{{datas1.data}}</span>
    </el-form-item>
    <span>密码</span><el-input style="width: 200px;position: relative;left: 50px" placeholder="请输入密码" v-model="psw" maxlength="20" minlength="6"></el-input>
  </el-form>
  <div slot="footer" class="dialog-footer" align="center">
<formButton state4="提交"  state2="取消" @close="close" @submit="submitPsw"></formButton>
  </div>
</el-dialog>

<el-dialog v-else-if="flag == '申请修改'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
     <span>{{flag}}备注</span>
     <span class="mustBe">*必填</span>
      <el-input
        type="textarea"
        :rows="6"
        :maxlength="200"
        placeholder="请输入内容"
        resize="none"
        @input="handleInput"
      >
      </el-input>
    <div class="limit">
      <p>{{inputSum}}/200</p>
    </div>
  </div>
  <div class="pOff">
    <span>类型</span>
    <span>{{flag}}凭证</span>
  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片" ref="getPath1" @getImg="getImg"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件" ref="getPath2" @getPdf="getPdf"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close" @submit="submit"></formButton>
  </div>
</el-dialog>


<el-dialog v-else-if="flag == '申请撤单'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
    <span>{{flag}}备注</span>
    <span class="mustBe">*必填</span>
    <el-input
      type="textarea"
      :rows="6"
      :maxlength="200"
      placeholder="请输入内容"
      resize="none"
      @input="handleInput"
    >
    </el-input>
    <div class="limit">
      <p>{{inputSum}}/200</p>
    </div>
  </div>
  <div class="pOff">
    <span>类型</span>
    <span>{{flag}}凭证</span>
  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片" ref="getPath1" @getImg="getImg"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件" ref="getPath2" @getPdf="getPdf"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
   <formButton state4="提交" @close="close" @submit="submit"></formButton>
  </div>
</el-dialog>

<el-dialog v-else-if="flag == '申请变更'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
    <span>{{flag}}备注</span>
    <span class="mustBe">*必填</span>
    <el-input
      type="textarea"
      :rows="6"
      :maxlength="200"
      placeholder="请输入内容"
      resize="none"
      @input="handleInput"
    >
    </el-input>
    <div class="limit">
      <p>{{inputSum}}/200</p>
    </div>
  </div>
  <div class="pOff">
    <span>类型</span>
    <span>{{flag}}凭证</span>
  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片" ref="getPath1" @getImg="getImg"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件" ref="getPath2" @getPdf="getPdf"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close" @submit="submit"></formButton>
  </div>
</el-dialog>


<el-dialog v-else-if="flag == '再次申请'"
  :title="flag"
  :visible="dialogVisible"
  width="40%"
  :before-close="handleClose"
  >
  <div class="pOff">
     <p>{{flag}}备注</p>
     <p>*必填</p>
  </div>
     <el-input
    type="textarea"
    :rows="6"
    :maxlength="200"
    placeholder="请输入内容"
    resize="none"
    @input="handleInput"
    >
  </el-input>
  <div class="limit">
    <p>{{inputSum}}/200</p>

  </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(照片)</div>
    <div><upload flag="图片" ref="getPath1" @getImg="getImg"></upload></div>
   </div>
   <div class="upload">
    <div class="uploadTip">上传凭证(文件)</div>
    <div><upload flag="文件" ref="getPath2" @getPdf="getPdf"></upload></div>
   </div>

  <div slot="footer" class="dialog-footer" align="center">
    <formButton state4="提交" @close="close" @submit="submit"></formButton>
  </div>
</el-dialog>

<el-dialog v-else-if="flag == '高级搜索'"
           :title="flag"
           width="1000px"
           :visible="dialogVisible"
           :before-close="handleClose"
>
  <div id="searchTools">
    <div class="items">
      <span>业务类型</span>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          key="1"
          label="税筹"
          value="1">
        </el-option>
        <el-option
          key="2"
          label="基础业务"
          value="2">
        </el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          key="3"
          label="自有业务"
          value="3">
        </el-option>
        <el-option
          key="4"
          label="转包业务"
          value="4">
        </el-option>
      </el-select>
      <el-select v-model="value3" placeholder="请选择">
        <el-option
          key="5"
          label="一次付款"
          value="5">
        </el-option>
        <el-option
          key="6"
          label="多次付款"
          value="6">
        </el-option>
        <el-option
          key="7"
          label="自签业务"
          value="7">
        </el-option>
        <el-option
          key="8"
          label="返佣业务"
          value="8">
        </el-option>
        <el-option
          key="9"
          label="工商业务"
          value="9">
        </el-option>
        <el-option
          key="10"
          label="转包业务"
          value="10">
        </el-option>
        <el-option
          key="11"
          label="财务业务"
          value="11">
        </el-option>
      </el-select>
    </div>
    <div class="items">
      <span>公司合同编号</span>
      <el-input placeholder="请输入公司合同编号"></el-input>
    </div>
    <div class="items">
      <span>合同签订日期</span>
      <el-date-picker v-model="date1" type="date" placeholder="选择日期"></el-date-picker>
      <span>至</span>
      <el-date-picker v-model="date2" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <div class="items">
      <span>标的/项目</span>
      <el-input placeholder="请输入标的/项目"></el-input>
      <span>甲方</span>
      <el-input placeholder="请输入甲方"></el-input>
      <span>乙方</span>
      <el-input placeholder="请输入乙方"></el-input>
    </div>
    <div class="items">
      <span>落地对接销售</span>
      <el-input placeholder="请输入落地对接销售"></el-input>
      <span>线索</span>
      <el-input placeholder="请输入线索"></el-input>
      <span>客户新公司名称</span>
      <el-input placeholder="请输入客户新公司名称"></el-input>
    </div>
    <div class="items">
      <span>合同总价款</span>
      <el-input placeholder="￥" class="short"></el-input>
      <span class="short">至</span>
      <el-input placeholder="￥" class="short"></el-input>
      <span>后端费用</span>
      <el-select v-model="value4" placeholder="请选择">
        <el-option
          key="12"
          label="18%"
          value="12">
        </el-option>
        <el-option
          key="13"
          label="20%"
          value="13">
        </el-option>
      </el-select>
      <span>付款单位</span>
      <el-input placeholder="请输入付款单位"></el-input>
    </div>
    <div class="items">
      <span>付款日期</span>
      <el-date-picker v-model="date3" type="date" placeholder="选择日期"></el-date-picker>
      <span>至</span>
      <el-date-picker v-model="date4" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <div class="items">
      <span>业务办理情况</span>
      <el-select v-model="value5" placeholder="请选择">
        <el-option
          key="14"
          label="签合同"
          value="14">
        </el-option>
        <el-option
          key="15"
          label="付款"
          value="15">
        </el-option>
        <el-option
          key="16"
          label="工商注册"
          value="16">
        </el-option>
        <el-option
          key="17"
          label="已完成基本业务"
          value="17">
        </el-option>
        <el-option
          key="18"
          label="客户交接"
          value="18">
        </el-option>
        <el-option
          key="19"
          label="记账会计"
          value="19">
        </el-option>
        <el-option
          key="20"
          label="提成发放"
          value="20">
        </el-option>
        <el-option
        key="21"
        label="发改委认定，税收核定"
        value="21">
      </el-option>
      </el-select>
    </div>
  </div>
  <div slot="footer" class="dialog-footer" align="center">
    <formButton state1="确定"  state2="取消" @close="close"></formButton>
  </div>
</el-dialog>
</template>
<style scoped>
  .pOff{
    text-align: left;
    position: relative;
  }
  .pOff span{
    display: inline-block;
    font-size: 18px;
    min-width: 120px;
    padding-left: 10px;
    vertical-align: top;
  }
  .pOff .mustBe{
    position: absolute;
    font-size: 12px;
    color: red;
    right: 10px;
    top: 10px;
    min-width: 20px;
  }
  .el-textarea{
    width: 70%;
    margin-left: 10px;
  }
  .limit{
    text-align: right;
    padding-right:16px;
  }
  .upload{
    margin-top:15px;
  }
  .uploadTip{
    font-size: 18px;
    position: absolute;
    margin-left: 10px;
  }

  .tip{
    text-align: right;
  }
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
    width: 100%;
  }
  #searchTools .items span{
    float: left;
    width: 100px;
    text-align: left;
    line-height: 40px;
  }
  #searchTools .items>div{
    float: left;
    margin-right: 20px;
  }
  #searchTools .el-input,.el-select{
    width: 190px;
  }
  #searchTools .items .el-input.short{
    width: 67px;
  }
  #searchTools .items span.short{
    width: 36px;
    text-align: left;
  }
</style>


<script>
 import upload from './upload'
 import formButton from './formButton'
  export default{
      name:'dialogbox',
      props:["datas","dialogVisible","flag","id"],
      components:{
         upload,
         formButton,
      },
      data(){
        return{
                 inputData:'',
                 inputSum:0,
                 pdfList:[],
                 imgList:[],
                 ossImgObject:[],
                 ossPdfObject:[],
                 value1:'',
                 value2:'',
                 value3:'',
                 value4:'',
                 value5:'',
                 date1:'',
                 date2:'',
                 date3:'',
                 date4:'',
                 formLabelWidth:'120px',
                 psw:''
        }
      },
      methods: {
                      closedialog(){
                        this.$emit("close")
                      },
                      handleClose(){
                        this.$emit("close")
                      },
                      close(){
                        this.$emit("close")
                      },
                      //获取pdf路径
                      getPdf(pdfList){
                        this.pdfList = pdfList;
                      },
                      getImg(imgList){
                        this.imgList = imgList;
                      },
                      submit(){
                        if(this.inputData.length == 0){
                          this.$message({
                              message: '需要填写申请信息！',
                              type: 'warning'
                          });
                        }
                        else{
                            this.$refs.getPath1.getUploadData();
                            this.$refs.getPath2.getUploadData();
                            //把图片上传到阿里云

                            //获取token
                            const token = localStorage.getItem('token');
                            this.postPath(token);

                            this.$emit("close");                    

                        }
                      },
                      submitPsw(psw){
                         this.$emit('submit',this.psw)
                       },
                           //把oss图片上传到我们本地服务器
                         postPath(token){
                              let that=this;
                              that.getOssPath(token).then((value)=>{
                                console.log(value.value1)
                                let url = '';
                                if(that.flag == '申请修改'){
                                  url = '/event/apply-for-udpate-slb-orders';
                                }
                                else if(that.flag == '申请变更'){
                                  url = '/event/apply-for-change-orders';
                                }
                                else if(that.flag == '申请撤单'){
                                  url = '/event/apply-for-revoke-slb-orders';
                                }
                                that.$axios.post(that.$baseURL + url,{
                                    imageList: value.value1,
                                    message: that.inputData,
                                    pdfList: value.value2,
                                    slbOrderId: that.id
                                  },
                                  {
                                    headers: {
                                      "Authorization": "Bearer"+" "+token
                                    }
                                  }
                                )
                                  .then(function(res){
                                    that.$message({
                                      message : '提交成功！',
                                      type : 'success'
                                    });
                                    that.close();
                                  })
                                  .catch(function(err){
                                    that.$message({
                                      message : '提交失败！',
                                      type : 'warning'
                                    });
                                  });
                              });

                            },
                      getOssPath(token){
                          let that=this;
                          const userId = localStorage.getItem('userId');
                          return new Promise(function (resolve, reject) {
                            that.$axios.get(that.$baseURL+'/oss/benyun-test-oss/postPolicy?dir=user-dir',{
                              headers: {
                                "Authorization": "Bearer" + " " + token
                              }
                            })
                              .then(function(res){
                                console.log(res);
                                const accessid = res.data.accessid;
                                const signature = res.data.signature;
                                const host =res.data.host;
                                const dir =res.data.dir;
                                //const expire =res.data.expire;
                                const policy =res.data.policy;
                                const filesName=[];
                                //组装发送数据
                                for(let i=0;i<that.imgList.length;i++){
                                  const request = new FormData();
                                  filesName[i]=new Date().getTime()+i+'.jpg';
                                  request.append("OSSAccessKeyId",accessid);//Bucket 拥有者的Access Key Id。
                                  request.append("policy",policy);//policy规定了请求的表单域的合法性
                                  request.append("signature",signature);//根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
                                  //---以上都是阿里的认证策略
                                  request.append("key",dir+'/'+filesName[i]);//文件名字，可设置路径
                                  request.append("success_action_status",'200');// 让服务端返回200,不然，默认会返回204
                                  request.append('file', that.imgList[i]);//需要上传的文件 file
                                  that.ossImgObject.push({"creatorId":userId,"fileName":filesName[i],"ossUrl": host+'/'+dir+'/'+filesName[i]})

                                  //得到oss路径
                                  that.$axios.post(host,request)
                                    .then(function(res){

                                    })
                                    .catch(function(err){
                                    });
                                }
                                for(let i=0;i<that.pdfList.length;i++){
                                  const request = new FormData();
                                  filesName[i]=new Date().getTime()+'.pdf';
                                  request.append("OSSAccessKeyId",accessid);//Bucket 拥有者的Access Key Id。
                                  request.append("policy",policy);//policy规定了请求的表单域的合法性
                                  request.append("signature",signature);//根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性
                                  //---以上都是阿里的认证策略
                                  request.append("key",dir+'/'+filesName[i]);//文件名字，可设置路径
                                  request.append("success_action_status",'200');// 让服务端返回200,不然，默认会返回204
                                  request.append('file', that.imgList[i]);//需要上传的文件 file
                                  that.ossPdfObject.push({"creatorId":userId,"fileName":filesName[i],"ossUrl": host+'/'+dir+'/'+filesName[i]})
                                  //得到oss路径
                                  that.$axios.post(host,request)
                                    .then(function(res){

                                    })
                                    .catch(function(err){
                                    });
                                }
                                resolve({value1:that.ossImgObject,value2:that.ossPdfObject});
                              })
                              .catch(function(err){
                                console.log(err)
                              });
                          });
                      },
                      handleInput(event){
                         this.inputData = event;
                         this.inputSum = event.length;
                         if(event.length == 200){
                          this.$message({
                              message: '已经到200字了！',
                              type: 'warning'
                          });
                         }
                      }
    }
  }
</script>
