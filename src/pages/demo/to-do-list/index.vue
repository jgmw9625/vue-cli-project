<template lang="pug">
.to-do-list
  .search-list
    .search-item
      .label-item 紀錄事項
      el-input(v-model="fetchForm.input" placeholder="请输入内容")

    .search-item
      .label-item 456
      el-input(v-model="fetchForm.input2" placeholder="请输入内容")

</template>

<script>
export default {
  name: 'to-do-list',

  data () {
    return {
      fetchForm: {},
    }
  },

  async created () {
    await this.init()
  },

  methods: {
    async init () {
      this.fetchForm = {
        input: '',
        input2: '',
      }
    },
  },
}
</script>

<style lang="scss" scope>
.search-list {
  display: flex;

  .search-item {
    width: 10rem;
    margin: 1rem;
  }
}

</style>
