<template>
  <div id="test">
    <Header>
      <div slot="left">
        <span class="iconfont icon-back" @click="back"></span>
      </div>
      <div slot="title" style="text-align: left">
        <span>{{testTime}}</span>
      </div>
    </Header>
    <Scroll class="wrapper">
      <TestDetail></TestDetail>
    </Scroll>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../components/common/Header"
  import Footer from "../../components/common/Footer"
  import Scroll from "../../components/common/Scroll"

  import TestDetail from "./TestDetail"

  export default {
    name: "Index",
    components: {
      Header,
      Footer,
      Scroll,
      TestDetail,
    },
    data(){
      return{
        second:0,
        minite:0,
        hour:0,
        testTime:"00:00",

      }
    },
    methods:{
      timer(){
        if(this.second == 59){
          if(this.minite == 59){
            this.hour +=1;
          }
          this.minite = (this.minite+1)%60
        }
        this.second = (this.second+1)%60
        this.testTime = (Array(2).join(0) + this.minite).slice(-2) +":"+ (Array(2).join(0) + this.second).slice(-2);
        // console.log("second:"+(Array(2).join(0) + this.second).slice(-2));
      },
      startTime(){
        this.time = setInterval(this.timer, 1000);
      },
      stopTime(){
        clearInterval(this.time)
      },
      back(){
        this.$router.back()
      }
    },
    // computed:{
    //   testTime:{
    //     get(){
    //       console.log((Array(2).join(0) + this.minite).slice(-2) +":"+ (Array(2).join(0) + this.second).slice(-2))
    //       return  (Array(2).join(0) + this.minite).slice(-2) +":"+ (Array(2).join(0) + this.second).slice(-2);
    //     },
    //     set(){},
    //     default:"00:00"
    //   }
    // },
    created(){
      this.startTime();
    },
    beforeDestroy(){
      this.stopTime();
    },
  }
</script>

<style scoped>
  @import "../../assets/icon/back/iconfont.css";
  @import "../../assets/list/editor/iconfont.css";

  /*#test {*/
  /*height: 100%;*/
  /*}*/
  .wrapper{
    position: absolute;
    top:44px;
    bottom: 50px;
    left: 0px;
    right: 0px;
    overflow:hidden;
  }

</style>
