<template>
	<div id="main">
		<formBox :labels="labels" flag="newOrder"></formBox>
		<formButton state4="提交" @submit="submit(labels)" ></formButton>
	</div>
     
</template>

<script>
	import formBox from '../component/formBox'
	import formButton from '../component/formButton'
    export default {
        name: "add_count",
        components:{
        	formBox,
        	formButton
        },
        data(){
        	return{
             labels:[
               {
               	key:'2',
               	title:'职务',
               	value:'',
               	items:[
               	{
               	    item:'销售'	
               	},
               		{
               	    item:'内务'	
               	},	
               			{
               	    item:'审核'	
               	},	  
               				{
               	    item:'财务'	
               	},	
               				{
               	    item:'外勤'	
               	},	
               	]
               },
                 {
                 key:'2',
               	title:'所属区域',
               	value:'',
               	items:[
               	{
               	    item:'柳州'	
               	},
               		{
               	    item:'贺州'	
               	},	
      
               	]
               },
                  {
                 key:'1',
               	title:'账号',
               	value:''             
              },
                  {
                 key:'1',
               	title:'姓名',
               	value:'',
          
               },
                   {
                 key:'2',
               	title:'性别',
                value:'',
                items:[
                   {
                   	item:'男'
                   },
                    {
                   	item:'女'
                   }
                ]

               },
                   {
                 key:'1',
               	title:'年龄',
                value:'',
               },
                    {
                 key:'2',
               	title:'学历',
                value:'',
                items:[
                    {
                    	item:'小学'
                    },
                     {
                    	item:'初中'
                    },
                     {
                    	item:'高中'
                    },
                     {
                    	item:'大学'
                    },
                     {
                    	item:'研究生'
                    },
                     {
                    	item:'博士'
                    },
                ]
               },
                    {
                 key:'1',
               	title:'密码',
                value:''
               },
                    {
                 key:'1',
               	title:'确认密码',
                value:''
               },
          ],
        	}
        },
        methods:{
             submit(labels){
              const token = localStorage.getItem('token');
              let that=this;
              let data=[];
            for (var i = 0; i < labels.length; i++) {
                         data[i]=labels[i].value           
            }
               this.$axios.post('/api/event/create-slbAccount',{
                age:data[5],
                area:data[1],
                login:data[2],
                name:data[3],
                passWord:data[7],
                rePassWord:data[8],
                role:data[0],
                sex:data[4],
                xueLi:data[6],
              
              },
              {
                headers:{
                  "Authorization": "Bearer"+" "+token
                }
              })
            
            .then(function(ret){
                 that.$message({
                  message:"创建成功",
                  type:'success'
                 })
            })
              .catch(function(err){
                 that.$message.error("创建失败！")
            })
              
             
             }
        }
    }
</script>

<style scoped>
   #main{
   	background: #fff;
   padding: 0 300px 20px;
   }
</style>
