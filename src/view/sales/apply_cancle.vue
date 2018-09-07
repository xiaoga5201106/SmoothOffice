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
     let type1=undefined,type2=undefined,type3=undefined,name=undefined,code=undefined;
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
            option:[
            {
              value: '3',
              label: '全部'
            },{
              value: '1',
              label: '税筹'
            },{
              value: '2',
              label: '基础业务'
            }
            ,]
          },{
            content:'select',
            placeholder:'请选择',
            option:[
            {
              value: '6',
              label: '全部'
            },{
              value: '4',
              label: '自有业务'
            },{
              value: '5',
              label: '转包业务'
            },]
          },{
            content:'select',
            placeholder:'请选择',
            option:[
            {
              value: '14',
              label: '全部'
            },{
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
            },]
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
                    this.getList()
        },
           methods:{
            getList(val,type1,type2,type3,code,name){
              const token=localStorage.getItem('token');
             let that=this;
               if (val == undefined) {
              val = 1;
                     }
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
             this.$axios.get(this.$baseURL+'/slb-order-applications-records?code='+code+'&customerName='+name+'&page='+(val-1)+'&pageSize=10&size=10&sort=createTime,desc&type=1&isCancel=false&type1='+type1+'&type2='+type2+'&type3='+type3,{
                   headers:{
                      "Authorization": "Bearer"+" "+token
                   }
             })
              .then(function(ret){
                that.listTotal = parseInt(ret.headers['x-total-count']);
                let data=ret.data;
                let menu=[];
                console.log(type1)
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
             page(val){
              let that=this;
               let menu=[];
                console.log(val)
                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }     
               menu[0].tableData=[];
                  this.getList(val,type1,type2,type3,code,name)
                 
             },
             searchApplyList(inputValue,selectValue){
                let that=this;
                let menu=[];
                 type1=selectValue[0];
                 type2=selectValue[1];
                 type3=selectValue[2];
                 code=inputValue[3];
                 name=inputValue[4]; 
                
                for (var i = 0; i < that.Menutabs.length; i++) {
                               menu[i]=that.Menutabs[i]
                }     
                 console.log(type1)
                this.paginationShow = false;
            this.$nextTick(function () {
                  menu[0].tableData=[];
                  menu[1].tableData=[];
                  menu[2].tableData=[];
              this.getList(undefined,type1,type2,type3,code,name);
              this.paginationShow = true;
            })
               
             },


        }

    }
</script>

<style scoped>

</style>
