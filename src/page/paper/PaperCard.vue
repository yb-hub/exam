<template>
  <div class="paper-card">
    <Header header-title="答题卡">
      <div slot="left">
        <span class="iconfont icon-huabanfuben close" @click="closePaperCard"></span>
      </div>
      <div slot="right">
        <span></span>
      </div>
    </Header>
      <!--答题卡单选题-->
    <Scroll class="wrapper">
      <div class="options">
        <div class="options_title" style="padding-top: 15px" v-if="true">
          单选题(每题3分)
        </div>
        <div class="row">
          <div class="item" v-for="(singleItem, singleIndex) in singleNum" :key="singleIndex">
            <span>{{singleItem}}</span>
          </div>
        </div>
      </div>
    </Scroll>

    <mt-button  size="large" class="submit-btn">交卷</mt-button>
  </div>

</template>

<script>
  import Header from "../../components/common/Header"
  import Scroll from "../../components/common/Scroll"

  export default {
    name: "PaperCard",
    props: {
      queNumInfo: {
        type: Object
      },
      singleNum: {
        type: Number
      }
    },
    components:{
      Header,
      Scroll,
    },
    data() {
      return {}
    },
    methods: {
      toPaperQue() {
        console.log("topaperque");
      },
      closePaperCard(){
        this.$store.dispatch("closePaperCard")
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/icon/close/iconfont.css";

  .wrapper{
    position: absolute;
    top:0px;
    bottom:50px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }


  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /*添加伪元素，解决最后一排数量不够两端分布的情况*/

  .row:after{
    content:'';
    flex:auto;
  }

  .item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
    border: 1px solid black;
    margin: 10px;
  }

  .submit-btn{
    color:white;
    background-color: lightseagreen;
    position: fixed;
    bottom: 50px;
  }
</style>

