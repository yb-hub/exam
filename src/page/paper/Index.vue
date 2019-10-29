<template>
  <div id="paper">
    <Header headerTitle="考试"></Header>
    <router-view class="wrapper"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../../components/common/Header'
  import Footer from '../../components/common/Footer'
  import Scroll from '../../components/common/Scroll'

  import PaperList from './PaperList'
  export default {
    name: "Index",
    data() {
      return {}
    },
    components: {
      Header,
      Footer,
      Scroll,

      PaperList,
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
