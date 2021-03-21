import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false || localStorage.getItem('loginkey'),
  },
  mutations: {
    isLogin (state) {
      state.isLogin = !state.isLogin
      localStorage.setItem('loginkey', state.isLogin)
    },
  },
})

export default store
