<template>
  <div class="listItem">
    <span :class="showList[index] ? 'iconfont icon-arrow-down-' : 'iconfont icon-arrow-right-'"></span><span @click="show(index)">{{category.name}}</span><span class="iconfont icon-dingdan"></span>
  </div>
</template>

<script>
    export default {
        name: "ListItem",
      props:["isShow"]
    }
</script>

<style scoped>

</style>
