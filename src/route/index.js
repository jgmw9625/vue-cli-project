import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/home/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: homePage },
  { path: '*', component: homePage },
]

const router = new VueRouter({
  routes,
})

export default router
