<template>
  <div id="exam-introduce">
    <Header headerTitle="考试须知">
      <div slot="left">
        <span class="iconfont icon-back" @click="back"></span>
      </div>
    </Header>
    <div>试卷id:{{paperId}}</div>
    <div>考生须知：XXXXX</div>
    <div>考试科目：{{title}}</div>
    <div>考试时间/分值：100分/120分钟</div>
    <div>题型列表</div>
    <button @click="startExam(paperId)">开始答题</button>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: "ExamIntro",
    created() {
      this.getRouterData()
    },
    components:{
      Header,
    },
    data() {
      return {
        paperId: '',
        title: '',
      }
    },
    methods: {
      getRouterData() {
        this.paperId = this.$route.query.paperId;
        this.title = this.$route.query.title;
      },
      back(){
        this.$router.back(-1)
      },
      startExam(paperId){
        this.$router.push({
          name:'examDetail',
          query:{
            paperId:paperId
          }
        })
      }
    },
  }
</script>

<style scoped>
  @import "../../assets/test/back/iconfont.css";
</style>
