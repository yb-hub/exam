<template>
  <div class="header">
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
  .header {
    height: 44px;
    background-color: lightseagreen;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:999;
  }
  .title{
    flex:1
  }
  .left,.right{
    width:40px;

  }

</style>
