<template>
   <div id="main">
   	<searchTools :searchDatas="searchDatas" level="0" @search="searchCounts"></searchTools>
   	 <toolBtn :btns="btns" @submit="addCount"></toolBtn>
   	 <tableList :titles="titles" :tableData="tableData" operate="true" type="count_list" @refresh="refresh"></tableList>
     <pagination :listTotal="listTotal" @page="page" :paginationShow="paginationShow"></pagination>
   </div>
</template>

<script>
	import searchTools from'../component/searchTools'
	 import toolBtn from '../component/toolBtn'
	 import tableList from '../component/tableList'
   import pagination from '../component/pagination'
   let loginKey=undefined,name=undefined,role=undefined,area=undefined,createTime=undefined,state=undefined;
    export default {
        name: "count_list",
        components: {
          searchTools,
          toolBtn,
          tableList,
          pagination,
        },
        data(){
        	return{
             paginationShow:true,
          listTotal:0,
        		titles:[
              /*表头*/
              { prop:'id',
                label:"账号ID"
              },
              { prop:'name',
                label:"姓名"
              },
              { prop:'login',
                label:"账号"
              },
              { prop:'area',
                label:"区域"
              },
              { prop:'job',
                label:"职务"
              },
               { prop:'creator',
                label:"创建人"
              },
              { prop:'createtime',
                label:"创建时间"
              },
              { prop:'state',
                label:"状态"
              }
            ],

        		 searchDatas:[
              {
              item:'账号ID',
              content:'input',
              placeholder:'请输入关键字',
              value:''
            },{
              item:'账号',
              content:'input',
              placeholder:'请输入关键字',
              value:''
            },
            {
              item:'姓名',
              content:'input',
              placeholder:'请输入关键字',
              value:''
            },
        		 {
              item:'职务',
              content:'select',
              placeholder:'请选择',
              value:'',
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
              },
              {
                value: '6',
                label: '高管'
              },
              {
                value: '7',
                label: '业务会计'
              },
                {
                  value: '8',
                    label:'管理员'
                },
              {
                value: '9',
                label: '全部'
              }]
            },{
            	item:'区域',
              content:'select',
              placeholder:'请选择',
              value:'',
              option:[{
                value: '10',
                label: '柳州'
              },{
                value: '11',
                label: '贺州'
              }
              ,{
                value: '12',
                label: '全部'
              }]
            },{
              item:'创建时间',
              content:'datapicker',
              placeholder:'请选择',
              value:''
            },{
              item:'状态',
              content:'select',
              placeholder:'请选择',
              value:'',
              option:[{
                value: '13',
                label: '可用'
              },{
                value: '14',
                label: '停用'
              },{
                value: '15',
                label: '全部'
              }]
            }],
            btns:[{
                label:"添加账号",
                color:"danger",
                func:"submit"
            }],
            tableData:[]
        	}
        },

        methods:{
          getList(val,loginKey,name,role,area,createTime,state){
             if (state=="可用") {
                     state="true"
                 }
                 if (state=="停用") {
                     state="false"
                 }
                 if (val==undefined) {
                    val=1
                 }  
                 if (val!=undefined) {
                    this.tableData=[]
                 }             
                  if (state==undefined||state=="全部") {
                     state=" "
                 }
                  if (loginKey==undefined) {
                     loginKey=" "
                 }
                if (name==undefined) {
                     name=" "
                 }
                if (role==undefined||role=="全部") {
                     role=" "
                 }
                if (area==undefined||area=="全部") {
                     area=" "
                 }
                 if (createTime==undefined) {
                     createTime=" "
                 }
            const token = localStorage.getItem('token');
            let that=this;
            this.$axios.get(this.$baseURL+'/slb-accounts?area='+area+'&loginKey='+loginKey+'&nameKey='+name+'&role='+role+'&createDay='+createTime+'&activated='+state+'&pageSize=10&size=10&pageSize=10&size=10&sort=createTime,desc&page='+(val-1),{
               headers:{
                  "Authorization": "Bearer"+" "+token
               }

            })
            .then(function(ret){

              that.changeRole(ret.data.role)
              that.listTotal = parseInt(ret.headers['x-total-count']);
              let data=ret.data;
              data.forEach(function(value,index,array){
                    let state;
                if (value.user.activated==true) {
                  state="可用"
                }
                else if (value.user.activated==false) {
                  state="停用"
                }
                let date=new Date((value.createTime).split(".")[0]);
                value.createTime=that.changeDate(date);
              that.tableData.push({
              id:value.id,
              name:value.name,
              login:value.user.login,
              area:that.changeArea(value.area),
              job:that.changeRole(value.role),
              createtime:value.createTime,
              state:state
                    })
              })

            })
             .catch(function(err){
              console.log(err)
            })
           },
             searchCounts(inputValue,selectValue){
               const token = localStorage.getItem('token');
                let that=this;
                 loginKey=inputValue[1];
                 name=inputValue[2];
                 role=selectValue[3];
                 area=selectValue[4];
                 createTime=selectValue[5];
                 state=selectValue[6];
                this.paginationShow = false;
            this.$nextTick(function () {
              this.tableData=[];
              this.getList(undefined,loginKey,name,role,area,createTime,state);
              this.paginationShow = true;
            })
                
             },
             addCount(){
                this.$router.push({path: '/add_count'});
             },
             page(val){
                  this.tableData=[];
                 this.getList(val,loginKey,name,role,area,createTime,state)
             },
             open(){
             this.$router.push({path: '/add_count'});
             },
             refresh(){
              console.log(111)
            //策略进行DOM的更新，表格以及分页刷新
            this.paginationShow = false;
            this.$nextTick(function () {
              this.getList(1);
              this.paginationShow = true;
            })
          },
        },
        created:function(){
               this.getList()
        }
    }
</script>

<style scoped>

</style>
