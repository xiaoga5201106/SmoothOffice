<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0"></searchTools>
    <tabs :Menutabs="Menutabs"></tabs>
    <pagination></pagination>
  </div>
</template>

<script>
  import tableList from '../component/tableList'
  import pagination from'../component/pagination'
  import searchTools from'../component/searchTools'
  import tabs from '../component/tabs'
    export default {
        name: "percentage",
        components: {
          tableList,
          pagination,
          tabs,
          searchTools
        },
      data () {
        return{
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
                label: '筹税'
              },{
                value: '2',
                label: '基础业务'
              }]
            },{
              content:'select',
              placeholder:'请选择',
              option:[
              {
              value: '6',
              label: '全部'
              },{
                value: '4',
                label: '自由业务'
              },{
                value: '5',
                label: '转包业务'
              }]
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
              }]
            },{
              item:'办理状态',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '12',
                label: '已完成'
              },{
                value: '13',
                label: '已撤单'
              }]
            },{
              item:'公司合同编号',
              content:'input',
              placeholder:'请输入公司合同编号'
            },{
              item:'客户名称',
              content:'input',
              placeholder:'请输入客户名称'
            }],
            /*tabs标签页*/
            Menutabs:[{
              label:'基本服务',
              name:'1',
              /*基本服务表格数据*/
              titles:[
                { prop:'order_id',
                  label:"序号"
                },
                { prop:'contract_id',
                  label:"公司合同编号"
                },
                { prop:'pact_status',
                  label:"办理状态"
                },
                { prop:'partner',
                  label:"合伙人"
                },
                { prop:'line',
                  label:"线索"
                },
                { prop:'help',
                  label:"协助成单"
                },
                { prop:'pact_time',
                  label:"合同签订日期"
                },
                { prop:'name',
                  label:"客户名称"
                },
                { prop:'service_type',
                  label:"业务类型"
                },
                { prop:'pact_count',
                  label:"后端服务费用"
                },
                { prop:'state',
                  label:"提成状态"
                },
                { prop:'percentage_prop',
                  label:"提成比例"
                },
                { prop:'percentage_price',
                  label:"提成金额"
                },
                { prop:'percentage_time',
                  label:"提成发放时间"
                }
              ],
              /*表格数据*/
              tableData:[{
                order_id: '01',
                contract_id: '2017-H-0004',
                pact_status: '已完成',
                partner:'增值资源中心事业部',
                line:'/',
                help:'/',
                pact_time:'2018-07-22',
                name:'周康',
                service_type:'税筹-自由业务-一次付款',
                pact_count:'20000',
                state:'已结算',
                percentage_prop:'20%',
                percentage_price:'2000',
                percentage_time:'2018-07-22'
              },
                {
                  order_id: '02',
                  contract_id: '2017-H-0004',
                  pact_status: '已撤单',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_time:'2018-07-22'
                },
                {
                  order_id: '03',
                  contract_id: '2017-H-0004',
                  pact_status: '已完成',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_time:'2018-07-22'
                },
                {
                  order_id: '04',
                  contract_id: '2017-H-0004',
                  pact_status: '已撤单',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_time:'2018-07-22'
                }
              ]
            },{
              label:'后端费用',
              name:'2',
              /*后端费用表格数据*/
              titles:[
                { prop:'order_id',
                  label:"序号"
                },
                { prop:'contract_id',
                  label:"公司合同编号"
                },
                { prop:'partner',
                  label:"合伙人"
                },
                { prop:'line',
                  label:"线索"
                },
                { prop:'help',
                  label:"协助成单"
                },
                { prop:'pact_time',
                  label:"合同签订日期"
                },
                { prop:'name',
                  label:"客户名称"
                },
                { prop:'service_type',
                  label:"业务类型"
                },
                { prop:'pact_count',
                  label:"合同总价款"
                },
                { prop:'state',
                  label:"提成状态"
                },
                { prop:'percentage_prop',
                  label:"提成比例"
                },
                { prop:'percentage_price',
                  label:"提成金额"
                },
                { prop:'percentage_count',
                  label:"提成总金额"
                },
                { prop:'percentage_time',
                  label:"提成发放时间"
                }
              ],
              /*表格数据*/
              tableData:[{
                order_id: '01',
                contract_id: '2017-H-0004',
                partner:'增值资源中心事业部',
                line:'/',
                help:'/',
                pact_time:'2018-07-22',
                name:'周康',
                service_type:'税筹-自由业务-一次付款',
                pact_count:'20000',
                state:'已结算',
                percentage_prop:'20%',
                percentage_price:'2000',
                percentage_count:'2800',
                percentage_time:'2018-07-22'
              },
                {
                  order_id: '02',
                  contract_id: '2017-H-0004',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_count:'2800',
                  percentage_time:'2018-07-22'
                },
                {
                  order_id: '03',
                  contract_id: '2017-H-0004',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_count:'2800',
                  percentage_time:'2018-07-22'
                },
                {
                  order_id: '04',
                  contract_id: '2017-H-0004',
                  partner:'增值资源中心事业部',
                  line:'/',
                  help:'/',
                  pact_time:'2018-07-22',
                  name:'周康',
                  service_type:'税筹-自由业务-一次付款',
                  pact_count:'20000',
                  state:'已结算',
                  percentage_prop:'20%',
                  percentage_price:'2000',
                  percentage_count:'2800',
                  percentage_time:'2018-07-22'
                }
              ]
            }]
          }
        }
    }
</script>

<style scoped>

</style>
