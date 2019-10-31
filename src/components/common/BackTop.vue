<template>
    <div class="back-top">
      <transition name="fade">
        <span style="color:#ccc;font-size: 25px"  class="iconfont icon-back"></span>
      </transition>
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
