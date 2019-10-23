<template>
<div id="home">
    <Header headerTitle="首页">
      <!--<template #left>-->
      <!--<span @click="leftClick" class="iconfont icon-Search"></span>-->
      <!--</template>-->
      <!--<template #right>right</template>-->
      <div slot="left">
        <span @click="leftClick" class="iconfont icon-Search"></span>
      </div>
      <div slot="right">
        right
      </div>
    </Header>
    <Scroll class="wrapper">
      <div>
        <mt-swipe :auto="4000" style="height: 200px;">
          <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
          <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
          <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
        </mt-swipe>
        <List></List>
      </div>
    </Scroll>
</div>
</template>

<script>
  import Header from '../common/Header'
  import List from './List'
  // import BScroll from 'better-scroll'
  import Scroll from "../common/Scroll"

  export default {
    name: "home",
    data(){
      return{
      }
    },
    components:{
      Header,
      List,
      Scroll,
    },
    methods:{
      leftClick(){
        this.$router.push('/search')
      },
    },
    // created(){
    //   console.log("create =======")
    //   this.$store.dispatch("changeHeaderTitle","首页")
    // }
  }
</script>

<style scoped>
  @import "../../assets/search/iconfont.css";
  #home{
    /*padding-top:44px;*/
    /*position: relative;*/
    height: 100vh;
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
