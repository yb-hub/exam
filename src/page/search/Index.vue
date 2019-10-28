<template>
  <div id="search">
    <Header header-title="搜索">
      <div slot="left">
        <span class="iconfont icon-back" @click="back"></span>
      </div>
      <div slot="right">
        <router-link class="header_login" :to="userInfo.sno ? '/profile/info' : '/login'">
        <span class="header_login_text" v-if="!userInfo.sno">
          登录|注册
        </span>
          <span class="header_login_text" v-else>
          <img :src="userInfo.stuImgSrc ? userInfo.stuImgSrc : require('../../assets/images/profile.jpg')"
               class="profile_img" style="width: 30px;border-radius: 50%;margin-top: 6px">
        </span>
        </router-link>
      </div>
    </Header>
    <Search @search="search"></Search>
    <section class="search_no_login" v-if="!userInfo.sno">
      <i class="iconfont icon-sousuo"></i>
      <h3>登录后即可搜索</h3>
      <mt-button @click="$router.push('/login')">立即登录</mt-button>
    </section>

    <!--关键字搜索试卷列表-->
    <PaperList :paperList="paperList"  v-show="!noSearchPapers"></PaperList>

    <section class="search_login" v-if="noSearchPapers && userInfo.sno ">
      <img src="../../assets/images/nopapersearch.png" alt="">
      <h2>{{tips}}</h2>
    </section>
  </div>

</template>

<script>
  import Header from '../../components/common/Header'
  import Search from '../../components/common/Search'

  import PaperList from './PaperList'

  import {mapState} from 'vuex'

  export default {
    name: "Index",
    components: {
      Header,
      Search,
      PaperList,
    },
    data(){
      return {
        keyword: '',
        isSelect:false,
        paperList:[],
        noSearchPapers:true,
        tips:'输入关键字即可搜索'
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      back(){
        this.$router.back(-1)
      },
      search(){
        console.log("开始搜索");
        // this.tips = "没有找到哦，请换个关键字"
        // this.noSearchPapers = true;
        this.paperList=[
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
          {
            paperId:1,
            paperName:"java程序设计考试",
            paperType:1,
            paperDuration:60,
            participateNum:100,
            paperCreateTime:"2019-10-1",
            paperDifficulty:3
          },
        ]

        this.noSearchPapers = false
      },
    }
  }
</script>


<style lang="stylus" scoped>
  @import "../../assets/icon/back/iconfont.css";
  @import "../../assets/icon/search/iconfont.css";

  #search
    padding-top 44px

  .search_no_login
    padding-top 100px
    width 60%
    margin 0 auto
    text-align center
    >i
      display block
      font-size 100px
      color #4ab8a1
    >h3
      padding 20px 0
      font-size 17px
      color #6a6a6a
    >button
      display inline-block
      background #4ab8a1
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px

</style>
