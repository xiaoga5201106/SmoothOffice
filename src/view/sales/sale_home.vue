<template>
  <work :workData="workData"></work>
</template>

<script>
    import work from '../component/work'
    export default {
        name: "sale_home",
        components:{
          work
        },
      data () {
        return{
          workData:[
            {
              title:"销售订单",
              num1:"564",
              num1Title:"累计成功单数",
              num1Color:"blue",
              num2:"2",
              num2Title:"待提交订单数",
              num2Color:"red",
              isWidtn1:false,
              isWidtn2:true,
              isWidtn3:false,
              href:"/order_list"
            },
            {
              title:"申请修改",
              num1:"4",
              num1Title:"待查看",
              num1Color:"red",
              num2:"2",
              num2Title:"不通过",
              num2Color:"red",
              isWidtn1:false,
              isWidtn2:true,
              isWidtn3:false,
              href:"/apply_edit"
            },
            {
              title:"申请撤单",
              num1:"3",
              num1Title:"待查看",
              num1Color:"red",
              num2:"2",
              num2Title:"不通过",
              num2Color:"red",
              isWidtn1:false,
              isWidtn2:true,
              isWidtn3:false,
              href:"/apply_cancle"
            },
            {
              title:"申请变更",
              num1:"1",
              num1Title:"待查看",
              num1Color:"red",
              num2:"2",
              num2Title:"不通过",
              num2Color:"red",
              isWidtn1:false,
              isWidtn2:true,
              isWidtn3:false,
              href:"/apply_change"
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
