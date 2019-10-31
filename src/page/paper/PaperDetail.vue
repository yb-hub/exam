<template>
  <div id="paper-detail">
    <section v-if="!this.$store.state.isPaperCardShow">
      <Header header-title="好好考试，别偷看">
        <div slot="left">
          <span class="iconfont icon-back"></span>
        </div>
        <div slot="right" @click="openPaperCard">
          <span class="iconfont icon-datiqia"></span>
        </div>
      </Header>
      <section class="tips">
        <span class="iconfont icon-jishimiaobiao limit-time">时间：{{limitTime}}</span>
        <span class="process iconfont icon-jindusvg">进度：{{currentQuestion}}/{{questions.length}}</span>
      </section>
      <section class="question">
        <Question :question="questions[currentQuestion]">
        </Question>
      </section>
      <div class="btn">
        <mt-button v-if="currentQuestion!=0" @click="before">上一题</mt-button>
        <!--<mt-button>标注</mt-button>-->
        <mt-button v-if="currentQuestion!=questions.length-1" @click="next">下一题</mt-button>
      </div>
    </section>
    <PaperCard v-if="this.$store.state.isPaperCardShow" :singleNum="106" :timer="time">
    </PaperCard>
  </div>
</template>

<script>
  import Header from '../../components/common/Header'
  import PaperCard from './PaperCard'

  import Question from './Question'

  export default {
    name: "PaperDetail",
    components: {
      Header,
      Question,
      PaperCard,
    },
    data() {
      return {
        showModal: false,
        currentQuestion: 0,
        questions: [
          {
            id: 1,
            content: "这是第一题",
            options:[
              {
                key:"A",
                content:"this is afb 这是第一题 fdf 这是第一题 fd 这是第一题 this is afb 这是第一题 fdffadsf这 是第一题 fd 这是第一题"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
              {
                key:"D",
                content:"this is d"
              }
            ]
          },
          {
            id: 2,
            content: "这是第2题",
            options:[
              {
                key:"A",
                content:"this is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb"
              },
              {
                key: "B",
                content: "this is b"
              }
            ]
          },
          {
            id: 3,
            content: "这是第3题",
            options:[
              {
                key:"A",
                content:"this is a"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
              {
                key:"D",
                content:"this is d"
              }
            ]
          }, {
            id: 4,
            content: "这是第4题",
            options:[
              {
                key:"A",
                content:"this is a"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
            ]
          },
        ],
        limitTime: 120,
        time:"",
      }
    },
    created() {
      this.time = setInterval(this.timer, 1000 * 60)
    },
    methods: {
      timer() {
        this.limitTime -= 1;
      },
      before() {
        this.currentQuestion -= 1;
      },
      next() {
        this.currentQuestion += 1;
      },
      openPaperCard() {
        this.$store.dispatch('openPaperCard')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/icon/back/iconfont.css"
  @import "../../assets/icon/anwser_card/iconfont.css"
  @import "../../assets/icon/timer/iconfont.css"
  @import "../../assets/icon/process/iconfont.css"

  .btn
    position fixed
    bottom 80px
    left 0px
    right 0px

  .tips
    display block
    .limit-time
      float:left
      margin:8px
    .process
      float:right
      margin:8px

  .question
    clear both




</style>
