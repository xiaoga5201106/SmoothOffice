<template>
  <div id="main">
    <breadcrumb menu1="我的订单" menu2="订单列表"></breadcrumb>
    <tableList></tableList>
  </div>
</template>

<script>
    import breadcrumb from '../component/breadcrumb'
    import tableList from '../component/tableList'
    export default {
        name: "order_list",
        components: {
          breadcrumb, //导入组件
          tableList
        },
        data () {
          return{

          }
        }
    }
</script>

<style scoped>

</style>
