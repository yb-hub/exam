<template>
  <!--<div id="PaperItem" style="height: 80px">-->
    <!--<h1>title:{{paper.title}}</h1>-->
    <!--<button @click="toPaperIntroduce(paper.id,paper.title)">开始考试</button>-->
  <!--</div>-->
  <div class="paper-item" :class="{'corner_top': true, 'corner_new':true, 'corner_hot':paper.participateNum > 10}">
    <div class="paper_title">
      试卷名称：{{paper.paperName}}
    </div>
    <div class="paper_type">
      试卷类型：{{paper.paperType === 1 ? '随机组卷' : '固定组卷'}}
    </div>
    <div class="paper_create_time">
      <!--发布时间：{{item.paperCreateTime | date-format}}-->
      发布时间：{{paper.paperCreateTime}}
    </div>
    <div class="paper_difficulty">
      <span>难度系数：</span>
      <!--<Star :score="item.paperDifficulty" :size="24"></Star>-->
    </div>
    <div class="paper_participate">
      <div class="paper_participate_left">
        <img src="../../assets/images/person.png" alt=""><span style="color: #FF0000">{{paper.participateNum}}</span>人参加
      </div>
      <div class="paper_participate_right">
        <mt-button size="small" type="primary" @click.native="toPaperIntroduce(paper.paperId,paper.paperName)">查看详情</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PaperItem",
    props: {
      paper: {
        type: Object
      }
    },
    methods: {
      toPaperIntroduce(paperId, paperName) {
        console.log(paperId, paperName);
        this.$router.push({
          name: 'paperIntroduce', query: {
            paperId: paperId,
            paperName: paperName
          }
        })
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .paper-item
    width 80%
    margin 0 auto
    margin-bottom 20px
    padding 20px
    background-color #fff
    background-image url("../../assets/images/paper-center-top.png"), url("../../assets/images/paper-right-top.png"), url("../../assets/images/paper.png")
    background-size 50px 18px, 40px 40px, 32px 32px
    background-repeat no-repeat, no-repeat, no-repeat
    background-position 50% 5%, 100% 0%, 85% 40%
    border-radius 5px
    box-shadow 0 0 3px #ccc
    &.corner_top
      background-image url("../../assets/images/paper-center-top.png"), url("../../assets/images/paper-right-top.png"), url("../../assets/images/paper.png"), url("../../assets/images/corner-mark-top.png")
      background-size 50px 18px, 40px 40px, 32px 32px ,40px 40px
      background-repeat no-repeat, no-repeat, no-repeat, no-repeat
      background-position 50% 5%, 100% 0%, 85% 40%, 0% 0%
    &.corner_new
      background-image url("../../assets/images/paper-center-top.png"), url("../../assets/images/paper-right-top.png"), url("../../assets/images/paper.png"), url("../../assets/images/corner-mark-new.png")
      background-size 50px 18px, 40px 40px, 32px 32px ,40px 40px
      background-repeat no-repeat, no-repeat, no-repeat, no-repeat
      background-position 50% 5%, 100% 0%, 85% 40%, 0% 0%
    &.corner_hot
      background-image url("../../assets/images/paper-center-top.png"), url("../../assets/images/paper-right-top.png"), url("../../assets/images/paper.png"), url("../../assets/images/corner-mark-hot.png")
      background-size 50px 18px, 40px 40px, 32px 32px ,40px 40px
      background-repeat no-repeat, no-repeat, no-repeat, no-repeat
      background-position 50% 5%, 100% 0%, 85% 40%, 0% 0%
    .paper_title
      height 50px
      line-height 50px
      font-size 16px
    .paper_type
      height 30px
      line-height 30px
      font-size 14px
      color #999
    .paper_create_time
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
    .paper_participate
      height 50px
      line-height 50px
      font-size 16px
      display flex
      justify-content space-between
      .paper_participate_left
        color lightslategray
        display flex
        align-items center
        >img
          width 25px
          height 25px
</style>
