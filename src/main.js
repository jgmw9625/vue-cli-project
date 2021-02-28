import Vue from 'vue'
import elementUI from 'element-ui'
import index from './pages/index.vue'
import router from './route/index'

Vue.config.productionTip = false
Vue.use(elementUI)

new Vue({
  router,
  render: (h) => h(index),
}).$mount('#app')
