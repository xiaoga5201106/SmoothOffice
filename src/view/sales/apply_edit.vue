<template>
  <div id="main">
    <searchTools :searchDatas="searchDatas" level="0"></searchTools>
    <tabs :Menutabs="Menutabs"></tabs>
  </div>
</template>

<script>
    import tabs from '../component/tabs'
    import searchTools from'../component/searchTools'
    export default {
        name: "apply_edit",
        components: {
          tabs,
          searchTools
        },
      data () {
        return {
          /*tabs标签页*/
          Menutabs:[{
            label:'待审核',
            name:'1'
          },{
            label:'已通过',
            name:'2'
          },{
            label:'不通过',
            name:'3'
          }],
          /*搜索表单数据*/
          searchDatas:[{
            item:'业务类型',
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '1',
              label: '筹税'
            },{
              value: '2',
              label: '基础业务'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '3',
              label: '自由业务'
            },{
              value: '4',
              label: '转包业务'
            }]
          },{
            content:'select',
            placeholder:'请选择',
            option:[{
              value: '5',
              label: '一次付款'
            },{
              value: '6',
              label: '多次付款'
            },{
              value: '7',
              label: '自签业务'
            },{
              value: '8',
              label: '返佣业务'
            },{
              value: '9',
              label: '工商业务'
            },{
              value: '10',
              label: '转包业务'
            },{
              value: '11',
              label: '财务业务'
            }]
          },{
            item:'订单编号',
            content:'input',
            placeholder:'请输入订单编号'
          },{
            item:'客户名称',
            content:'input',
            placeholder:'请输入客户名称'
          }]
          }
        }
    }
</script>

<style scoped>

</style>
