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
      components:{
      	formBox,
      	formButton,
        contract
      },
    data () {
      return{


          labels:[
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
               	    item:'筹税'	
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
               	title:'客户名称',
                value:''
               },
                   {
                 key:'1',
               	title:'联系方式',
                value:''
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
          ],
           
      }

    },
    methods:{
        submit(labels){
          for(let i=0;i<labels.length;i++)
          console.log(labels[i].value)
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
