<template lang="pug">
el-container.container-all
  el-aside Aside
  el-container.container
    el-header Header
    el-main Main

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
    console.log(this.count)
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
    text-align: center;
    line-height: 60px;
    height: 20% !important;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    width: 200px;
  }

  .el-main {
    border-radius: 5px;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
