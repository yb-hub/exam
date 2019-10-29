<template>
  <div id="paper-introduce">
    <Header headerTitle="考试须知">
      <div slot="left">
        <span class="iconfont icon-back" @click="back"></span>
      </div>
    </Header>
    <!--<div>试卷id:{{paperId}}</div>-->
    <!--<div>考生须知：XXXXX</div>-->
    <!--<div>考试科目：{{title}}</div>-->
    <!--<div>考试时间/分值：100分/120分钟</div>-->
    <!--<div>题型列表</div>-->
    <!--<button @click="startExam(paperId)">开始答题</button>-->
    <!--试卷详情-->
    <div class="paper_detail">
      <div class="paper_title">
        试卷名称：{{paperInfo.paperName}}
      </div>
      <div class="paper_type">
          <span style="color: #3caafd">
            <i class="iconfont iconleixing"></i>
            试卷类型：
          </span>
        {{paperInfo.paperType == 1 ? '随机组卷' : '固定组卷'}}
      </div>

      <div class="paper_create_time">
          <span style="color: #3caafd">
            <i class="iconfont iconshijian"></i>
            发布时间：
          </span>
        {{paperInfo.paperCreateTime}}
      </div>

      <div class="paper_total_que">
          <span style="color: #3caafd">
            <i class="iconfont iconquanbu"></i>
            全部题数：
          </span>
        100道
      </div>

      <div class="paper_duration">
          <span style="color: #3caafd">
            <i class="iconfont iconzhandoushichang"></i>
            考试时长：
          </span>
        {{Math.round(paperInfo.paperDuration/60)}}分钟
      </div>

      <div class="paper_total_score">
          <span style="color: #3caafd">
            <i class="iconfont iconzongfen"></i>
            试卷总分：
          </span>
        {{paperInfo.totalScore}}分
      </div>

      <div class="paper_pass">
          <span style="color: #3caafd">
            <i class="iconfont iconbiaozhunhua"></i>
            及格标准：
          </span>
        {{Math.round(paperInfo.totalScore*0.6)}}分
      </div>

      <div class="paper_difficulty">
          <span style="color: #3caafd">
            <i class="iconfont iconxishu"></i>
            <span>难度系数：</span>
          </span>
        <!--<Star :score="paperInfo.paperDifficulty" :size="24" />-->
      </div>

      <div class="paper_participate">
          <span style="color: #3caafd">
            <i class="iconfont iconcanjia"></i>
            参加人数：
          </span>
        {{paperInfo.participateNum}}人
      </div>

      <div class="paper_que_type">
          <span style="color: #3caafd">
            <i class="iconfont icontixing"></i>
            题型介绍：
          </span>
        单选题100道每题2分，多选题100道每题3分，判断题100道每题1分，填空题111道每题1分
      </div>

      <div class="paper_attention">
          <span style="color: #3caafd">
            <i class="iconfont iconzhuyi"/>
            注意事项：考试时间结束系统将自动提交试卷，考试过程强制退出浏览器成绩记0分
          </span>
        <!--{{paperInfo.paperAttention}}-->
      </div>
    </div>

    <!--点击试卷开始按钮-->
    <div class="paper_start">
      <mt-button type="primary" :class="{'complete_flag':currentPaperStatus == 1 ? true : false}" @click.native="toStartPaper" :disabled="currentPaperStatus == 1 ? true : false">
        {{currentPaperStatus == 1 ? '已完成' : '开始考试'}}
      </mt-button>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/common/Header'
  export default {
    name: "PaperIntroduce",
    components:{
      Header,
    },
    data() {
      return {
       paperInfo:"",
       currentPaperStatus:0,
      }
    },
    created(){
      this.getRouterData()
      this.loading = true
      // this.getPaperInfoByPaperId();
      // this.getCurrentPaperStatus();
      this.paperInfo={
        paperName:"Java期末考试",
        paperType:1,
        paperCreateTime:"2019-10-1",
        questionCount:60,
        limitTime:60,
        totalScore:100,
        participateNum:10,
      }
      setTimeout(() => {
        this.loading = false
      }, 800)
    },
    methods: {
      getRouterData() {
        this.paperId = this.$route.query.paperId;
        this.paperName = this.$route.query.paperName;
      },
      back(){
        this.$router.back(-1)
      },
      toStartPaper(paperId){
        this.$router.push({
          name:'paperDetail',
          query:{
            paperId:paperId
          }
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/icon/back/iconfont.css";

    .paper_detail
      width 80%
      margin 0 auto
      margin-bottom 20px
      margin-top 20px
      padding 20px
      background-color #fff
      background-image url("../../assets/images/paper-center-top.png"), url("../../assets/images/paper-right-top.png"), url("../../assets/images/corner-mark-must.png")
      background-size 50px 18px, 40px 40px, 40px 40px
      background-repeat no-repeat, no-repeat, no-repeat
      background-position 50% 2.5%, 100% 0%, 0% 0%
      border-radius 5px
      box-shadow 0 0 3px #ccc
      .paper_title
        height 50px
        line-height 50px
        font-size 16px
        display flex
        justify-content center
        border-bottom 2px solid rgba(153, 153, 153, .3)
      .paper_type
        height 30px
        line-height 30px
        font-size 14px
        color #999
        margin-top 10px
      .paper_create_time, .paper_duration, .paper_total_score, .paper_pass, .paper_participate, .paper_total_que
        height 30px
        line-height 30px
        font-size 14px
        color #999
      .paper_difficulty
        height 30px
        line-height 30px
        font-size 14px
        color #999
        .star
          display inline-block
          float none
      .paper_que_type, .paper_attention
        line-height 20px
        font-size 14px
        color #999
        margin-top 8px
      .paper_attention
        margin-top 10px
    .paper_start
      width 91%
      margin 0 auto
      .mint-button
        width 100%
        background-color #4ab8a1
      .complete_flag
        background-color #4ab8a1
</style>
