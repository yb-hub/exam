<template>
    <mt-swipe :auto="0"
              :continuous=false
              :showIndicators=false
    class="banner">
      <mt-swipe-item v-for="(question,index) in questions" :key="question.id">
        <!--<div>-->
          <!--<span>(单选)</span>-->
          <!--<span class="title">{{question.title}}</span>-->
          <!--<div class="options">-->
            <!--<div v-for="(value,key,index) in question.options" :key="index"-->
                 <!--@click="selectOption(index,key,question.isSingle)" :class="{active:answer.indexOf(key)!=-1}">-->
              <!--<span v-if="key=='A'" class="iconfont icon-icon-class-a"></span>-->
              <!--<span v-if="key=='B'" class="iconfont icon-icon-class-b"></span>-->
              <!--<span v-if="key=='C'" class="iconfont icon-icon-class-c"></span>-->
              <!--{{value}}-->
            <!--</div>-->
          <!--</div>-->
          <!--<button v-if="questions.length-1 == index" @click="submitTest">提交</button>-->
        <!--</div>-->
        <Question :question="question"></Question>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  import Question from '../paper/Question'
  export default {
    name: "TestDetail",
    components:{
      Question,
    },
    data() {
      return {
        questions: [
          {
            id: 1,
            content: "这是第一题",
            options:[
              {
                key:"A",
                content:"this is afb 这是第一题 fdf 这是第一题 fd 这是第一题 this is afb 这是第一题 fdffadsf这 是第一题 fd 这是第一题"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
              {
                key:"D",
                content:"this is d"
              }
            ]
          },
          {
            id: 2,
            content: "这是第2题",
            options:[
              {
                key:"A",
                content:"this is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb"
              },
              {
                key: "B",
                content: "this is b"
              }
            ]
          },
          {
            id: 3,
            content: "这是第3题",
            options:[
              {
                key:"A",
                content:"this is a"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
              {
                key:"D",
                content:"this is d"
              }
            ]
          }, {
            id: 4,
            content: "这是第4题",
            options:[
              {
                key:"A",
                content:"this is a"
              },
              {
                key: "B",
                content: "this is b"
              },
              {
                key:"C",
                content:"this is c"
              },
            ]
          },
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
      },
      submitTest(){
        alert("Are you sure")
      }
    },
  }
</script>

<style scoped>

  .active{
    background-color: #ccc;
  }

  .banner{
    /*height: calc(100vh - 220px);*/
    height: 100%;
  }
</style>
