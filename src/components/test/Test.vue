<template>
  <div id="test">
    <Header>
      <div slot="left">
        <span class="iconfont icon-back"></span>
      </div>
      <div slot="right">
        <span class="iconfont icon-dingdan"></span>
        <span class="iconfont icon-dingdan"></span>
        <span class="iconfont icon-dingdan"></span>
      </div>
    </Header>
    <TestDetail></TestDetail>
  </div>
</template>

<script>
  import Header from "../common/Header"

  import TestDetail from "./TestDetail"

  export default {
    name: "Test",
    components: {
      Header,

      TestDetail,
    },
  }
</script>

<style scoped>
  @import "../../assets/test/back/iconfont.css";
  @import "../../assets/list/editor/iconfont.css";

  #test{
    padding-top:44px;
  }
</style>
