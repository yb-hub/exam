import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

const state = {
  userInfo:{
    sno:15143325
  },
  unreadMsgCount: 0,//用户我的页面未读消息条数
  isPaperCardShow:false,

}

const getter = {
  unreadMsgCount: state => state.unreadMsgCount
}

const mutations = {
  closePaperCard(state){
    state.isPaperCardShow = false;
  },
  openPaperCard(state){
    state.isPaperCardShow = true;
  }
}

const actions = {
  closePaperCard(context){
    context.commit("closePaperCard")
  },
  openPaperCard(context){
    context.commit("openPaperCard")
  }
}

//创建Vuex实例
const store = new Vuex.Store({
  state,
  getter,
  mutations,
  actions,
})

//导出store
export default store
