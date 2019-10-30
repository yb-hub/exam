<template>
  <div id="question">
    <div class="question-type">(单选题)</div>
    <div class="question-title">
      1.下列描述错误的是:()
    </div>
    <div class="question-options">
      <div v-for="(option,index) in question.options" :key="index" style="display:flex">
        <div class="option-icon">
          {{option.key}}
        </div>
        <div class="option-content">
          {{option.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Question",
    props: {
      question: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  #question {
    display: flex;
    flex-direction: column;

  }

  .question-type {
    text-align: left;
    margin: 8px;
  }

  .question-title {
    text-align: left;
    margin: 8px;
    margin-bottom: 20px;
  }

  .question-options {
    clear: both
  }

  .option-icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 15px;
  }

  .option-content {
    flex:1;
    line-height: 30px;
    word-break: break-word;
    margin: 15px
  }


</style>
