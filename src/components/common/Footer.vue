<template>
  <div class="footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="考试">
        <img slot="icon" src="../../assets/logo.png">
        考试
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        selected: "首页"
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

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
