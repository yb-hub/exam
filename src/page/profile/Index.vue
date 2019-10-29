<template>
  <div class="profile">
    <Header header-title="个人中心">
      <div class="header_message" slot="right" @click="toReplyDetail" v-show="userInfo.sno">
        <span class="header_message_text">
          <i class="iconfont iconicoxinxiaoxi"></i>
          <!--显示未读消息条数-->
          <mt-badge type="error" slot="right" size="small"
                    v-show="unreadMsgCount ? true : false">{{unreadMsgCount}}</mt-badge>
        </span>
      </div>

    </Header>

    <section class="profile-number">
      <router-link :to="userInfo.sno ? '/profile/info' : '/login'" class="profile-link">
        <div class="profile_image">
          <img :src="userInfo.stuImgSrc ? userInfo.stuImgSrc : require('../../assets/images/profile.jpg')" alt="学生头像">
        </div>

        <div class="user-info" style="color: black">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.stuName || '登录/注册'}}</p>
          <p>
            <span class="user-icon">
              <i class="iconfont iconshouji"></i>
            </span>
            <span  class="icon-mobile-number">{{userInfo.stuPhone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont iconjiantou"></i>
        </span>
      </router-link>
    </section>

    <section class="profile-items">
      <div @click="toDetail('/profile/stuscore')">
        <ProfileItem title="查看成绩" icon="iconchakan"></ProfileItem>
      </div>
      <div @click="toDetail('/profile/wrongcollection')">
        <ProfileItem title="收藏题目" icon="iconshoucang-"></ProfileItem>
      </div>
      <div @click="toDetail('/profile/examcalendar')">
        <ProfileItem title="考试日历" icon="iconrili2"></ProfileItem>
      </div>
      <div @click="toDetail('/profile/pswchange')">
        <ProfileItem title="密码修改" icon="iconmima"></ProfileItem>
      </div>
      <div @click="toDetail('/profile/infochange')">
        <ProfileItem title="信息修改" icon="iconxinxi"></ProfileItem>
      </div>
      <div @click="toDetail('/profile/feedback')">
        <ProfileItem title="反馈留言" icon="iconyijianfankui"></ProfileItem>
      </div>

      <!--退出登录-->
      <div class="login_out" :class="isSelect?'opacity':''"
           @touchstart="toggleSelect" @touchend="toggleSelect"
           v-show="userInfo.sno" @click="logout">
        退出登录
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../components/common/Header"
  import Footer from "../../components/common/Footer"

  import ProfileItem from "./ProfileItem"

  import {mapState, mapGetters} from 'vuex'

  export default {
    name: "Index",
    components: {
      Header,
      Footer,
      ProfileItem,
    },
    data() {
      return {
        sno: this.$store.state.userInfo.sno,
        isSelect: false
      }
    },
    computed: {
      ...mapState(['userInfo']),
      ...mapGetters(['unreadMsgCount'])
    },
    methods: {
      toggleSelect(){
        this.isSelect = !this.isSelect;
      },
      logout(){
        MessageBox.confirm('确定退出登录吗?').then(action => {
          //点击确定按钮操作
          //清空sessionStorage会话
          sessionStorage.clear();
          // 请求退出
          //this.$store.dispatch('logout');
          //清除vuex中feedbackInfo
          //this.$store.dispatch('recordFeedbackInfo', []);
          //清除vuex中unreadMsgCount
          //this.$store.dispatch('resetUnreadMsgCount');
          //清除vuex中examCalendar
          //this.$store.dispatch('recordExamCalendar', []);
          // sessionStorage.removeItem("feedbackInfo");
          Toast({
            message:'退出成功',
            duration: 1500
          });
          this.$router.push('/login')
        },() => {
          //点击取消按钮操作
        })
      },
      toDetail(path){
        if (!this.$store.state.userInfo.sno){
          Toast({
            message:'请先登录系统',
            duration: 1000
          });
          return
        }
        else{
          this.$router.push(path);
        }
      },
      // 获取管理员回复消息信息
      async toReplyDetail(){
        const {sno} = this;
        let result = await reqUpdateFeedbackStatus({sno});
        if (result.statu == 0){
          Toast({
            message: '您有' + result.data + '条未读消息,请查看标记未读消息',
            position: 'bottom',
            duration: 1500
          });
          //重置vuex中feedbackInfo
          this.$store.dispatch('resetUnreadMsgCount');
          //路由跳转
          this.$router.push('/profile/replydetail');
        }
        else if (result.msg == '会话失效，请重新登录') {
          MessageBox.confirm('会话失效，是否重新登录？').then(action => {
            //点击确定按钮操作
            //清空sessionStorage会话
            sessionStorage.clear();
            // 请求退出
            this.$store.dispatch('logout');
            Toast('请重新登录系统');
            this.$router.push('/login')
          }, () => {
            //点击取消按钮操作
          })
        }
        else {
          Toast({
            message: result.msg,
            position: 'bottom',
            duration: 1500
          });
          this.$router.push('/profile/replydetail');
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import "http://at.alicdn.com/t/font_1070199_erifwizjidd.css";
  .profile
    width 100%
    overflow hidden
    padding-bottom 56px
    .profile-number
      margin-top 45.5px
      margin-bottom 20px
      height 100px
      background lightslategrey
      &:active
        opacity 0.8
      .profile-link
        clearFix()
        position relative
        display block
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          img
            height 100%
            width 100%
          .icon-yonghuming
            background #e4e4e4
            font-size 62px
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .icon-msnui-tel
              font-size 14px
              color #fff
        .arrow
          position absolute
          right 0px
          top 80%
          .iconjiantou
            color #fff
            font-size 30px
    .profile-items
      .login_out
        height 50px
        display flex
        justify-content center
        align-items center
        background-color lightslategrey
        margin-top 6px
        color #fff
        //box-shadow 0px 0px 1px rgba(0,0,0,.5)
        &.opacity
          opacity 0.4
          background lightslategrey
</style>
