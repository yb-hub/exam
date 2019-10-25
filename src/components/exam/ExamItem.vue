<template>
  <div id="ExamItem" style="height: 80px">
    <h1>title:{{paper.title}}</h1>
    <button @click="toExamIntro(paper.id,paper.title)">开始考试</button>
  </div>
</template>

<script>
  export default {
    name: "ExamItem",
    props: {
      paper: {
        type: Object
      }
    },
    methods: {
      toExamIntro(paperId, title) {
        console.log(paperId, title);
        this.$router.push({
          name: 'examIntro', query: {
            paperId: paperId,
            title: title
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
