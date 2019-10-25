<template>
    <div id="question">
      <div>id:{{question.id}}
      content:{{question.content}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
      props:{
          question:{
            type:Object
          }
      }
    }
</script>

<style scoped>

</style>
