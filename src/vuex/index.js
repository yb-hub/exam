import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

const state = {
  userInfo:{
    sno:15143325
  },
  headerTitle: "",
  showModal:false,

}

const getter = {}

const mutations = {
  changeHeaderTitle(state, headerTitle) {
    console.log("mutations =====" + headerTitle)
    state.headerTitle = headerTitle
  },
  closeModal(state){
    state.showModal = false;
  },
  openModal(state){
    state.showModal = true;
  }
}

const actions = {
  changeHeaderTitle(context, headerTitle) {
    console.log("actions =====" + headerTitle)
    context.commit("changeHeaderTitle", headerTitle)
  },
  closeModal(context){
    context.commit("closeModal")
  },
  openModal(context){
    context.commit("openModal")
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
