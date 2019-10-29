<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont iconicon"></i>
      </span>
      <span>首页</span>
    </div>

    <div class="guide_item" @click="goto('/test')" :class="{on: isCurrent('/test')}">
      <span class="item_icon">
        <i class="iconfont iconcuoti"></i>
      </span>
      <span>测验</span>
    </div>

    <div class="guide_item" @click="goto('/paper')" :class="{on: isCurrent('/paper')}">
      <span class="item_icon">
        <i class="iconfont iconsousuo"></i>
      </span>
      <span>考试</span>
    </div>

    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icongeren"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        selected: "首页"
      }
    },
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      isCurrent (path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    },
    watch: {
      selected: function (val, OldValue) {
        console.log(val)
        let headerTitle = val
        switch (val) {
          case '首页':
            this.$router.push('/home');
            break;
          case '考试':
            this.$router.push('/exam');
            break;
          case '我的':
            this.$router.push('/wode');
            break;
        }
      }
    }
  }
</script>

<!--<style scoped>-->
  <!--.footer {-->
    <!--position: fixed;-->
    <!--bottom: 0;-->
    <!--width: 100%;-->
  <!--}-->
<!--</style>-->

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  /*@import "../../common/stylus/mixins.styl"*/
  .footer_guide
    //顶部有白色的边框
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    box-shadow 0px 0px 1px rgba(0,0,0,.5)
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
