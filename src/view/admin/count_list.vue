<template>
   <div id="main">
   	<searchTools :searchDatas="searchDatas" level="0"></searchTools>
   	 <toolBtn :btns="btns"></toolBtn>
   	 <tableList :titles="titles" :tableData="tableData" operate="false" @open="open" type="order_list"></tableList>
   </div>
</template>

<script>
	import searchTools from'../component/searchTools'
	 import toolBtn from '../component/toolBtn'
	 import tableList from '../component/tableList'
    export default {
        name: "count_list",
        components: {
          searchTools,
          toolBtn,
          tableList
        },
        data(){
        	return{
        		titles:[
              /*表头*/
              { prop:'id',
                label:"账号ID"
              },
              { prop:'name',
                label:"姓名"
              },
              { prop:'count',
                label:"账号"
              },
              { prop:'job',
                label:"职务"
              },
              { prop:'area',
                label:"区域"
              },
              { prop:'creater',
                label:"创建人"
              },
              { prop:'createtime',
                label:"创建时间"
              },
              { prop:'state',
                label:"状态"
              }

            ],
            /*表格数据*/
            tableData:[{
              id: '01',
              name: '张三',
              count: '10086',
              job:'销售',
              area:'/',
              creater:'拉拉',
              createtime:'2018-08-13',
              state:'可用'
              }, {
                  id: '02',
              name: '张三',
              count: '10086',
              job:'销售',
              area:'/',
              creater:'拉拉',
              createtime:'2018-08-13',
              state:'可用'
              }, {
                 id: '03',
              name: '张三',
              count: '10086',
              job:'销售',
              area:'/',
              creater:'拉拉',
              createtime:'2018-08-13',
              state:'可用'
              }],
        		 searchDatas:[
              {
              item:'账号ID',
              content:'input',
              placeholder:'请输入关键字'
            },{
              item:'账号',
              content:'input',
              placeholder:'请输入关键字'
            },
            {
              item:'姓名',
              content:'input',
              placeholder:'请输入关键字'
            },
        		 {
              item:'职务',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '1',
                label: '销售'
              },{
                value: '2',
                label: '内务'
              },{
                value: '3',
                label: '审核'
              },{
                value: '4',
                label: '财务'
              },{
                value: '5',
                label: '外勤'
              }]
            },{
            	item:'区域',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '6',
                label: '柳州'
              },{
                value: '7',
                label: '贺州'
              }]
            },{
              item:'创建时间',
              content:'datapicker',
              placeholder:'请选择',
            },{
              item:'状态',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '8',
                label: '可用'
              },{
                value: '9',
                label: '停用'
              }]
            }],
            btns:[{
                label:"添加账号",
                color:"danger",
                func:""
            }]
        	}
        }
    }
</script>

<style scoped>

</style>
