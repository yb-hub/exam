import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home/home'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/home/home'),
    },
    {
      path: '/kechen',
      name: 'kechen',
      component: () => import('../components/kechen/kechen'),
    },
    {
      path: '/wode',
      name: 'wode',
      component: () => import('../components/wode/wode'),
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('../components/common/Search')
    },
    {
      path:'/test',
      name:'test',
      component:()=>import('../components/test/Test')
    },

  ]
})
