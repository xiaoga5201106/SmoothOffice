<template>
	<div id="main">
		<formBox :labels="labels"></formBox>
		<formButton state4="提交"></formButton>
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
               	value:'',
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
                 key:'2',
               	title:'年龄',
                value:'',
                items:[
                  {
                  	item:'18-65'
                  }
                ]
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
        }
    }
</script>

<style scoped>
   #main{
   	background: #fff;
   padding: 0 300px 20px;
   }
</style>
