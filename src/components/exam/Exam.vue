<template>
  <div id="exam">
    <Header headerTitle="考试"></Header>
    <router-view class="wrapper"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import Footer from '../common/Footer'
  import Scroll from '../common/Scroll'

  import ExamList from './ExamList'
  export default {
    name: "Exam",
    data() {
      return {}
    },
    components: {
      Header,
      Footer,
      Scroll,

      ExamList,
    },
    methods: {},
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }
</style>
