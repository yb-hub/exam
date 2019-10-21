<template>
  <div id="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="title">
      <slot name="title">{{headerTitle}}</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <!--<mt-header id="header" :title="headerTitle">-->
      <!--<mt-button icon="search" slot="left"></mt-button>-->
      <!--<mt-button class="register" slot="right">注册</mt-button>-->
    <!--</mt-header>-->
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ['headerTitle'],
    data() {
      return {}
    },
    // computed:{
    //     headerTitle: {
    //       get(){
    //         return this.$store.state.headerTitle.toString()
    //       }
    //     }
    // }
  }
</script>

<style scoped>
  #header {
    height: 50px;
    background-color: lightseagreen;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #header .register {
    margin-top: 10px;
    font-size: 12px;
  }
  .left{
    margin-left: 10px;
  }
  .right{
    margin-right: 10px;
  }
</style>
