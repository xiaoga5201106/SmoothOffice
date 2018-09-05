<template>
  <div id="main">
    <div>
      <div><el-tag>合同基本信息</el-tag></div>
      <formBox :labels="labels" flag="viewInformation"></formBox>
    </div>
    <div class="record">
      <div>
        <div class="title">{{this.father+'信息'}}</div>
        <div class="btn" v-if="type == 'no_pass'"><el-button size="medium" type="danger"
              @click="showDialogbox">再次申请</el-button></div>
      </div>
      <tableList :titles="titles" :tableData="tableData" operate="false" cerList="true"></tableList>
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
           id:this.$route.query.id,
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
            tableData:[],
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
                this.$axios.get(this.$baseURL+'/slb-order-applications-records/'+that.id,{
                  headers:{
                    "Authorization": "Bearer"+" "+token
                  }
                })
                  .then(function(ret){
                    let data=ret.data.value;
                    let order_id=that.order_id;
                    for (var i = 0; i < that.labels.length; i++) {
                    }

                        let status;
                        if (data.states=="1") {
                                status="待审核"
                        }
                        if (data.states=="2") {
                                status="已通过"
                        }
                        if (data.states=="3") {
                                status="未通过"
                        }
                        if (order_id==data.slbOrder.code) {
                          that.labels[0].message=data.slbOrder.code,
                          that.labels[1].message=data.slbOrder.customerName,
                          that.labels[2].message=data.slbOrder.area,
                          that.labels[3].message=data.slbOrder.partnerName,
                          that.labels[4].message=data.slbOrder.type1+'-'+data.slbOrder.type2+'-'+data.slbOrder.type3,
                          that.labels[5].message=data.slbOrder.partnerSale,
                          that.labels[6].message=data.slbOrder.assist,
                          that.labels[7].message=data.slbOrder.submitTime,
                          that.tableData=[
                              {
                                id:that.id,
                                apply_remark:data.message,
                                apply_time:data.createTime,
                                type:data.slbOrder.type1+'-'+data.slbOrder.type2+'-'+data.slbOrder.type3,
                                auditor:data.auditor,
                                auditor_time:data.auditTime,
                                status:status,
                                auditor_remark:data.auditMessage,
                                vouchers_content:ret.data.imageList
                              }
                          ]
                        }

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
