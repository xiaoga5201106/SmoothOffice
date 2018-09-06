<template>

  <div id="main">
   <formBox :labels="labels" flag="newOrder" @changeItem="changeItem"></formBox>
  	<formButton state4="提交" @submit="submit(labels)"></formButton>
    <router-link to=""></router-link>

  </div>
</template>

<script>
	import formBox from '../component/formBox'
	import formButton from '../component/formButton'
  import contract from '../component/contract'

  export default {
      name: "add_order",
      components:{
      	formBox,
      	formButton,
        contract
      },
    data () {
      return{
          item1:'',
          item2:'',
          labels:[
               {
               	key:'2',
               	title:'区域',
               	value:'',
                msg:'*必选',
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
                 key:'2',
               	title:'业务类型',
                 msg:'*必选',
               	items:[
                  {
                    item:[{
                      i:'税筹'
                    },
                    {
                      i:'基础业务'
                    }],
                    value:''
                },
                  {
                    item:[],
                    value:''
                  },
                  {
                    item:[],
                    value:''
                  }
               	]
               },
                   {
                 key:'1',
               	title:'客户名称',
                 msg:'*必填',
                value:''
               },
                   {
                 key:'1',
               	title:'联系方式',
                 msg:'*必填',
                value:''
               },
                    {
                 key:'1',
               	title:'合伙人名称',
                msg:'　　',
                value:''
               },
                    {
                 key:'1',
               	title:'合伙人销售',
                msg:'　　',
                value:''
               },
                    {
                 key:'1',
               	title:'线索（个人）',
                msg:'　　',
                value:''
               },
                    {
                 key:'1',
               	title:'协助单位（内部）',
                msg:'　　',
                value:''
               },
          ],

      }

    },
    methods:{
        changeItem(type){
           //同时做到判断是点击哪个下拉框
            if(type == 1){
              this.labels[1].items[1].item = [];
              this.labels[1].items[1].value = '';
              this.labels[1].items[2].item = [];
              this.labels[1].items[2].value = '';
              if(this.labels[1].items[0].value == '税筹'){
                
                this.labels[1].items[1].item.push({i:'自有业务'},{i:'转包业务'});
              }
              else if(this.labels[1].items[0].value =='基础业务'){
                this.labels[1].items[1].item.push({i:'自有业务'});
              }
            }
            else if(type == 2){             
              if(this.labels[1].items[0].value == ''){
                  this.$message({
                message:'请选择前面的业务类型！',
                type:"warning",
                duration:1000,
              })                  
              }
            }
            else if(type == 3 && (this.labels[1].items[0].value == '' || this.labels[1].items[1].value == '')){
              this.$message({
                 message:'请选择前面的业务类型！',
                type:"warning",
                duration:1000,

              })
            }
            if(this.labels[1].items[0].value == '税筹' && this.labels[1].items[1].value == '自有业务'){
              this.labels[1].items[2].item = [];
              this.labels[1].items[2].value = '';
              this.labels[1].items[2].item.push({i:'一次付款'},{i:'多次付款'});
            }
            else if(this.labels[1].items[0].value == '税筹' && this.labels[1].items[1].value == '转包业务'){
              this.labels[1].items[2].item = [];
              this.labels[1].items[2].value = '';
              this.labels[1].items[2].item.push({i:'自签业务'},{i:'返佣业务'});
            }
            else if(this.labels[1].items[0].value == '基础业务' && this.labels[1].items[1].value == '自有业务'){
              this.labels[1].items[2].item = [];
              this.labels[1].items[2].value = '';
              this.labels[1].items[2].item.push({i:'工商业务'},{i:'转包业务'},{i:'财务业务'});
            }

           
        },
        submit(labels){
          let that=this;
          const token = localStorage.getItem('token');
          if (labels[1].items[0].value=='') {
               that.$message.error('请选择业务类型')
          }
          else if (labels[1].items[1].value=='') {
             that.$message.error('请选择业务类型')
          }
          else if (labels[1].items[2].value=='') {
             that.$message.error('请选择业务类型')
          }
          else if (labels[0].value=='') {
           that.$message.error('请选择区域')
          }
          else if (labels[2].value=='') {
             that.$message.error('请填写客户名称')
          }
          else if (labels[3].value=='') {
             that.$message.error('请填写联系方式')
          }
          else{
    this.$axios.post(this.$baseURL+'/event/save-slb-order-events/new',{
                      area: labels[0].value,
                      assist: labels[7].value,
                      clue: labels[6].value,
                      contact: labels[3].value,
                      customerName: labels[2].value,
                      partnerName: labels[4].value,
                      partnerSale: labels[5].value,
                      type1: labels[1].items[0].value,
                      type2: labels[1].items[1].value,
                      type3: labels[1].items[2].value
                   },
                   {
                    headers: {
                          "Authorization": "Bearer"+" "+token
                      }
                   }
              )
             .then(function(res){
               that.$message({
                message : '新建订单成功！',
                type : 'success'
               });
               for(let i = 0; i < labels.length; i++){
                  labels[i].value = '';
               }
               that.$router.push("/order_list");
             })
             .catch(function(err){
                that.$message({
                message : '新建订单失败！',
                type : 'warning'
               });
              });
                  }
             }
        },
    }
</script>

<style scoped>
   #main{
   	background: #fff;
   padding: 0 300px 20px;
   }
</style>
