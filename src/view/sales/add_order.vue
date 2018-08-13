<template>
  <div id="main">
    <breadcrumb menu1="我的订单" menu2="新建订单"></breadcrumb>
  </div>
</template>

<script>
  import breadcrumb from '../component/breadcrumb'
  export default {
      name: "add_order",
      components: {
        breadcrumb //导入组件面包屑
      },
    data () {
      return{

      }
    }
  }
</script>

<style scoped>

</style>
