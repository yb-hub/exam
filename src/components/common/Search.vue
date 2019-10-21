<template>
  <form action="" target="frameFile">
    <mt-search
      v-model="keyValue"
      cancel-text="取消"
      placeholder="搜索"
      @keyup.native.enter="search">
    </mt-search>
    <iframe name='frameFile' style="display: none;"></iframe>
  </form>
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
        console.log(this.keyValue)
        console.log("start searching...")
      }
    }
  }
</script>

<style scoped>

</style>
