<template>
  <div id="main">
    <tableList :titles="titles" :tableData="tableData"></tableList>
  </div>
</template>

<script>
    import tableList from '../component/tableList'
    export default {
        name: "order_list",
        components: {
          tableList
        },
        data () {
          return{
            titles:[
              /*表头*/
              { prop:'order_id',
                label:"订单编号"
              },
              { prop:'name',
                label:"客户名称"
              },
              { prop:'service_type',
                label:"业务类型"
              },
              { prop:'partner',
                label:"合伙人"
              },
              { prop:'line',
                label:"线索"
              },
              { prop:'area',
                label:"区域"
              },
              { prop:'add_time',
                label:"提交时间"
              },
              { prop:'edit_time',
                label:"最后修改时间"
              },
              { prop:'order_status',
                label:"订单提交状态"
              },
              { prop:'pact_status',
                label:"合同状态"
              },
              { prop:'progress',
                label:"当前进度"
              },
              { prop:'tools',
                label:"操作"
              }
            ],
            /*表格数据*/
            tableData:[{
              order_id: '01',
              name: '王小虎',
              service_type: '税筹-自有业务-一次性付款',
              partner:'xx有限公司',
              line:'/',
              area:'贵港',
              add_time:'2018-08-13',
              edit_time:'2018-08-13',
              order_status:'<span >已提交</span>',
              pact_status:'正办理',
              progress:'未签合同',
              tools:'操作'
            }, {
              order_id: '02',
              name: '王小虎',
              service_type: '税筹-自有业务-一次性付款',
              partner:'xx有限公司',
              line:'/',
              area:'贵港',
              add_time:'2018-08-13',
              edit_time:'2018-08-13',
              order_status:'已提交',
              pact_status:'正办理',
              progress:'未签合同',
              tools:'操作'
            }, {
              order_id: '03',
              name: '王小虎',
              service_type: '税筹-自有业务-一次性付款',
              partner:'xx有限公司',
              line:'/',
              area:'贵港',
              add_time:'2018-08-13',
              edit_time:'2018-08-13',
              order_status:'已提交',
              pact_status:'正办理',
              progress:'未签合同',
              tools:'操作'
            }, {
              order_id: '04',
              name: '王小虎',
              service_type: '税筹-自有业务-一次性付款',
              partner:'xx有限公司',
              line:'/',
              area:'贵港',
              add_time:'2018-08-13',
              edit_time:'2018-08-13',
              order_status:'已提交',
              pact_status:'正办理',
              progress:'未签合同',
              tools:'操作'
            }]
          }
        }
    }
</script>

<style scoped>
  .el-table_4_column_12{
    color: red;
  }
</style>
