<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas"></searchTools>

    <tableList :titles="titles" :tableData="tableData" operate="true" @open="open"></tableList>

    <dialogbox :dialogVisible="show" :datas="datas" @close="show=false" ></dialogbox>

    <pagination></pagination>
  </div>
</template>

<script>
    import tableList from '../component/tableList'
    import dialogbox from'../component/dialog'
    import pagination from'../component/pagination'
    import searchTools from'../component/searchTools'
    export default {
        name: "order_list",
        components: {
          tableList,
          dialogbox,
          pagination,
          searchTools
        },
        data () {
          return{
            show:false,
            index:0,
            datas:"",
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
              order_status:'已提交',
              pact_status:'正办理',
              progress:'未签合同'
              }, {
                order_id: '02',
                name: '王小虎',
                service_type: '税筹-自有业务-一次性付款',
                partner:'xx有限公司',
                line:'/',
                area:'贵港',
                add_time:'2018-08-13',
                edit_time:'2018-08-13',
                order_status:'待提交',
                pact_status:'待签订',
                progress:'未签合同'
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
                pact_status:'已撤单',
                progress:'未签合同'
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
                pact_status:'已完成',
                progress:'未签合同'
              }],
            /*搜索表单数据*/
            searchDatas:[{
              item:'区域',
              content:'select'
            },{
              item:'订单编号',
              content:'input'
            },{
              item:'客户名称',
              content:'input'
            }]
          }
        },

        methods:{
          //返回点击的index值
            open(index){
              this.show = true;
              this.index = index;
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
                if(json[i].order_id == id){
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
