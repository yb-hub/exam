<template>
  <div class="listItem">
    <span :class="isShow ? 'iconfont icon-arrow-down-' : 'iconfont icon-arrow-right-'"></span>
    <span @click="index2 == undefined ? show(index) : show2(index,index2)">{{category.name}}</span><span class="iconfont icon-dingdan"></span>
  </div>
</template>

<script>
  export default {
    name: "ListItem",
    props: ["isShow","index","index2"],
    methods: {
      show(index) {
        this.$store.dispatch("show", index)
      },
      show2(index,index2){
        this.$store.dispatch("show2",index,index2)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/list/down/iconfont.css";
  @import "../../assets/list/right/iconfont.css";
  @import "../../assets/list/editor/iconfont.css";

</style>
