<template>
  <div class="mint-search">
    <form action="" target="frameFile">
      <mt-search
        v-model="keyValue"
        cancel-text="取消"
        placeholder="请输入关键字"
        @keyup.native="search">
      </mt-search>
      <!--<iframe name='frameFile' style="display: none;"></iframe>-->
    </form>
  </div>

</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        keyValue: ""
      }
    },
    methods:{
      search(){
        //抛出search事件
        this.$emit("search")
      }
    }
  }
</script>

<style scoped>
  .mint-search{
    height: 50px;
  }
</style>
