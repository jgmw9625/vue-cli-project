<template lang="pug">
.test
  .search-list 123

</template>

<script>
export default {
  name: 'test',

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

</style>
