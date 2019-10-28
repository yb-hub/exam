<template>
  <div id="wode">
    <Header headerTitle="我的"></Header>
    <PersonDetail></PersonDetail>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import Footer from '../common/Footer'

  import PersonDetail from './PersonDetail'

  export default {
    name: "wode",
    data() {
      return {}
    },
    methods: {},
    components: {
      Header,
      Footer,
      PersonDetail,
    },
    // created(){
    //   this.$store.dispatch("changeHeaderTitle","课程")
    // }
  }
</script>

<style scoped>
  #wode {
    padding-top: 44px;
  }

</style>
