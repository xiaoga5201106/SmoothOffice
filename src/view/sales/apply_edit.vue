<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0"></searchTools>
    <tabs :Menutabs="Menutabs" operate="true"></tabs>
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
            tableData:[{
              order_id: '01',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'修改金额',
              apply_time:'2018年7月22日 16:16:40',
              status:'待审核'
            }, {
              order_id: '02',
              contract_id: '2017-H-0004',
              name: '张四',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'修改金额',
              apply_time:'2018年7月22日 16:20:40',
              status:'待审核'
            }, {
              order_id: '03',
              contract_id: '2017-H-0004',
              name: '李四',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'修改金额',
              apply_time:'2018年7月22日 16:16:40',
              status:'待审核'
            }, {
              order_id: '04',
              contract_id: '2017-H-0004',
              name: '王五',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'修改金额',
              apply_time:'2018年7月22日 16:16:40',
              status:'待审核'
            }]
          },{
            label:'已通过',
            name:'2',
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
            tableData:[{
              order_id: '01',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'已通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'通过'
            }, {
              order_id: '02',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'已通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'通过'
            }, {
              order_id: '03',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'已通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'通过'
            }, {
              order_id: '04',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'已通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'通过'
            }]
          },{
            label:'不通过',
            name:'3',
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
            tableData:[{
              order_id: '01',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'不通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'凭证不对'
            }, {
              order_id: '02',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'不通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'不通过'
            }, {
              order_id: '03',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'不通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'不通过'
            }, {
              order_id: '04',
              contract_id: '2017-H-0004',
              name: '张三',
              service_type:'税筹-自有业务-一次性付款',
              apply_information:'广西xx有限公司',
              apply_time:'2018年7月22日 16:16:40',
              status:'不通过',
              interior:'王丹',
              audit_time:'2018年7月22日 16:46:40',
              audit_remark:'不通过'
            }]
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
        }
    }
</script>

<style scoped>

</style>
