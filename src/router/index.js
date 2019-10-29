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
      path: '/exam',
      name: 'exam',
      component: () => import('../components/exam/exam'),
      children:[
        {
          path:'',
          component:()=>import('../components/exam/ExamList')
        },
        {
          path:'ExamIntro',
          name:'examIntro',
          component:()=>import('../components/exam/ExamIntro')
        },
        {
          path:'ExamDetail',
          name:"examDetail",
          component:()=>import('../components/exam/ExamDetail')
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
      component:()=>import('../components/test/Test')
    },

  ]
})
