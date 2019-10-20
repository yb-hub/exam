import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

const state = {
  headerTitle: ""
}

const getter ={

}

const mutations = {
  changeHeaderTitle(state,headerTitle){
    console.log("mutations ====="+headerTitle)
    state.headerTitle = headerTitle
  }
}

const actions ={
  changeHeaderTitle(context,headerTitle){
    console.log("actions ====="+headerTitle)
    context.commit("changeHeaderTitle",headerTitle)
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
