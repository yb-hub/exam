// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入vuex中的store
import store from './vuex'
import router from './router'
//引入mint-ui组件
import 'mint-ui/lib/style.css'
import {Field,Button,Header,Tabbar,TabItem,Swipe,SwipeItem,Search,Badge} from 'mint-ui'

Vue.config.productionTip = false
Vue.component(Field.name,Field)
Vue.component(Button.name,Button)
Vue.component(Header.name,Header)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Search.name,Search)
Vue.component(Badge.name,Badge)

//引入cube-ui
import {Style, ScrollNav} from 'cube-ui'
// Vue.use(Style)
Vue.use(ScrollNav)

//全局引入ElementUI
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

//引入过滤器
import './filters'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
