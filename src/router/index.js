import Vue from 'vue'
import Router from 'vue-router'
// import Comics from '@/pages/Comics'

Vue.use(Router)

export default new Router({
  routes: [
    //  效能較低  下面的是不會每一頁都load進來
    // {
    //   path: '/comics',
    //   name: 'Comics',
    //   component: Comics
    // },
    {
      path: '/comics',
      name: 'Comics',
      component: () => import('@/pages/Comics')
    },
    {
      path: '/comics/:id',
      name: 'ComicDetail',
      component: () => import('@/pages/ComicDetail')
    },
    {
      path: '/comics/:id/chapter/:cid',
      name: 'ComicChapter',
      component: () => import('@/pages/ComicChapter')
    },
    {
      path: '*',
      redirect: '/comics'
    }
  ]
})
