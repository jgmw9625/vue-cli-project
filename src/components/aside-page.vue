<template lang="pug">
.aside-page
  el-menu(
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  )

    h1.title title

    el-submenu(v-for="(item, index) in menuList" :index="index.toString()")
      template(slot="title") {{ item.label }}
      el-menu-item(
        v-for="(sunItem, subIndex) in item.children"
        :index="index.toString() + subIndex.toString()"
      ) {{ sunItem.label }}

</template>

<script>
export default {
  name: 'aside-page',

  data () {
    return {
      menuList: [],
    }
  },

  async created () {
    await this.init()
  },

  methods: {
    init () {
      this.setMenuList()
    },

    setMenuList () {
      this.menuList = [
        {
          value: 1,
          label: 'label1',
          children: [
            {
              value: 11,
              label: 'label11',
            },
            {
              value: 12,
              label: 'label12',
            },
          ],
        },
        {
          value: 2,
          label: 'label2',
          children: [
            {
              value: 21,
              label: 'label21',
            },
          ],
        },
        {
          value: 3,
          label: 'label3',
          children: [
            {
              value: 31,
              label: 'label31',
            },
          ],
        },
        {
          value: 4,
          label: 'label4',
          children: [
            {
              value: 41,
              label: 'label41',
            },
          ],
        },
        {
          value: 5,
          label: 'label5',
          children: [
            {
              value: 51,
              label: 'label51',
            },
          ],
        },
      ]
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
