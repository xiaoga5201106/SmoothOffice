<template>
  <div id="main">
    <div>
      <div><el-tag>合同基本信息</el-tag></div>
      <formBox :labels="labels" flag="viewInformation"></formBox>
    </div>
    <div class="record">
      <div>
        <div class="title">申请修改记录</div>
        <div class="btn" v-if="type == 'no_pass'"><el-button size="medium" type="danger"
              @click="showDialogbox">再次申请</el-button></div>
      </div>
      <tableList :titles="titles" :tableData="tableData" operate="false"></tableList>
    </div>
    <dialogbox :dialogVisible="show"  @close="show=false" flag="再次申请"></dialogbox>
  </div>
</template>

<script>
   import formBox from '../component/formBox'
   import tableList from '../component/tableList'
   import dialogbox from '../component/dialog'
    export default {
        name: "apply_information",
        inject: ['newMenu'],
        components: {
         formBox,
         tableList,
         dialogbox
        },
      data () {
        return{
          type:this.$route.query.type,
          father:this.$route.query.father,
           order_id:this.$route.query.order_id,
          show:false,
          labels:[
               {
                 key:'1',
                title:'订单编号',
                message:''
               },
               {
                 key:'1',
                title:'客户名称',
                message:''
               },
               {
                 key:'1',
                title:'区域',
                message:''
               },
               {
                 key:'1',
                title:'合伙人名称',
                message:''
               },
               {
                 key:'1',
                title:'业务类型',
                message:''
               },
               {
                 key:'1',
                title:'合伙人销售',
                message:''
               },
               {
                 key:'1',
                title:'协助成单',
                message:''
               },
               {
                 key:'1',
                title:'订单提交时间',
                message:''
               }
             ],
             titles:[
              /*表头*/
              { prop:'id',
                label:"序号"
              },
              { prop:'apply_remark',
                label:"申请备注"
              },
              { prop:'apply_time',
                label:"申请时间"
              },
              { prop:'vouchers_content',
                label:"凭证内容"
              },
              { prop:'type',
                label:"类型"
              },
              { prop:'auditor',
                label:"审核员"
              },
              { prop:'auditor_time',
                label:"审核时间"
              },
              { prop:'status',
                label:"状态"
              },
              { prop:'auditor_remark',
                label:"审核备注"
              }
            ],
            tableData:[{
              id: '01',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '02',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '03',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }, {
                id: '04',
              apply_remark: '申请修改合同金额',
              apply_time: '2018-8-3 10:11:29',
              vouchers_content:'这里是图片',
              type:'申请修改凭证',
              auditor:'李姐',
              auditor_time:'2018-8-3 10:11:29',
              status:'不通过',
              auditor_remark:'凭证上传出错'
              }],
        }
      },
      methods:{
        showDialogbox(){
          this.show = true;
        }
      },
      created: function(){
        if(this.father =='apply_edit'){
          this.father = '申请修改'
        }
        else if(this.father =='apply_cancle'){
          this.father = '申请撤单'
        }
        else{
          this.father = '申请变更'
        }
        this.newMenu('申请列表',this.father,'申请信息');
        const token=localStorage.getItem('token');
                let that=this;
                this.$axios.get(this.$baseURL+'/slb-order-applications-records?id=1',{
                  headers:{
                    "Authorization": "Bearer"+" "+token
                  }
                })
                  .then(function(ret){
                    let data=ret.data;
                     console.log(order_id)
                    let order_id=that.order_id;
                    for (var i = 0; i < that.labels.length; i++) {
                          that.labels[i].message
                    }
                       data.forEach(function(value,index,array){
                                if (order_id==value.code) {
                                  console.log(111)
                                  that.labels[0].message=value.code,
                                  that.labels[1].message=value.customerName,
                                  that.labels[2].message=value.area,
                                  that.labels[3].message=value.partnerName,
                                  that.labels[4].message=value.type1+'-'+value.type2+'-'+value.type3,
                                  that.labels[5].message=value.partnerSale,
                                  that.labels[6].message=value.assist,
                                  that.labels[7].message=value.submitTime
                                }

                       })

                  })
                  .catch(function(err){
                      console.log(err )
                  })
      }
    }
</script>

<style scoped>
 .el-tag{
  width: 100%;
  text-align: left;
  padding: 10px;
  height: auto;
  font-size: 15px;
 }
 .record{
  margin-top:15px;
 }
 .title{
  font-size: 23px;
  float: left;
  margin-bottom:20px;
 }
 .btn{
  float: right;

 }
 .el-upload{
   position: absolute;
   right: 0;
  }
</style>
