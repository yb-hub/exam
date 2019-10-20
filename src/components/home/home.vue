<template>
<div>
    <mt-swipe :auto="4000" style="height: 200px">
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>

  export default {
    name: "home",
    created(){
      console.log("create =======")
      this.$store.dispatch("changeHeaderTitle","首页")
    }
  }
</script>

<style scoped>

</style>
