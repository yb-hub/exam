<template>
    <mt-swipe :auto="0"
              :continuous=false
              :showIndicators=false
    class="banner">
      <mt-swipe-item v-for="question in questions" :key="question.id">
        <div>
          <span>(单选)</span>
          <span class="title">{{question.title}}</span>
          <div class="options">
            <div v-for="(value,key,index) in question.options" :key="index"
                 @click="selectOption(index,key,question.isSingle)" :class="{active:answer.indexOf(key)!=-1}">
              <span v-if="key=='A'" class="iconfont icon-icon-class-a"></span>
              <span v-if="key=='B'" class="iconfont icon-icon-class-b"></span>
              <span v-if="key=='C'" class="iconfont icon-icon-class-c"></span>
              {{value}}
            </div>
          </div>
        </div>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  export default {
    name: "TestDetail",
    components:{
    },
    data() {
      return {
        questions: [
          {
            id: 1,
            title: "this is question1,请问下列哈哈哈哈哈哈哈哈哈哈哈哈哈",
            isSingle: true,
            options: {
              A: "this is A",
              B: "this is B",
              C: "this is C",
              D: "this is D",
            }
          },
          {
            id: 2,
            title: "this is question2,请问下列哈哈哈哈哈哈哈哈哈哈哈哈哈",
            isSingle: true,
            options: {
              A: "this is A",
              B: "this is B",
              C: "this is C",
              D: "this is D",
            }
          },
          {
            id: 3,
            title: "this is question3,请问下列哈哈哈哈哈哈哈哈哈哈哈哈哈",
            isSingle: true,
            options: {
              A: "this is A",
              B: "this is B",
              C: "this is C",
              D: "this is D",
            }
          }
        ],
        answer: [],
      }
    },
    methods: {
      selectOption(index, answer, isSingle) {
        console.log(answer);
        if (isSingle) {
          //替换答案
          this.$set(this.answer, 0, answer)
        } else {
          //判断是否已选，已选则删除，未选则添加
          if (this.answer.indexOf(answer) != -1) {
            console.log(this.answer.indexOf(answer));
            var index = this.answer.indexOf(answer)
            this.answer.splice(index, 1)
          } else {
            this.answer.push(answer)
          }
        }
        console.log(this.answer);
      }
    },
  }
</script>

<style scoped>
  @import "../../assets/test/options/A/iconfont.css";
  @import "../../assets/test/options/B/iconfont.css";
  @import "../../assets/test/options/C/iconfont.css";
  
  .active{
    background-color: #ccc;
  }
  
  .banner{
    height: 100%;
  }
</style>
