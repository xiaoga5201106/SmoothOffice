<template>
  <div id="main">
    <formData :formData="formData"></formData>
  </div>
</template>

<script>
  import formData from '../component/formData'
    export default {
        name: "order_detail",
        components: {
          formData
        },
      data () {
          return{
            formData:formData
          }
        },
      mounted () {
        this.formData = this.$route.query;
      }
    }
</script>

<style scoped>

</style>
