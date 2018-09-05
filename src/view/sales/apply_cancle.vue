<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0" @search="searchApplyList"></searchTools>
    <tabs :Menutabs="Menutabs" operate="true" father="apply_cancle" :queryState="queryState"></tabs>
     <pagination :listTotal="listTotal" @page="page" :paginationShow="paginationShow"></pagination>
  </div>
</template>

<script>
    import tabs from '../component/tabs'
    import searchTools from'../component/searchTools'
    import pagination from'../component/pagination'
    export default {
        name: "apply_cancle",
        inject: ['newMenu'],
        components: {
          tabs,
          searchTools,
          pagination
        },
      data () {
        return {
          paginationShow:true,
          listTotal:0,
          /*工作台跳转过来的query*/
          queryState:this.$route.query.state,
          /*tabs标签页*/
          Menutabs:[{
            label:'待审核',
            name:'1',
            type:'wait_audit',
            /*待审核表头*/
            titles:[
            { prop:'id',
                label:"序号"
              },
              { prop:'order_id',
                label:"订单编号"
              },
              { prop:'contract_id',
                label:"合同编号"
              },
              { prop:'name',
                label:"客户名称"
              },
              { prop:'service_type',
                label:"业务类型"
              },
              { prop:'apply_information',
                label:"申请信息"
              },
              { prop:'apply_time',
                label:"申请时间"
              },
              { prop:'status',
                label:"状态"
              }
            ],
            /*待审核表格数据*/
            tableData:[]
          },{
            label:'已通过',
            name:'2',
            type:'pass',
            /*其他表头*/
            titles:[
            { prop:'id',
                label:"序号"
              },
              { prop:'order_id',
                label:"订单编号"
              },
              { prop:'contract_id',
                label:"合同编号"
              },
              { prop:'name',
                label:"客户名称"
              },
              { prop:'service_type',
                label:"业务类型"
              },
              { prop:'apply_information',
                label:"申请信息"
              },
              { prop:'apply_time',
                label:"申请时间"
              },
              { prop:'status',
                label:"状态"
              },
              { prop:'interior',
                label:"内务"
              },
              { prop:'audit_time',
                label:"审核时间"
              },
              { prop:'audit_remark',
                label:"审核备注"
              }
            ],
            /*已通过表格数据*/
            tableData:[]
          },{
            label:'不通过',
            name:'3',
            type:'no_pass',
            /*其他表头*/
            titles:[
            { prop:'id',
                label:"序号"
              },
              { prop:'order_id',
                label:"订单编号"
              },
              { prop:'contract_id',
                label:"合同编号"
              },
              { prop:'name',
                label:"客户名称"
              },
              { prop:'service_type',
                label:"业务类型"
              },
              { prop:'apply_information',
                label:"申请信息"
              },
              { prop:'apply_time',
                label:"申请时间"
              },
              { prop:'status',
                label:"状态"
              },
              { prop:'interior',
                label:"内务"
              },
              { prop:'audit_time',
                label:"审核时间"
              },
              { prop:'audit_remark',
                label:"审核备注"
              }
            ],
            /*不通过表格数据*/
            tableData:[]
          }],

          /*搜索表单数据*/
          searchDatas:[{
            item:'业务类型',
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '1',
              label: '税筹'
            },{
              value: '2',
              label: '基础业务'
            }
            ,{
              value: '3',
              label: '全部'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '4',
              label: '自有业务'
            },{
              value: '5',
              label: '转包业务'
            },{
              value: '6',
              label: '全部'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '7',
              label: '一次付款'
            },{
              value: '8',
              label: '多次付款'
            },{
              value: '9',
              label: '自签业务'
            },{
              value: '10',
              label: '返佣业务'
            },{
              value: '11',
              label: '工商业务'
            },{
              value: '12',
              label: '转包业务'
            },{
              value: '13',
              label: '财务业务'
            },{
              value: '14',
              label: '全部'
            }]
          },{
            item:'订单编号',
            content:'input',
            placeholder:'请输入订单编号'
          },{
            item:'客户名称',
            content:'input',
            placeholder:'请输入客户名称'
          }]
          }
        },
        created:function(){
             this.newMenu('申请列表','申请变更');
             const token=localStorage.getItem('token');
             let that=this;
             this.$axios.get(this.$baseURL+'/slb-order-applications-records?pageSize=10&size=10&isCancel=false&type=1',{
                   headers:{
                      "Authorization": "Bearer"+" "+token
                   }
             })
              .then(function(ret){
                that.listTotal = parseInt(ret.headers['x-total-count']);
                let data=ret.data;
                let menu=[];

                console.log(111)
                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }

                      data.forEach(function(value,index,array){
                      
                          console.log(data.length)
                           let status;
                        if (value.states=="1") {
                                status="待审核"
                        }
                        if (value.states=="2") {
                                status="已通过"
                        }
                        if (value.states=="3") {
                                status="未通过"
                        }
                        if (value.states==menu[0].name) {
                            menu[0].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else if (value.states==menu[1].name) {
                            menu[1].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else  if (value.states==menu[2].name) {
                            menu[2].tableData.push({
                                 id:value.id,
                                order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                        


                      })
              })
               .catch(function(err){
                console.log(err)
              })

        },
           methods:{
             searchApplyList(inputValue,selectValue){
                 const token = localStorage.getItem('token');
                let that=this;
                let type1=selectValue[0];
                let type2=selectValue[1];
                let type3=selectValue[2];
                let code=inputValue[3];
                let name=inputValue[4];

                if (type1==undefined||type1=="全部") {
                     type1=" "
                 }
                if (type2==undefined||type2=="全部") {
                     type2=" "
                 }
                if (type3==undefined||type3=="全部") {
                     type3=" "
                 }
                if (code==undefined) {
                     code=" "
                 }
                 if (name==undefined) {
                     name=" "
                 }
                 console.log(type1)
                this.$axios.get(this.$baseURL+'/slb-order-applications-records?code='+code+'&customerName='+name+'&type1='+type1+'&type2='+type2+'&type3='+type3+'&type=1'+'&pageSize=10&size=10',{
                       headers:{
                           "Authorization": "Bearer"+" "+token
                        }
                })
                .then(function(ret){
                  that.listTotal = parseInt(ret.headers['x-total-count']);
                        console.log(11)
                        let data=ret.data;
                let menu=[];

                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }
                    if(data==""){
                      that.$message.error("暂无此信息！")
                    }
                    menu[0].tableData=[];
                    menu[1].tableData=[];
                    menu[2].tableData=[];
                      data.forEach(function(value,index,array){
                        
                            let status;
                        if (value.states=="1") {
                                status="待审核"
                        }
                        if (value.states=="2") {
                                status="已通过"
                        }
                        if (value.states=="3") {
                                status="未通过"
                        }
                        if (value.states==menu[0].name) {
                            
                            menu[0].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else if (value.states==menu[1].name) {                         
                            menu[1].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else  if (value.states==menu[2].name) {
                            menu[2].tableData.push({
                                 id:value.id,
                                order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }

                        

                      })


                })
                 .catch(function(err){
                         console.log(err)
                })
             },
             page(val){

                 this.newMenu('申请列表','申请变更');
             const token=localStorage.getItem('token');
             let that=this;
             this.$axios.get(this.$baseURL+'/slb-order-applications-records?pageSize=10&size=10&&type=1&isCancel=false&page='+(val-1),{
                   headers:{
                      "Authorization": "Bearer"+" "+token
                   }
             })
              .then(function(ret){
                let data=ret.data;
                let menu=[];
                console.log(111)
                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }
                       menu[0].tableData=[];
                      data.forEach(function(value,index,array){
                        
                           let status;
                        if (value.states=="1") {
                                status="待审核"
                        }
                        if (value.states=="2") {
                                status="已通过"
                        }
                        if (value.states=="3") {
                                status="未通过"
                        }
                        
                        console.log(value.states)
                        if (value.states==menu[0].name) {
                            menu[0].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else if (value.states==menu[1].name) {
                            menu[1].tableData.push({
                                 id:value.id,
                                 order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                         else  if (value.states==menu[2].name) {
                            menu[2].tableData.push({
                                 id:value.id,
                                order_id:value.slbOrder.code,
                                 contract_id:'',
                                 name:value.slbOrder.customerName,
                                 service_type:value.slbOrder.type1+'-'+value.slbOrder.type2+'-'+value.slbOrder.type3,
                                 apply_time:value.createTime,
                                 status:status,
                                 apply_information:value.message
                           })
                        }
                        


                      })
              })
               .catch(function(err){
                console.log(err)
              })
             }
        }

    }
</script>

<style scoped>

</style>
