<template>
  <div id="wode">
    <Header headerTitle="我的"></Header>
    <PersonDetail></PersonDetail>
  </div>
</template>

<script>
  import Header from '../common/Header'

  import PersonDetail from './PersonDetail'

  export default {
    name: "wode",
    data() {
      return {}
    },
    methods: {},
    components: {
      Header,
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
