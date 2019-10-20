<template>
    <div>
      this is wode
    </div>
</template>

<script>
    export default {
        name: "wode",
      created(){
        this.$store.dispatch("changeHeaderTitle","我的")
      }
    }
</script>

<style scoped>

</style>
