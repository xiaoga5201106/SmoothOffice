<template>
	<div id="main">
	<searchTools :searchDatas="searchDatas" level="0"></searchTools>
	<tableList :titles="titles" :tableData="tableData" operate="true" type="delete_order"></tableList>
      <pagination></pagination>
	</div>
</template>

<script>
		import tableList from '../component/tableList'
	import pagination from'../component/pagination'
	import searchTools from'../component/searchTools'
    export default {
        name: "delete_order",
        components:{
    		pagination,
    		tableList,
    		searchTools
    	},
    	data(){
    		return{
titles:[
              /*表头*/
           
              { prop:'id',
                label:"订单编号"
              },
              { prop:'name',
                label:"客户名称"
              }, 
              { prop:'type',
                label:"业务类型"
              },
             
                { prop:'partner',
                label:"合伙人"
              },
              { prop:'clue',
                label:"线索"
              },
              
               { prop:'deleteData',
                label:"作废时间"
              },
            ],
            /*表格数据*/
            tableData:[{
              id: '01',
              name: '北京百传中云信息科技有限公司',
              type:'筹税-自有业务-多次付款',
              partner:'广西XX有限公司',
              clue:'/',              
              deleteData:'2018.7.20 10:41:57',
              },{
                 id: '02',
              name: '北京百传中云信息科技有限公司',
              type:'筹税-自有业务-多次付款',
              partner:'广西XX有限公司',
              clue:'/',              
              deleteData:'2018.7.20 10:41:57',
              },
              {
                 id: '03',
              name: '北京百传中云信息科技有限公司',
              type:'筹税-自有业务-多次付款',
              partner:'广西XX有限公司',
              clue:'/',              
              deleteData:'2018.7.20 10:41:57',
              },
              {
                 id: '04',
              name: '北京百传中云信息科技有限公司',
              type:'筹税-自有业务-多次付款',
              partner:'广西XX有限公司',
              clue:'/',              
              deleteData:'2018.7.20 10:41:57',
              },
              {
                 id: '05',
              name: '北京百传中云信息科技有限公司',
              type:'筹税-自有业务-多次付款',
              partner:'广西XX有限公司',
              clue:'/',              
              deleteData:'2018.7.20 10:41:57',
              },],
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
            },
            {
              item:'订单编号',
              content:'input',
              placeholder:'请输入订单编号'
            },{
              item:'客户名称',
              content:'input',
              placeholder:'请输入客户名称'
            }],
    		}
    }
}
</script>

<style scoped>

</style>
