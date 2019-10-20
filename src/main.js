// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入vuex中的store
import store from './vuex'
import router from './router'
//引入mint-ui组件
import 'mint-ui/lib/style.css'
import {Field,Button,Header,Tabbar,TabItem,Swipe,SwipeItem} from 'mint-ui'

Vue.config.productionTip = false
Vue.component(Field.name,Field)
Vue.component(Button.name,Button)
Vue.component(Header.name,Header)
Vue.component(Tabbar.name,Tabbar);
Vue.component(TabItem.name,TabItem);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
