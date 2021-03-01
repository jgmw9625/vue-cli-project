import Vue from 'vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './index.vue'
import router from './route/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: (h) => h(index),
}).$mount('#app')
