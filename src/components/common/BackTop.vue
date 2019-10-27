<template>
    <div class="back-top">
      <span style="color:#ccc;font-size: 25px"  class="iconfont icon-back"></span>
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
  @import "../../assets/backtop/iconfont.css";

  .back-top{
    z-index: 999;
    position: fixed;
    right:10px;
    bottom:80px;
  }
</style>
