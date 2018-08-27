<template>
 <div id="main">
      <searchTools :searchDatas="searchDatas" level="0"></searchTools>
      <tableList :titles="titles" :tableData="tableData" operate="true" type="certificate"></tableList>
      <pagination></pagination>
	</div>
</template>

<script>
	import tableList from '../component/tableList'
  import searchTools from'../component/searchTools'
	import pagination from'../component/pagination'
    export default {
        name: "certificate",
        components:{
    		pagination,
    		tableList,
        searchTools
    	},
    	data(){
    		return{
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
          }],
    			titles:[
              /*表头*/

              { prop:'id',
                label:"合同编号"
              },
              { prop:'name',
                label:"客户名称"
              },
              { prop:'sales',
                label:"销售"
              },
                { prop:'partner',
                label:"合伙人"
              },
              { prop:'clue',
                label:"线索"
              },
               { prop:'type',
                label:"业务类型"
              },
               { prop:'count',
                label:"凭证数量(已通过)"
              },
            ],
            /*表格数据*/
            tableData:[{
              id: '2017-H-0001',
              name: '北京百传中云信息科技有限公司',
              sales: '老刘',
              partner:'/',
              clue:'/',
              type:'筹税-自有业务-多次付款',
              count:'2',
              },{
              id: '2017-H-0001',
              name: '北京百传中云信息科技有限公司',
              sales: '老刘',
              partner:'/',
              clue:'/',
              type:'筹税-自有业务-多次付款',
              count:'2',
              },
              {
              id: '2017-H-0001',
              name: '北京百传中云信息科技有限公司',
              sales: '老刘',
              partner:'/',
              clue:'/',
              type:'筹税-自有业务-多次付款',
              count:'2',
              },
              {
              id: '2017-H-0001',
              name: '北京百传中云信息科技有限公司',
              sales: '老刘',
              partner:'/',
              clue:'/',
              type:'筹税-自有业务-多次付款',
              count:'2',
              },
              {
              id: '2017-H-0001',
              name: '北京百传中云信息科技有限公司',
              sales: '老刘',
              partner:'/',
              clue:'/',
              type:'筹税-自有业务-多次付款',
              count:'2',
              },]
    		}
    	}
    }
</script>

<style scoped>

</style>
