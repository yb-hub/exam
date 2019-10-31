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
      path: '/profile',
      name: 'profile',
      component: () => import('../page/profile/Index'),
    },
    {
      path: '/paper',
      name: 'paper',
      component: () => import('../page/paper/Index'),
      children:[
        {
          path:'',
          component:()=>import('../page/paper/PaperList')
        },
        {
          path:'PaperIntroduce',
          name:'paperIntroduce',
          component:()=>import('../page/paper/PaperIntroduce')
        },
        {
          path:'PaperDetail',
          name:"paperDetail",
          component:()=>import('../page/paper/PaperDetail')
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:()=>import('../page/search/Index')
    },
    {
      path:'/test',
      name:'test',
      component:()=>import('../page/test/Index')
    },

  ]
})
