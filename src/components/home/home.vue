<template>
<div>
    <Header headerTitle="首页">
      <template #left>
        <span @click="leftClick" class="iconfont icon-Search"></span>
      </template>
      <template #right>right</template>
    </Header>
    <mt-swipe :auto="4000" style="height: 200px">
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
      <mt-swipe-item><img src="@/assets/logo.png" alt="logo"></mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "home",
    data(){
      return{
      }
    },
    components:{
      Header,
    },
    methods:{
      leftClick(){
        this.$router.push('/search')
      },
    }
    // created(){
    //   console.log("create =======")
    //   this.$store.dispatch("changeHeaderTitle","首页")
    // }
  }
</script>

<style scoped>
  @import "../../assets/search/iconfont.css";
</style>
