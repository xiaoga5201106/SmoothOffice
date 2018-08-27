<template>
	<div id="main">
	<searchTools :searchDatas="searchDatas" level="0"></searchTools>
	<tableList :titles="titles" :tableData="tableData" operate="true" type="delete_order" @open="open"></tableList>
  <dialogbox :dialogVisible="show" :datas="datas" @close="show=false" :flag="flag"></dialogbox>
      <pagination></pagination>
	</div>
</template>

<script>
		import tableList from '../component/tableList'
	import pagination from'../component/pagination'
	import searchTools from'../component/searchTools'
  import dialogbox from'../component/dialog'
    export default {
        name: "delete_order",
        components:{
    		pagination,
    		tableList,
    		searchTools,
        dialogbox
    	},
    	data(){
    		return{
             show:false,
            index:0,
            datas:"",
            flag:"",
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
    },
    methods:{
      open(index,flag){
              this.show = true;
              this.index = index;
              this.flag = flag;
              //获取当前点击行里的内容
              let data = this.getJsonById(this.index,this.tableData);
              let label = [];
              let data1 = [];
              let dataIndex = 0;
              let dataStr = "";
             console.log(data);
              /*
               *要用for in 这种方法  json对象不支持使用变量键名获取value值 即.号后面不能是key值以外的其他值 否则报未定义
               *  i 为键值 data[i]为value值
               * 下面两个循环是为了重新构造显示出来的json数组 类型如下[{"name":"订单编号"，"data":"order_id"}]
               */
              for(let i in data){
                   data1[dataIndex] = data[i];
                   label[dataIndex] = this.titles[dataIndex].label;
                   dataIndex++;
              }
              dataStr = "[";
              for(let i = 0; i < dataIndex; i++){
                dataStr += "{\"name\":\"" + label[i] + "\",\"data\":\"" + data1[i] + "\"}";
                if(i != dataIndex-1){
                  dataStr += ",";
                }
               }
              dataStr += "]";
              //一定要将这个数组转换为JSON对象，不然传到模态框内会出错
              this.datas = JSON.parse(dataStr);

            },
            //通过表单组件返回的id来获取内容
            getJsonById(id,json){
              
              for(let i = 0;i < json.length; i++){
                if(json[i].id == id){
                  return json[i];
                  break;
                }
                 
              }
            }
    }
}
</script>

<style scoped>

</style>
