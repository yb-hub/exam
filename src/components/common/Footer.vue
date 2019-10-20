<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="课程">
        <img slot="icon" src="../../assets/logo.png">
        课程
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
      data(){
        return {
          selected:"首页"
        }
      },
      watch:{
        selected:function(val,OldValue){
          console.log(val)
          let headerTitle = val
          switch(val){
            case '首页':
              this.$router.push('/home');
              break;
            case '课程':
              this.$router.push('/kechen');
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

</style>
