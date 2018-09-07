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
                placeholder:'请选择',
                msg:'*必填',
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
                        {
                    item:'业务会计'
                },
                        {
                    item:'高管'
                },
                        {
                    item:'管理员'
                },
               	]
               },
                 {
                 key:'2',
                  prop:"area",
               	title:'所属区域',
               	value:'',
                placeholder:'请选择',
                msg:'*必填',
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
                placeholder:'建议输入手机号作为账号',
                msg:'*必填',
               	value:''
              },
                  {
                 key:'1',
                  prop:"name",
               	title:'姓名',
                placeholder:'请输入姓名',
                msg:'*必填',
               	value:'',

               },
                   {
                 key:'2',
                  prop:"sex",
               	title:'性别',
                placeholder:'请选择',
                msg:'　　',
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
                placeholder:'请输入年龄(18~65岁)',
                msg:'　　',
                value:'',
               },
                    {
                 key:'2',
                  prop:"xueLi",
               	title:'学历',
                placeholder:'请选择',
                msg:'　　',
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
                placeholder:'请输入6~20位英文、数字密码',
                msg:'*必填',
                maxlength:"20",
                value:''
               },
                    {
                 key:'1',
                  prop:"rePassWord",
                  placeholder:'请再次输入密码',
                  msg:'*必填',
               	title:'确认密码',
                maxlength:"20",
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
              if (data[0]=="业务会计") {
              data[0]="ROLE_YE_WU_KUAI_JI_QING"
            }
              if (data[0]=="高管") {
              data[0]="ROLE_GAO_GUAN"
            }
              if (data[0]=="") {
                    that.$message.error("请选择职务！")
               }
               else if (data[1]=="") {
                    that.$message.error("请选择区域！")
               }
               else if (data[2]=="") {
                    that.$message.error("账号不能为空！")
               }
               else if (data[3]=="") {
                    that.$message.error("姓名不能为空！")
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
                 });
                 that.$router.push({path: 'count_list'});

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
