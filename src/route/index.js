import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/home/index.vue'
import aside from '@/components/asidePage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: homePage },
]

const router = new VueRouter({
  routes,
})

export default router
