<template>
  <div id="exam">
    <!--<Header headerTitle="考试"></Header>-->
    <!--<Scroll class="wrapper">-->
    <router-view></router-view>
      <!--<ExamList></ExamList>-->
    <!--</Scroll>-->
  </div>
</template>

<script>
  import Header from '../common/Header'
  import Scroll from '../common/Scroll'

  import ExamList from './ExamList'
  export default {
    name: "Exam",
    data() {
      return {}
    },
    components: {
      Header,
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
    bottom: 55px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

  #exam{
    padding-top: 44px;
  }
</style>
