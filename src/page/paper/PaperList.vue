<template>
  <div id="PaperList">
    <cube-scroll-nav @change="changeHandler" class="paper-list" ref="scroll">
      <cube-scroll-nav-panel
        v-for="(paperItem,index) in paperList" :key="index" :label="paperItem.category">
        <ul>
          <li v-for="(paper,index) in paperItem.paperList">
            <div>
              <PaperItem :paper="paper"></PaperItem>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
    <BackTop @click.native="backTop"></BackTop>
  </div>
</template>

<script>
  import Header from '../../components/common/Header'
  import BackTop from '../../components/common/BackTop'

  import PaperItem from './PaperItem'

  export default {
    name: "PaperList",
    components: {
      Header,
      BackTop,
      PaperItem,
    },
    data() {
      return {
        paperList: [
          {
            category:"语文",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:1
              },
            ]
          },
          {
            category:"数学",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:100
              },
            ]
          },
          {
            category:"英语",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:100
              },
            ]
          },
          {
            category:"科学",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:100
              },
            ]
          },
          {
            category:"社会",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:100
              },
            ]
          },
          {
            category:"社会1",
            paperList:[
              { id:1,
                paperName:"第一单元测试",
                paperType:1,
                paperCreateTime:"2019-10-1",
                participateNum:100
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
  /*.exam-list{*/
  /*!*height: 400px;*!*/
  /*!*height:calc(100vh - 150px);*!*/
  /*position: absolute;*/
  /*left:0;*/
  /*right:0;*/
  /*top:44px;*/
  /*bottom: 50px;*/
  /*overflow: hidden;*/
  /*}*/
</style>
