<template>
 <div id="main">
	<tableList :titles="titles" :tableData="tableData" operate="true" type="certificate"></tableList>
      <pagination></pagination>
	</div>
</template>

<script>
	import tableList from '../component/tableList'
	import pagination from'../component/pagination'
    export default {
        name: "certificate",
        components:{
    		pagination,
    		tableList,
    	},
    	data(){
    		return{
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
              },],
    		}
    	}
    }
</script>

<style scoped>

</style>
