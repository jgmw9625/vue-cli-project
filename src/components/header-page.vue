<template lang="pug">
  .header-page
    el-button(@click="handleLogout" type="primary") 登出

</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index'

export default {
  name: 'header-page',

  computed: {
    ...mapState([
      'isLogin',
    ]),
  },

  methods: {
    handleLogout () {
      store.commit('isLogin')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-page {
  margin: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
