<template>
  <div class="paper-list">
    <section class="list">
      <ul class="list_container">
        <router-link :to="'/home/paper/detail/' + item.paperId" tag="li"
                     v-for="item in paperList" :key="item.paperId" class="list_li">
          <section class="item_left">
            <img :src="item.langImgSrc" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.paperName}}</span>
                <span>试卷类型：{{item.paperType == 1 ? '随机组卷' : '固定组卷'}}</span>
              </p>
              <p>
                <span>考试时长：{{Math.round(item.paperDuration/60)}}分钟</span>
                <span>参加人数：{{item.participateNum}}人</span>
              </p>
              <p></p>
              <p>
                <!--<span>发布时间：{{item.paperCreateTime | date-format}}</span>-->
                <span>发布时间：{{item.paperCreateTime}}</span>
                <Star :score="item.paperDifficulty" :size="24"/>
              </p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
  import Star from '../../components/common/star/Star'
  export default {
    name: "PaperList",
    props:["paperList"],
    components:{
      Star,
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              display flex
              justify-content space-between
              &:last-child
                margin-bottom 0

  .search_none
    margin: 0 auto
    color: #333
    background-color: #fff
    text-align: center
    margin-top: 0.125rem
</style>
