<template>
	<div id="main">
		<formBox :labels="labels" flag="newOrder"></formBox>
		<formButton state4="提交" @submit="updata_count" ></formButton>
	</div>

</template>

<script>
	import formBox from '../component/formBox'
	import formButton from '../component/formButton'
    export default {
        name: "audit_count",
        components:{
        	formBox,
        	formButton
        },
         inject: ['newMenu'],
        data(){
        	return{ 
          id: this.$route.query.order_id,         
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
                  {
                 key:'3',
                  prop:"state",
                title:'使用状态',
                placeholder:'请选择',
                msg:'　　',
                value:'',
                items:[
                    {
                      item:'可用'
                    },
                     {
                      item:'停用'
                    },
                    
                ]
               },
          ],
        	}
        },
        methods:{
                getData(){
           let that=this;
          const token = localStorage.getItem('token');
          this.$axios.get(this.$baseURL+'/slb-accounts/' + this.id,{
            headers: {
                "Authorization": "Bearer" + " " + token
              }
          })
          .then(function(res){
            let state;
            if (res.data.user.activated==true) {
                         state="可用"
            }
            if (res.data.user.activated==false) {
                         state="停用"
            }
             console.log(state);
             //订单编号是code
             that.labels[0].value = that.changeRole(res.data.role);
             that.labels[1].value = that.changeArea(res.data.area);
             that.labels[2].value = res.data.user.login;
             that.labels[3].value = res.data.name;
             that.labels[4].value = that.changeSex(res.data.sex);
             that.labels[5].value = res.data.age;
             that.labels[6].value = res.data.xueLi;
             /*that.labels[7].value = res.data.partnerSale;
             that.labels[8].value = res.data.clue;*/
             that.labels[9].value = state;
             //这个才是订单id
          })
          .catch(function(err){
            console.log(err)
          })
         },
         updata_count(){
          console.log(111)
                 let that=this;
           const token = localStorage.getItem('token');
          this.$axios.post(this.$baseURL+'/event/update-slbAccount',{
                activated:that.labels[9].value,
                age:that.labels[5].value,
                area:that.labels[1].value,
                login: that.labels[2].value,
                name:that.labels[3].value,
                /*passWord:data[7],
                rePassWord:data[8],*/
                role:that.labels[0].value,
                sex:that.labels[4].value,
                xueLi:that.labels[6].value, 

                
          },
          {
           headers: {
                "Authorization": "Bearer" + " " + token
              }
          })
          
          .then(function(ret){
                  console.log(1111)
          })
          .catch(function(err){
            console.log(err)
          })

         }
        },
        created:function(){
               this.newMenu('账号管理','账号列表','修改账号');
               this.getData();
        }
      }
    </script>
  <style scoped>
   #main{
    background: #fff;
   padding: 0 300px 20px;
   }
</style>
