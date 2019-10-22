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
  <div class="wrapper">
    <div>
      <mt-swipe :auto="4000" style="height: 200px;">
        <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
      </mt-swipe>
      <List></List>
    </div>
  </div>
</div>
</template>

<script>
  import Header from '../common/Header'
  import List from './List'
  import BScroll from 'better-scroll'

  export default {
    name: "home",
    data(){
      return{
        scroll:null,
      }
    },
    components:{
      Header,
      List,
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
    mounted(){
      this.scroll =  new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
      })
      //使用probeType属性，监听滚动位置，0，1不监听，2监听（惯性的不监听），3惯性的也监听
      this.scroll.on('scroll',(position)=>{
        console.log(position);
      })

      this.scroll.on('pullingUp',()=>{
        console.log("上啦加载更多");
        this.scroll.finishPullUp();  //只有这里完成上拉加载，才能进行多次的上拉加载操作，否则只能加载一次
      })


    }
  }
</script>

<style scoped>
  @import "../../assets/search/iconfont.css";
  #home{
    padding-top:44px;
  }
  .wrapper{
    height:600px;
    background-color: #ccc;
    overflow:hidden;
  }
</style>
