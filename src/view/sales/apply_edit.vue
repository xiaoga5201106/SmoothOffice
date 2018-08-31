<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0" @search="searchApplyList"></searchTools>
    <tabs :Menutabs="Menutabs" operate="true" father="apply_edit"></tabs>
    <pagination></pagination>
  </div>
</template>

<script>
    import tabs from '../component/tabs'
    import searchTools from'../component/searchTools'
    import pagination from'../component/pagination'
    export default {
        name: "apply_edit",
        components: {
          tabs,
          searchTools,
          pagination
        },
      data () {
        return {
          /*tabs标签页*/
          Menutabs:[{
            label:'待审核',
            name:'1',
            type:'wait_audit',
            /*待审核表头*/
            titles:[
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
              label: '筹税'
            },{
              value: '2',
              label: '基础业务'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '3',
              label: '自由业务'
            },{
              value: '4',
              label: '转包业务'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '5',
              label: '一次付款'
            },{
              value: '6',
              label: '多次付款'
            },{
              value: '7',
              label: '自签业务'
            },{
              value: '8',
              label: '返佣业务'
            },{
              value: '9',
              label: '工商业务'
            },{
              value: '10',
              label: '转包业务'
            },{
              value: '11',
              label: '财务业务'
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
             const token=localStorage.getItem('token');
             let that=this;
             this.$axios.get('/api/slb-order-applications-records',{
                   headers:{
                      "Authorization": "Bearer"+" "+token
                   }
             })
              .then(function(ret){
                let data=ret.data;
                let menu=[];

                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }       
                      
                      data.forEach(function(value,index,array){
                        let status;
                        if (value.submitStates=="1") {
                                status="待审核"
                        }
                        if (value.submitStates=="2") {
                                status="已通过"
                        }
                        if (value.submitStates=="3") {
                                status="未通过"
                        }
                        if (value.submitStates==menu[0].name) {
                          console.log(111)
                            menu[0].tableData.push({
                                 order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
                           })
                        }
                         else if (value.submitStates==menu[1].name) {
                            menu[1].tableData.push({
                                  order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
                           })
                        }
                         else  if (value.submitStates==menu[2].name) {
                            menu[2].tableData.push({
                                  order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
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
                
                if (type1==undefined) {
                     type1=" "
                 }
                if (type2==undefined) {
                     type2=" "
                 }
                if (type3==undefined) {
                     type3=" "
                 }
                if (code==undefined) {
                     code=" "
                 }
                 if (name==undefined) {
                     name=" "
                 }
                 
                this.$axios.get('/api/slb-order-applications-records?code='+code+'&customerName='+name+'&type1='+type1+'&type2='+type2+'&type3='+type3,{
                       headers:{
                           "Authorization": "Bearer"+" "+token
                        }
                })
                .then(function(ret){
                        console.log(11)
                        let data=ret.data;
                let menu=[];

                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }       
                      
                      data.forEach(function(value,index,array){
                        let status;
                        if (value.submitStates=="1") {
                                status="待审核"
                        }
                        if (value.submitStates=="2") {
                                status="已通过"
                        }
                        if (value.submitStates=="3") {
                                status="未通过"
                        }
                        if (value.submitStates==menu[0].name) {
                           menu[0].tableData=[]
                            menu[0].tableData.push({
                                 order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
                           })
                        }
                         else if (value.submitStates==menu[1].name) {
                          menu[1].tableData=[]
                            menu[1].tableData.push({
                                  order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
                           })
                        }
                         else  if (value.submitStates==menu[2].name) {
                          menu[2].tableData=[]
                            menu[2].tableData.push({
                                  order_id:value.code,
                                 contract_id:'',
                                 name:value.customerName,
                                 service_type:value.type1+'-'+value.type2+'-'+value.type3,
                                 apply_time:value.submitTime,
                                 status:status
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
