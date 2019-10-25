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
    <Scroll class="wrapper">
      <TestDetail></TestDetail>
    </Scroll>
  </div>
</template>

<script>
  import Header from "../common/Header"
  import Scroll from "../common/Scroll"

  import TestDetail from "./TestDetail"

  export default {
    name: "Test",
    components: {
      Header,
      Scroll,
      TestDetail,
    },
  }
</script>

<style scoped>
  @import "../../assets/test/back/iconfont.css";
  @import "../../assets/list/editor/iconfont.css";

  #test {
    padding-top: 44px;
  }
  .wrapper{
    position: absolute;
    top:44px;
    bottom: 55px;
    left: 0px;
    right: 0px;
    overflow:hidden;
  }

</style>
