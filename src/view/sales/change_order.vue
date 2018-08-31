<template>

  <div id="main">
   <formBox :labels="labels" flag="newOrder"></formBox>
  	<formButton state4="提交" @submit="submit(labels)"></formButton> 	
  </div>
</template>

<script>
	import formBox from '../component/formBox'
	import formButton from '../component/formButton'
  import contract from '../component/contract'
	
  export default {
      name: "add_order",
      inject: ['newMenu'],
      components:{
      	formBox,
      	formButton,
        contract
      },
    data () {
      return{   
          order_id: this.$route.query.order_id,
          contact:'',
          labels:[
               {
                key:'0',
                title:'订单编号',
                value:'',
               },
               {
                key:'1',
                title:'客户名称',
                value:'',
               },
               {
               	key:'2',
               	title:'区域',
               	value:'',
               	items:[
               	{
               	    item:'柳州'	
               	},
               		{
               	    item:'贺州'	
               	},	
               			{
               	    item:'钦州'	
               	},	   
                ]
               },
                 {
                 key:'2',
               	title:'业务类型',
               	value:'',
               	items:[
               	{
               	    item:'税筹'	
               	},
               		{
               	    item:'基本业务'	
               	},	
      
               	]
               },
                  {
                 key:'2',
               	title:'',
               	value:'',
               	items:[
               	{
               	    item:'自有业务'	
               	},
               		{
               	    item:'转包业务'	
               	},	   
               	]
               },
                  {
                 key:'2',
               	title:'',
               	value:'',
               	items:[
               	{
               	    item:'一次性付款'	
               	},
               		{
               	    item:'多次付款'	
               	},	
               			{
               	    item:'自签业务'	
               	},
               				{
               	    item:'返佣业务'	
               	},
               				{
               	    item:'工商业务'	
               	},
               				{
               	    item:'转包业务'	
               	},
               				{
               	    item:'财务业务'	
               	},			   
         
      
               	]
               },
                   {
                 key:'1',
               	title:'合伙人名称',
                value:''
               },
                   {
                 key:'1',
               	title:'合伙人销售',
                value:''
               },
                    {
                 key:'1',
               	title:'线索（个人）',
                value:''
               },
                    {
                 key:'1',
               	title:'协助单位（内部）',
                value:''
               },
               {
                 key:'0',
                title:'提交时间',
                value:''
               },
               {
                 key:'0',
                title:'最后修改时间',
                value:''
               }
          ],
           
      }

    },
    methods:{
        submit(labels){
          let that=this;
          const token = localStorage.getItem('token');
          for( let i = 0; i<10 ;i++){
            console.log(labels[i].value)
          }
             this.$axios.post('/api/event/save-slb-order-events/update',{
                      slbOrderId:labels[0].value,
                      area: labels[2].value,
                      assist: labels[9].value,
                      clue: labels[8].value,
                      customerName: labels[1].value,
                      partnerName: labels[6].value,
                      partnerSale: labels[7].value,
                      type1: labels[3].value,
                      type2: labels[4].value,
                      type3: labels[5].value,
                      contact:  that.contact
                   },
                   {
                    headers: {
                          "Authorization": "Bearer"+" "+token
                      }
                   }
              )
             .then(function(res){
              console.log(res);
               that.$message({
                message : '修改订单成功！',
                type : 'success'
               });
               that.$router.go(-1);
              
             })
             .catch(function(err){
              console.log(err);
                that.$message({
                message : '修改订单失败！',
                type : 'warning'
               });
              });

             },
         getData(){
           let that=this;
          const token = localStorage.getItem('token');
          this.$axios.get('/api/slb-orders/' + this.order_id,{
            headers: {
                "Authorization": "Bearer" + " " + token
              }
          })
          .then(function(res){
             console.log(res);
             that.labels[0].value = res.data.id;
             that.labels[1].value = res.data.customerName;
             that.labels[2].value = res.data.area;
             that.labels[3].value = res.data.type1;
             that.labels[4].value = res.data.type2;
             that.labels[5].value = res.data.type3;
             that.labels[6].value = res.data.partnerName;
             that.labels[7].value = res.data.partnerSale;
             that.labels[8].value = res.data.clue;
             that.labels[9].value = res.data.assist;
             that.labels[10].value = res.data.createTime;
             that.labels[11].value = res.data.submitTime;
             that.contact = res.data.contact;
          })
          .catch(function(err){
            console.log(err)
          })
         }    
        },
     created:function(){
          this.getData();
          this.newMenu('我的订单','订单列表','修改订单');       
     }   

    }
</script>

<style scoped>
   #main{
   	background: #fff;
   padding: 0 300px 20px;
   }
</style>
