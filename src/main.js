import Vue from 'vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './route/index'
import store from './store/index'
import Page from './pages/index.vue'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: (h) => h(Page),
}).$mount('#app')
