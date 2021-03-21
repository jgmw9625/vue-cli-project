<template lang="pug">
login(v-if="!isLogin")
el-container.container-all(v-else)
  el-aside
    aside-page
  el-container.container
    el-header
      header-page
    el-main
      router-view

</template>

<script>
import login from '@/pages/login/index.vue'
import { mapState } from 'vuex'
import asidePage from '@/components/aside-page.vue'
import headerPage from '@/components/header-page.vue'

export default {
  name: 'index-page',

  components: {
    login,
    asidePage,
    headerPage,
  },

  props: {

  },

  data () {
    return {
    }
  },

  watch: {
  },

  computed: {
    ...mapState([
      'isLogin',
    ]),
  },

  created () {
  },

  mounted () {
  },

}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .container-all {
    display: flex;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    height: 20% !important;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    width: 200px;
  }

  .el-main {
    border-radius: 5px;
    background-color: #E9EEF3;
    color: #333;
    height: 77.5%;
    margin: 10px 10px 20px 10px;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
