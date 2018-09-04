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
                prop:"role",
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
                  prop:"area",
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
                  prop:"loginKey",
               	title:'账号',
               	value:''
              },
                  {
                 key:'1',
                  prop:"name",
               	title:'姓名',
               	value:'',

               },
                   {
                 key:'2',
                  prop:"sex",
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
                 prop:'age',
               	title:'年龄',
                value:'',
               },
                    {
                 key:'2',
                  prop:"xueLi",
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
                  prop:"passWord",
               	title:'密码',
                value:''
               },
                    {
                 key:'1',
                  prop:"rePassWord",
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
              let str=/(18|19)|([2-5]\d)|(6[0-5])/;
            for (var i = 0; i < labels.length; i++) {
                         data[i]=labels[i].value
            }
            if (data[0]=="销售") {
              data[0]="ROLE_XIAO_SHOU"
            }
             if (data[0]=="内务") {
              data[0]="ROLE_NEI_WU"
            }
             if (data[0]=="审核") {
              data[0]="ROLE_SHEN_HE"
            }
             if (data[0]=="财务") {
              data[0]="ROLE_XIAO_SHOU"
            }
             if (data[0]=="外勤") {
              data[0]="ROLE_WAI_QING"
            }
               if (data[2]=="") {
                    that.$message.error("账号不能为空！")
               }
                else if (!str.test(data[5])) {
                    that.$message.error("年龄必须在18-65岁之间!")
               }
               else if(data[7].length<6){
                that.$message.error("密码必须大于6位！")
               }
                else if(data[8]!=data[7]){
                that.$message.error("两次密码不同！")
               }
               else{
                    this.$axios.post(this.$baseURL+'/event/create-slbAccount',{
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
                   that.$message.error("创建失败") 
            })
               }
           


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
