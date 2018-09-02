<template>
  <div id="order_progress">
    <div class="item" v-for="data in formData">
      <span><label>{{data.title}}</label></span>
      <span v-html="data.value">{{data.value}}</span>
    </div>
    <div class="item">
      <span><label>当前进度</label></span>
      <div class="progress">
        <div v-for="data in progress" v-bind:class="{ active: data.status }">
          <div class="right green" v-if="data.status==true"></div>
          <div class="right gray" v-if="data.status==false"></div>
          <h3>{{data.title}}</h3>
          <div class="progress_l" v-if="data.company!=undefined"><span>注册公司名称</span><div class="file">西红柿首富公司</div></div>
          <div class="progress_l" v-if="data.img!=undefined"><span>凭证内容（图片）</span><div class="file" v-for="img in data.img"><img :src="img.imgUrl" @click="openImg(img.imgUrl)"/></div></div>
          <div class="progress_l" v-if="data.pdf!=undefined"><span>凭证内容（文件）</span><div class="file" v-for="pdf in data.pdf"><img :src="pdf.pdfUrl" /><div><el-button size="small" type="primary" @click="">查看文件</el-button></div></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "order_progess",
        inject: ['newMenu'],
        data () {
          return{
            //用id去查询
            order_id:this.$route.query.order_id,
            formData:[{
              title:'合同编号',
              value:'2017-H-0001'
            },{
              title:'业务类型',
              value:'税筹-自有业务流程-一次付款'
            },{
              title:'客户姓名',
              value:'王小虎'
            },{
              title:'合同状态',
              value:'<span style="background:#8bc34a;color:#fff;padding: 4px 10px">已完成</span>'
            }],
            progress:[{
              title:'签合同',
              time:'2018-07-22 10:24:33',
              status:true,
              img:[{
                imgUrl:'../../static/img/ping.png'
              },{
                imgUrl:'../../static/img/ping.png'
              },{
                imgUrl:'../../static/img/ping.png'
              }],
              pdf:[{
                pdfUrl:'../../static/img/pdf.png'
              },{
                pdfUrl:'../../static/img/pdf.png'
              },{
                pdfUrl:'../../static/img/pdf.png'
              }]
              },{
              title:'付款',
              time:'2018-07-22 10:24:33',
              status:true,
              img:[{
                imgUrl:'../../static/img/ping.png'
              },{
                imgUrl:'../../static/img/ping.png'
              },{
                imgUrl:'../../static/img/ping.png'
              }],
              pdf:[{
                pdfUrl:'../../static/img/pdf.png'
              },{
                pdfUrl:'../../static/img/pdf.png'
              },{
                pdfUrl:'../../static/img/pdf.png'
              }]
              },
              {
                title:'工商注册',
                time:'2018-07-22 10:24:33',
                status:true,
                company:'西红柿首富',
                img:[{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                }],
                pdf:[{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                }]
              },
              {
                title:'国地税报道银行开户',
                time:'2018-07-22 10:24:33',
                status:true,
                img:[{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                }],
                pdf:[{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                }]
              },
              {
                title:'客户交接',
                time:'2018-07-22 10:24:33',
                status:true,
                img:[{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                },{
                  imgUrl:'../../static/img/ping.png'
                }],
                pdf:[{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                },{
                  pdfUrl:'../../static/img/pdf.png'
                }]
              },
              {
                title:'记账会计（李洁）',
                status:false
              },
              {
                title:'提成发放',
                status:false
              },
              {
                title:'发改委认定（税收核定）',
                status:false
              }
            ]
          }
        },
        methods: {
          openImg(url) {
            this.$alert('<img src='+url+' style="width:100%"/>', '查看凭证', {
              dangerouslyUseHTMLString: true,
              showConfirmButton:false
            }).catch(() => {
            });;
          }
      },
      created(){
          //三級麵包屑
          this.newMenu('我的订单','订单列表','查看进度');
          let order_id=this.$route.query.order_id;
          let that = this;
          //拿到token
          const token = localStorage.getItem('token');
          /*this.$axios.get(this.$baseURL+'/slb-orders?isCancel=false&page=' + (val - 1) + '&pageSize=10&size=10', {
            headers: {
              "Authorization": "Bearer" + " " + token
            }
          })
          .then(function (res) {
            res.data.forEach(function (value, index, array) {
              let order_status, pact_status;
              if (value.submitStates == 1) {
                order_status = '待提交'
              }
              if (value.submitStates == 2) {
                order_status = '已提交'
              }
              if (value.contractStates == 1) {
                pact_status = '待签订'
              }
              if (value.contractStates == 2) {
                pact_status = '正办理'
              }
              if (value.contractStates == 3) {
                pact_status = '已完成'
              }
              if (value.contractStates == 4) {
                pact_status = '已撤单'
              }
              that.tableData.push({
                order_id: value.id,
                name: value.customerName,
                service_type: value.type1 + '-' + value.type2 + '-' + value.type3,
                partner: value.partnerName,
                line: value.clue,
                area: value.area,
                add_time: that.$util.formatDate(value.createTime),
                edit_time: that.$util.formatDate(value.submitTime),
                order_status: order_status,
                pact_status: pact_status,
                progress: value.currentProgress
              });
            });
          }).catch(function (err) {

        });*/
      }
    }
</script>

<style scoped>
  #order_progress{
    background: #fff;
    padding: 10px;
  }
  #order_progress .item{
    overflow: auto;
    padding: 10px 0;
  }
  #order_progress .item>span{
    display: block;
    float: left;
  }
  #order_progress .item>span:nth-child(1){
    width: 150px;
    text-align: left;
    font-weight: bold;
  }
  .item h3{
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .progress{
    float: left;
  }
  .progress>div{
    min-height: 150px;
    padding-left: 60px;
    border-left:2px solid #bfbfbf;
    position: relative;
  }
  .progress .active{
    border-left:2px solid #8bc34a;
  }
  .right{
    width: 48px;
    height: 48px;
    position: absolute;
    left: -24px;
    top: -10px;
  }
  .green{
    background: url("/static/img/right-green.png") #fff;
  }
  .gray{
    background: url("/static/img/right-gray.png") #fff;
  }
  .progress .file{
    float: left;
    margin-left: 40px;
  }
  .progress .file img{
    width: 100px;
    cursor: pointer;
  }
  .progress .progress_l{
    overflow: auto;
    padding: 10px 0;
  }
  .progress .progress_l span{
    float: left;
    width: 120px;
  }
</style>
