<script>
import axios from 'axios'

export default {
  name: 'comicDetail',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    axios.get('/api/detail').then(res => {
      this.list = res.data
    })
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
