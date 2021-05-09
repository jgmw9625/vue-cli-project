import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'home' },
  //   component: () => import('@/pages'),
  //   children: [
  //     // { path: '/', component: () => import('@/pages/home') },

  //     // {
  //     //   path: '/demo/to-do-list',
  //     //   component: () => import('@/pages/demo/to-do-list/index.vue'),
  //     //   name: '/demo/to-do-list',
  //     // },

  //     // {
  //     //   path: '/demo/test',
  //     //   component: () => import('@/pages/demo/test/index.vue'),
  //     //   name: '/demo/test',
  //     // },
  //   ],
  // },

  {
    path: '/',
    component: () => import('@/pages/home/index.vue'),
    name: '/',
  },
  {
    path: '/demo/to-do-list',
    component: () => import('@/pages/demo/to-do-list/index.vue'),
    name: 'demo/to-do-list',
  },
  {
    path: '/demo/test',
    component: () => import('@/pages/demo/test/index.vue'),
    name: 'demo/test',
  },
  {
    path: '*',
    redirect: { name: '/' },
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    }
  },
  linkExactActiveClass: 'active',
})

export default router
