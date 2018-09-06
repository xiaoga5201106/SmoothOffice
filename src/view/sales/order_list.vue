<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0" @search="search"></searchTools>
    <toolBtn :btns="btns"></toolBtn>
    <tableList :titles="titles" :tableData="tableData" operate="true" @open="open" @refresh="refresh" type="order_list"></tableList>

    <dialogbox :dialogVisible="show" :datas="datas" @close="show=false" :flag="flag" :id="id"></dialogbox>

    <pagination :listTotal="listTotal" @page="page" :paginationShow="paginationShow"></pagination>
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
            id:0,
            datas:"",
            flag:"",
            paginationShow:true,
            listTotal:0,
            titles:[
              /*表头*/
              { prop:'order_id',
                label:"订单编号"
              },
              { prop:'id',
                label:"id"
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
              }
              ,]
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
            },{
              item:'区域',
              content:'select',
              placeholder:'请选择',
              option:[{
                value: '15',
                label: '柳州'
              },{
                value: '16',
                label: '贺州'
              },{
                value: '17',
                label: '全部'
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
                func:"routeGo",
                path:"/add_order"
            }]
          }
        },

        methods: {
          //返回点击的index值
          open(id, flag) {
            this.show = true;
            this.id = id;
            this.flag = flag;
            //获取当前点击行里的内容
            let data = this.getJsonById(this.id, this.tableData);
            let label = [];
            let data1 = [];
            let dataIndex = 0;
            let dataStr = "";
            /*
               *要用for in 这种方法  json对象不支持使用变量键名获取value值 即.号后面不能是key值以外的其他值 否则报未定义
               *  i 为键值 data[i]为value值
               * 下面两个循环是为了重新构造显示出来的json数组 类型如下[{"name":"订单编号"，"data":"order_id"}]
               */
            for (let i in data) {

              if(data[i] === null){
                data1[dataIndex] = '';
              }
              else{
              data1[dataIndex] = data[i];
              }
              label[dataIndex] = this.titles[dataIndex].label;
              dataIndex++;

            }
            dataStr = "[";
            for (let i = 0; i < dataIndex; i++) {
              dataStr += "{\"name\":\"" + label[i] + "\",\"data\":\"" + data1[i] + "\"}";
              if (i != dataIndex - 1) {
                dataStr += ",";
              }
            }
            dataStr += "]";
            //一定要将这个数组转换为JSON对象，不然传到模态框内会出错
            this.datas = JSON.parse(dataStr);

          },
          //通过表单组件返回的id来获取内容
          getJsonById(id, json) {
            for (let i = 0; i < json.length; i++) {
              if (json[i].id == id) {
                return json[i];
                break;
              }
            }
          },
          //翻页
          page(val) {
            this.getList(val);
          },
          refresh(){
            //策略进行DOM的更新，表格以及分页刷新
            this.paginationShow = false;
            this.$nextTick(function () {
              this.getList(1);
              this.paginationShow = true;
            })
          },
          //搜索
          search(inputValue,selectValue){
            let type1=selectValue[0];
            let type2=selectValue[1];
            let type3=selectValue[2];
            let area=selectValue[3];
            let order_id=inputValue[4];
            let customerName=inputValue[5];
            //策略进行DOM的更新，表格以及分页刷新
            this.paginationShow = false;
            this.$nextTick(function () {
              this.getList(undefined,type1,type2,type3,area,order_id,customerName);
              this.paginationShow = true;
            })
          },
          getList(val,type1,type2,type3,area,order_id,customerName) {
            //获取订单列表
            let that = this;
            if (val == undefined) {
              val = 1;
            }
            if(val!=undefined){
              that.tableData = [];
            }
            if(type1==undefined||type1=="全部"){
              type1="";
            }
            if(type2==undefined||type2=="全部"){
              type2="";
            }
            if(type3==undefined||type3=="全部"){
              type3="";
            }
            if(area==undefined||area=="全部"){
              area="";
            }
            if(order_id==undefined){
              order_id="";
            }
            if(customerName==undefined){
              customerName="";
            }
            //拿到token
            const token = localStorage.getItem('token');
            this.$axios.get(this.$baseURL+'/slb-orders?code='+order_id+'&isCancel=false&sort=createTime,desc&page=' + (val - 1) + '&pageSize=10&size=10&type1='+type1+'&type2='+type2+'&type3='+type3+'&area='+area+'&customerName='+customerName, {
              headers: {
                "Authorization": "Bearer" + " " + token
              }
            })
              .then(function (res) {
             if(res.data==""){
                      that.$message.error("暂无此信息！")
                    }
                    console.log(res.data);
                that.listTotal = parseInt(res.headers['x-total-count']);
                res.data.forEach(function (value, index, array) {
                  let order_status, pact_status;
                  if (value.submitStates == 1) {
                    order_status = '待提交'
                  }
                  if (value.submitStates == 2) {
                    order_status = '已提交'
                  }
                  if (value.contractStates == 1) {
                    pact_status = '待签订'
                  }
                  if (value.contractStates == 2) {
                    pact_status = '正办理'
                  }
                  if (value.contractStates == 3) {
                    pact_status = '已完成'
                  }
                  if (value.contractStates == 4) {
                    pact_status = '已撤单'
                  }
                  that.tableData.push({
                    order_id: value.code,
                    id:value.id,
                    name: value.customerName,
                    service_type: value.type1 + '-' + value.type2 + '-' + value.type3,
                    partner: value.partnerName,
                    line: value.clue,
                    area: value.area,
                    add_time: value.submitTime,
                    edit_time: value.createTime,
                    order_status: order_status,
                    pact_status: pact_status,
                    progress: value.currentProgress
                  });
                });
              }).catch(function (err) {

            });
          },
        },
        created:function () {
          this.getList();
      }
    }
</script>

<style scoped>
</style>
