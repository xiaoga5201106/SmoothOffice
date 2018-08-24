<template>
	<div id="main">
	<searchTools :searchDatas="searchDatas" level="0"></searchTools>
	<tableList :titles="titles" :tableData="tableData" operate="true" type="standing_book"></tableList>
      <pagination></pagination>
	</div>
      
</template>

<script>
	import tableList from '../component/tableList'
	import pagination from'../component/pagination'
	import searchTools from'../component/searchTools'
    import toolBtn from '../component/toolBtn'
    export default {
    	components:{
    		pagination,
    		tableList,
    		searchTools,
             toolBtn
    	},
        name: "standing_book",
        data(){
        	 return{
        	 	 titles:[
              /*表头*/
              { prop:'number',
                label:"序号"
              },
              { prop:'id',
                label:"公司合同编号"
              },
              { prop:'service_type',
                label:"业务类型"
              },
              { prop:'signData',
                label:"合同签订日期"
              },
              { prop:'project',
                label:"标的/项目"
              },
              { prop:'newName',
                label:"客户新公司名称"
              },
              { prop:'party',
                label:"合同当事人"
              },
              { prop:'sales',
                label:"落地对接销售"
              },
              { prop:'clue',
                label:"线索"
              },
              { prop:'price',
                label:"合同总价格"
              },
              { prop:'backPrice',
                label:"后端费用"
              },
               { prop:'paier',
                label:"付款单位"
              },
               { prop:'payData',
                label:"付款日期"
              },
               { prop:'state',
                label:"业务办理状态 "
              },
            ],
            /*表格数据*/
            tableData:[{
              number: '01',
              id: '2017-H-0001',
              service_type: '税筹-转包业务流程-自签业务',
              signData:'2017-8.15',
              project:'筹税',
              newName:'贺州百传股权投资合伙企业(有限合伙)',
              party:'甲方：北京百传中云信息科技有限公司 乙方：广西神州易桥企业管理有限公司',
              sales:'陈诚',
              clue:'/',
              price:'20000',
              backPrice:'节税额18%',
              paier:'北京百传中云信息科技有限公司',
              payData:'2017.8.15',
              state:'已经办理基本业务'
              }, {
                  number: '02',
              id: '2017-H-00012',
              service_type: '税筹-自有业务-一次性付款',
              signData:'2017-9.18',
              project:'筹税',
              newName:'贺州德雅股权投资合伙企业(有限合伙)',
              party:'甲方：周康 乙方：广西神州易桥企业管理有限公司',
              sales:'肖婕',
              clue:'华总',
              price:'20000',
              backPrice:'节税额20%',
              paier:'北京中联利信科技有限公司',
              payData:'2017.10.30',
              state:'已经完成工商注册'
              }],

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
              item:'合同编号',
              content:'input',
              placeholder:'请输入合同编号'
            },],
            /*功能按钮组*/
        	 }
        }
    }
</script>

<style scoped>

</style>
