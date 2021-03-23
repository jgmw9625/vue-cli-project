<template lang="pug">
.aside-page
  el-menu(
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    unique-opened
  )

    h1.title title

    el-submenu(v-for="(item, index) in MENULIST" :index="index.toString()")
      template(slot="title") {{ item.label }}
      el-menu-item(
        v-for="(sunItem, subIndex) in item.children"
        :index="index.toString() + subIndex.toString()"
        @click="handleMenuClick($event, sunItem.component)"
      ) {{ sunItem.label }}

</template>

<script>
import { MENULIST } from '@/config/site'

export default {
  name: 'aside-page',

  data () {
    return {
      MENULIST,
    }
  },

  methods: {
    handleMenuClick (e, route) {
      if (route && this.$route.name !== `/${route}`) {
        this.$router.push({
          name: '/demo/to-do-list',
        })
      } else if (route === undefined && this.$route.name !== '/') {
        this.$router.push({
          name: '/',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .aside-page {
    width: 300px;
    height: 100%;
    margin: auto;
    background-color: #545c64;

    .el-menu {
      border-right: 0;

      .title {
        display: flex;
        justify-content: center;
        color: #fff;
      }
    }
  }
</style>
