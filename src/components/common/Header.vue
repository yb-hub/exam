<template>
  <mt-header id="header" :title="headerTitle">
    <mt-button class="register" slot="right" >注册</mt-button>
  </mt-header>
</template>

<script>
    export default {
        name: "Header",
        data(){
          return {
          }
        },
      computed:{
          headerTitle: {
            get(){
              return this.$store.state.headerTitle.toString()
            }
          }
      }
    }
</script>

<style scoped>
  #header{
    height: 50px;
    background-color: lightseagreen;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    color:white;
  }
  #header .register{
    margin-top: 10px;
    font-size:12px;
  }
</style>
