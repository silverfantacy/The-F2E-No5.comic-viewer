<script>
import axios from 'axios'
import ComicItem from '@/components/ComicItem'
export default {
  name: 'comics',
  components: {
    ComicItem
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    clickHandler(id) {
      this.$router.push('/comics/' + id)
    }
  },
  mounted() {
    axios.get('/api/comics').then(res => {
      this.list = res.data
    })
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
