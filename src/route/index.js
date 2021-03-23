import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/home/index.vue'
import toDoList from '@/pages/demo/to-do-list/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: homePage, name: '/home' },
  { path: '/demo/to-do-list', component: toDoList, name: '/demo/to-do-list' },
  { path: '*', component: homePage },
]

const router = new VueRouter({
  routes,
})

export default router
