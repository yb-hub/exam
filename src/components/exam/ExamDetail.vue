<template>
  <div id="exam-detail">
    <Header header-title="好好考试，别偷看">
      <div slot="left" style="width:90px">
        <div><span class="iconfont icon-loudou" style="color:red"></span>时间：{{limitTime}}</div>
      </div>
      <div slot="right"  @click="checkQuestionDetail">
        <span class="iconfont icon-chakan"></span>
      </div>
    </Header>

    <Question :question="questions[currentQuestion]" style="height: 200px">
    </Question>
    <button v-if="currentQuestion!=0" @click="before">上一题</button>
    <button>标注</button>
    <button v-if="currentQuestion!=questions.length-1" @click="next">下一题</button>

    <Modal v-if="this.$store.state.showModal">
    </Modal>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import Modal from '../common/Modal'

  import Question from './Question'

  export default {
    name: "ExamDetail",
    components:{
      Header,
      Modal,
      Question,
    },
    data(){
      return {
        showModal:false,
        currentQuestion:0,
        questions:[
          {
            id:1,
            content:"这是第一题"
          },
          {
            id:2,
            content:"这是第2题"
          },
          {
            id:3,
            content:"这是第3题"
          },{
            id:4,
            content:"这是第4题"
          },
        ],
        limitTime:120
      }
    },
    created(){
      this.time = setInterval(this.timer,1000*60)
    },
    methods:{
      timer(){
        this.limitTime -=1;
      },
      before(){
        this.currentQuestion -=1;
      },
      next(){
      this.currentQuestion +=1;
      },
      checkQuestionDetail(){
       this.$store.dispatch('openModal')
      }
    }
  }
</script>

<style scoped>
@import "../../assets/timer/countDown/iconfont.css";
@import "../../assets/check/iconfont.css";
</style>
