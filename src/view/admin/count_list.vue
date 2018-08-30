<template>
   <div id="main">
   	<searchTools :searchDatas="searchDatas" level="0" @searchCounts="searchCounts(searchDatas)"></searchTools>
   	 <toolBtn :btns="btns" @submit="addCount"></toolBtn>
   	 <tableList :titles="titles" :tableData="tableData" operate="false" type="order_list"></tableList>
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
              { prop:'sex',
                label:"性别"
              },
              { prop:'area',
                label:"区域"
              },
              { prop:'job',
                label:"职务"
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
              }]
            },{
            	item:'区域',
              content:'select',
              placeholder:'请选择',
              value:'',
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
                func:""
            }],
            tableData:[]
        	}
        },

        methods:{
             searchCounts(searchDatas){
               const token = localStorage.getItem('token');
                let that=this;
                let data=[];
                for (var i = 0; i < searchDatas.length; i++) {
                     data[i]=searchDatas[i].value
                }
                 if (data[6]=="可用") {
                     data[6]="true"
                 }
                   else if (data[6]=="停用") {
                     data[6]="false"
                 }
                this.$axios.get('/api/slb-accounts?area='+data[4]+'&loginKey='+data[1]+'&nameKey='+data[2]+'&role='+data[3]+'&createDay='+data[5]+'&activated='+data[6],{
                       headers:{
                           "Authorization": "Bearer"+" "+token
                        }
                })
                .then(function(ret){
              let data1=ret.data;
              that.tableData=[];
              data1.forEach(function(value,index,array){
              that.tableData.push({
              id:value.id,
              name:value.name,
              sex:value.sex,
              area:value.area,
              job:value.role,
              createtime:value.createTime,
              state:''
                    })
              })
                })
                 .catch(function(err){
                         console.log(err)
                })
                

             },
             addCount(){
                this.$router.push({path: '/add_count'});
             }
        },
        created:function(){
             const token = localStorage.getItem('token');
            let that=this;
            this.$axios.get('/api/slb-accounts',{
               headers:{
                  "Authorization": "Bearer"+" "+token
               }

            })
            .then(function(ret){
              let data=ret.data;
              data.forEach(function(value,index,array){
              that.tableData.push({
              id:value.id,
              name:value.name,
              sex:value.sex,
              area:value.area,
              job:value.role,
              createtime:value.createTime,
              state:''
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
