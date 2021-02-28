<template lang="pug">
el-container
  el-aside(width="20vw") Aside
  el-container
    el-header Header
    el-main Main
    el-footer footer

  router-view
</template>

<script>
export default {
  name: 'home-page',
  props: {
    msg: String,
  },

  data () {
    return {
      data: {},
    }
  },

  created () {

  },

}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
