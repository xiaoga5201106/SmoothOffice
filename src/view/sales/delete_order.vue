<template>
	<div id="main">
	  <searchTools :searchDatas="searchDatas" level="0" @search="search"></searchTools>
    <tableList :titles="titles" :tableData="tableData" operate="true" type="delete_order" @open="open"></tableList>
    <dialogbox :dialogVisible="show" :datas="datas" @close="show=false" :flag="flag"></dialogbox>
    <pagination :listTotal="listTotal" @page="page" :paginationShow="paginationShow"></pagination>
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
            paginationShow:true,
            listTotal:0,
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
            tableData:[],
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
                label: '自有业务'
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
            },
              {
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
    methods:{
      open(index,flag){
              this.show = true;
              this.index = index;
              this.flag = flag;
              //获取当前点击行里的内容a
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
            },
          //翻页
          page(val) {
            this.getList(val);
          },
          //搜索
          search(inputValue,selectValue){
            let type1=selectValue[0];
            let type2=selectValue[1];
            let type3=selectValue[2];
            let order_id=inputValue[3];
            let customerName=inputValue[4];
            //策略进行DOM的更新，表格以及分页刷新
            this.paginationShow = false;
            this.$nextTick(function () {
              this.getList(undefined,type1,type2,type3,order_id,customerName);
              this.paginationShow = true;
            })
          },
          refresh(){
            //策略进行DOM的更新，表格以及分页刷新
            this.paginationShow = false;
            this.$nextTick(function () {
              this.getList(1);
              this.paginationShow = true;
            })
          },
      getList(val,type1,type2,type3,order_id,customerName) {
        //获取订单列表
        let that = this;
        if (val == undefined) {
          val = 1;
        }
        if(val!=undefined){
          that.tableData = [];
        }
        if(type1==undefined){
          type1="";
        }
        if(type2==undefined){
          type2="";
        }
        if(type3==undefined){
          type3="";
        }
        if(order_id==undefined){
          order_id="";
        }
        if(customerName==undefined){
          customerName="";
        }
        //拿到token
        const token = localStorage.getItem('token');
        this.$axios.get(this.$baseURL+'/slb-orders?code='+order_id+'&isCancel=true&sort=createTime,desc&page=' + (val - 1) + '&pageSize=10&size=10&type1='+type1+'&type2='+type2+'&type3='+type3+'&customerName='+customerName, {
          headers: {
            "Authorization": "Bearer" + " " + token
          }
        })
          .then(function (res) {
            that.listTotal = parseInt(res.headers['x-total-count']);
            res.data.forEach(function (value, index, array) {
              that.tableData.push({
                id: value.code,
                name: value.customerName,
                type:value.type1 + '-' + value.type2 + '-' + value.type3,
                partner:value.partnerName,
                clue:value.clue,
                deleteData:value.cancelTime
              });
            });
          }).catch(function (err) {

        });
      }
    },
    created(){
      this.getList();
    }
}
</script>

<style scoped>

</style>
