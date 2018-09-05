<template>
   <div id="main">
   	<searchTools :searchDatas="searchDatas" level="0" @search="searchCounts"></searchTools>
   	 <toolBtn :btns="btns" @submit="addCount"></toolBtn>
   	 <tableList :titles="titles" :tableData="tableData" operate="true" type="count_list"></tableList>
     <pagination :listTotal="listTotal" @page="page" :paginationShow="paginationShow"></pagination>
   </div>
</template>

<script>
	import searchTools from'../component/searchTools'
	 import toolBtn from '../component/toolBtn'
	 import tableList from '../component/tableList'
   import pagination from '../component/pagination'
    export default {
        name: "count_list",
        components: {
          searchTools,
          toolBtn,
          tableList,
          pagination
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
              { prop:'sex',
                label:"性别"
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
                label: '全部'
              }]
            },{
            	item:'区域',
              content:'select',
              placeholder:'请选择',
              value:'',
              option:[{
                value: '9',
                label: '柳州'
              },{
                value: '10',
                label: '贺州'
              }
              ,{
                value: '11',
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
                func:"submit"
            }],
            tableData:[]
        	}
        },

        methods:{
             searchCounts(inputValue,selectValue){
               const token = localStorage.getItem('token');
                let that=this;
                let loginKey=inputValue[1];
                let name=inputValue[2];
                let role=selectValue[3];
                let area=selectValue[4];
                let createTime=selectValue[5];
                let state=selectValue[6];
                 if (state=="可用") {
                     state="true"
                 }
                 if (state=="停用") {
                     state="false"
                 }
                  if (state==undefined) {
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

                this.$axios.get(this.$baseURL+'/slb-accounts?area='+area+'&loginKey='+loginKey+'&nameKey='+name+'&role='+role+'&createDay='+createTime+'&activated='+state+'&pageSize=10&size=10',{
                       headers:{
                           "Authorization": "Bearer"+" "+token
                        }
                })
                .then(function(ret){
                  that.listTotal = parseInt(ret.headers['x-total-count']);
              let data1=ret.data;
               if(ret.data==""){
                      that.$message.error("暂无此信息！")
                    }
              that.tableData=[];
              data1.forEach(function(value,index,array){
                  let state;
                if (value.user.activated==true) {
                  state="可用"
                }
                else if (value.user.activated==false) {
                  state="停用"
                }
              that.tableData.push({
              id:value.id,
              name:value.name,
              sex:that.changeSex(value.sex),
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
             addCount(){
                this.$router.push({path: '/add_count'});
             },
             page(val){
              const token = localStorage.getItem('token');
            let that=this;
            this.$axios.get(this.$baseURL+'/slb-accounts?pageSize=10&size=10&page='+(val-1),{
               headers:{
                  "Authorization": "Bearer"+" "+token
               }

            })
            .then(function(ret){
              that.listTotal = parseInt(ret.headers['x-total-count']);
              let data=ret.data;
              that.tableData=[];
              data.forEach(function(value,index,array){
                let state;
                if (value.user.activated==true) {
                  state="可用"
                }
                else if (value.user.activated==false) {
                  state="停用"
                }
              that.tableData.push({
              id:value.id,
              name:value.name,
              sex:that.changeSex(value.sex),
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
             open(){
             this.$router.push({path: '/add_count'});
             }
        },
        created:function(){
             const token = localStorage.getItem('token');
            let that=this;
            this.$axios.get(this.$baseURL+'/slb-accounts?pageSize=10&size=10',{
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
              that.tableData.push({
              id:value.id,
              name:value.name,
              sex:that.changeSex(value.sex),
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
        }
    }
</script>

<style scoped>

</style>
