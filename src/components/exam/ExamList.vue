<template>
  <div id="ExamList">
    <Header headerTitle="考试"></Header>
    <cube-scroll-nav @change="changeHandler" class="exam-list" ref="scroll">
      <cube-scroll-nav-panel
        v-for="(examItem,index) in examList" :key="index" :label="examItem.category">
        <ul>
          <li v-for="(paper,index) in examItem.paperList">
            <div>
              <ExamItem :paper="paper"></ExamItem>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <BackTop @click.native="backTop"></BackTop>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import BackTop from '../common/BackTop'

  import ExamItem from './ExamItem'

  export default {
    name: "ExamList",
    components: {
      Header,
      BackTop,
      ExamItem,
    },
    data() {
      return {
        examList: [
          {
            category:"语文",
            paperList:[
              {id:1,
              title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
              {id:1,
                title:"第一单元测试"
              },
            ]
          },
          {
            category:"数学",
            paperList:[
              {id:2,
                title:"第一单元测试"
              },
              {id:2,
                title:"第一单元测试"
              },
              {id:2,
                title:"第一单元测试"
              },
              {id:2,
                title:"第一单元测试"
              },
              {id:2,
                title:"第一单元测试"
              },
            ]
          },
          {
            category:"英语",
            paperList:[
              {id:3,
                title:"第一单元测试"
              },
            ]
          },
          {
            category:"科学",
            paperList:[
              {id:4,
                title:"第一单元测试"
              },
            ]
          },
          {
            category:"社会",
            paperList:[
              {id:5,
                title:"第一单元测试"
              },
            ]
          },
          {
            category:"社会1",
            paperList:[
              {id:5,
                title:"第一单元测试"
              },
            ]
          },

          {
            category:"社会2",
            paperList:[
              {id:5,
                title:"第一单元测试"
              },
            ]
          },

        ]
      }
    },
    methods:{
      changeHandler(label) {
        console.log('changed to:', label)
      },
      backTop(){
        console.log("backtop");
        //根据ref获取cube-scroll组件，修改其active属性,并调用其内部scrollTo方法
        console.log(this.$refs.scroll);
        this.$refs.scroll.active = this.examList[0].category
        this.$refs.scroll.scrollTo(0,0)
      }
    },
  }
</script>

<style scoped>
  .exam-list{
  height:calc(100vh - 100px)
  }
</style>
