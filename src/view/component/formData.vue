<template>
  <div id="formData">
    {{formData}}
    <div class="item" v-for="title in formData.titles">
      <span>{{title.label}}</span>
      <span></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "form-data",
        props:['formData']
    }
</script>

<style scoped>

</style>
