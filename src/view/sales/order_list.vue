<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0"></searchTools>
    <toolBtn :btns="btns"></toolBtn>
    <tableList :titles="titles" :tableData="tableData" operate="true" @open="open" type="order_list"></tableList>

    <dialogbox :dialogVisible="show" :datas="datas" @close="show=false" :flag="flag"></dialogbox>

    <pagination></pagination>
  </div>
</template>

<script>
    import tableList from '../component/tableList'
    import dialogbox from'../component/dialog'
    import pagination from'../component/pagination'
    import searchTools from'../component/searchTools'
    import toolBtn from '../component/toolBtn'
    export default {
        name: "order_list",
        components: {
          tableList,
          dialogbox,
          pagination,
          searchTools,
          toolBtn
        },
        data () {
          return{
            show:false,
            index:0,
            datas:"",
            flag:"",
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
            tableData:[],
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
              item:'区域',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '12',
                label: '柳州'
              },{
                value: '13',
                label: '贺州'
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
            /*功能按钮组*/
            btns:[{
                label:"新建订单",
                color:"danger",
                func:""
            }]
          }
        },

        methods:{
          //返回点击的index值
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
                if(json[i].order_id == id){
                  return json[i];
                  break;
                }
              }
            }
        },
        created:function () {
        //获取订单列表
          let that=this;
          //拿到token
          const token = localStorage.getItem('token');
          this.$axios.get('/api/xiao-shou/slb-orders?isCancel=false&page=0&pageSize=10&size=10',{
            headers: {
              "Authorization": "Bearer"+" "+token
            }
          })
            .then(function(res){
              console.log(res)
                res.data.forEach(function(value,index,array){
                  let order_status,pact_status;
                  if(value.submitStates==1){
                    order_status='待提交'
                  }
                  if(value.submitStates==2){
                    order_status='已提交'
                  }
                  if(value.contractStates==1){
                    pact_status='待签订'
                  }
                  if(value.contractStates==2){
                    pact_status='正办理'
                  }
                  if(value.contractStates==3){
                    pact_status='已完成'
                  }
                  if(value.contractStates==4){
                    pact_status='已撤单'
                  }
                  that.tableData.push({
                    order_id:value.id,
                    name: value.customerName,
                    service_type: value.type1+'-'+value.type2+'-'+value.type3,
                    partner:value.partnerName ,
                    line:value.clue,
                    area:value.area,
                    add_time:value.createTime,
                    edit_time:value.submitTime,
                    order_status:order_status,
                    pact_status:pact_status ,
                    progress:value.currentProgress
                  });
              })
            })
            .catch(function(err){

            });
      }
    }
</script>

<style scoped>
</style>
