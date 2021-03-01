import Vue from 'vue'
import elementUI from 'element-ui'
import index from './index.vue'
import router from './route/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: (h) => h(index),
}).$mount('#app')
