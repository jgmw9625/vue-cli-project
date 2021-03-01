<template lang="pug">
  .login
    h2 login

    .tab
      .label 帳號
      el-input(v-model="fetchForm.account" placeholder="请输入内容")

    .tab
      .label 密碼
      el-input(v-model="fetchForm.password" placeholder="请输入内容" type="password")

    .tab
      el-button(@click="loginClick" type="primary") 登入

</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index'

export default {
  name: 'login',

  data () {
    return {
      fetchForm: {},
    }
  },

  computed: {
    ...mapState([
      'isLogin',
    ]),
  },

  async created () {
    await this.init()
  },

  methods: {
    // == init ==
    init () {
      this.initFetchForm()
    },

    initFetchForm () {
      this.fetchForm = {
        account: '',
        password: '',
      }
    },

    // == button ==

    loginClick () {
      if (this.fetchForm.account === 'qwew123'
          && this.fetchForm.password === 'qwew123'
      ) {
        store.commit('isLogin')
      } else {
        this.$message('这是一条消息提示')
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: cornflowerblue;
  padding: 40vh 0;
}

.tab {
  display: block;
  margin: 10px;
}

</style>
