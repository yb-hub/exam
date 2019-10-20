<template>
  <div>
    this is kechen
  </div>
</template>

<script>
    export default {
        name: "kechen",
      created(){
        this.$store.dispatch("changeHeaderTitle","课程")
      }
    }
</script>

<style scoped>

</style>
