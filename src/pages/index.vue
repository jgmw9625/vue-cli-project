<template lang="pug">
el-container.container-all
  el-aside Aside
    router-view(name="aside")
  el-container.container
    el-header Header
      router-view(name="header")
    el-main
      router-view

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home-page',
  props: {

  },

  data () {
    return {
      data: {},
    }
  },

  computed: {
    ...mapState([
      'count',
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
    padding: 15px;
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
