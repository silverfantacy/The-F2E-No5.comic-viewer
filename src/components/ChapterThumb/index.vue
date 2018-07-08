<script>
export default {
  name: 'chapterThumb',
  props: {
    page: {
      type: Number,
      default: 0
    },
    pages: {
      type: Array,
      required: true
    },
    pchapter: {
      type: Object,
      default: null
    },
    nchapter: {
      type: Object,
      default: null
    }
  },
  methods: {
    clickHandler(page) {
      this.$emit('update:page', page) // $emit把事件傳到外層
    }
  },
  watch: {
    page() {
      if (!this.$el) return false
      // this.$el是div class="chapterThumb"
      let el = this.$el.querySelector('ul')
      this.$nextTick(() => {
        // watch到資料更新但畫面還沒更新，所以要.$nextTick等畫面更新
        let target = el.querySelector('li.active')
        if (!target) return false
        el.scrollLeft =
          target.offsetLeft -
          el.offsetLeft -
          el.offsetWidth / 2 +
          target.offsetWidth / 2
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
