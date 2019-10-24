import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex)

const state = {
  headerTitle: "",
  showList: [],
  showList2: []
}

const getter = {}

const mutations = {
  changeHeaderTitle(state, headerTitle) {
    console.log("mutations =====" + headerTitle)
    state.headerTitle = headerTitle
  },
  show(state, index) {
    if (this.state.showList[index] != undefined) {
      this.$set(this.state.showList, index, !this.state.showList[index]);
      //this.showList.splice(index,1,!this.showList[index])
    } else {
      this.$set(this.state.showList, index, true)
      //this.showList.splice(index,1,true)
      //初始化showList2中的当前索引的数组
      this.$set(this.state.showList2, index, [])
    }
  },
  show2(state,index,index2){
    if (this.state.showList2[index][index2] == undefined) {
      this.$set(this.state.showList2[index], index2, true)
    } else {
      this.$set(this.state.showList2[index], index2, !this.state.showList2[index][index2])
    }
  }
}

const actions = {
  show(context, index) {
    context.commit("show", index)
  },
  show2(context, index,index2) {
    context.commit("show2", index,index2)
  },
  changeHeaderTitle(context, headerTitle) {
    console.log("actions =====" + headerTitle)
    context.commit("changeHeaderTitle", headerTitle)
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
