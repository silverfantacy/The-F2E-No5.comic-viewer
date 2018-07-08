<script>
import ArrowButton from '@/components/ArrowButton'
import ImageArea from '@/components/ImageArea'
import ChapterThumb from '@/components/ChapterThumb'

function getChapterRoute(id, cid) {
  return {
    name: 'ComicChapter',
    id: id,
    cid: cid
  }
}
export default {
  name: 'comicChapter',
  data() {
    return {
      page: null,
      pages: [],
      pchapter: null,
      nchapter: null,
      chapter: null
    }
  },
  components: {
    ArrowButton,
    ImageArea,
    ChapterThumb
  },
  computed: {
    src() {
      return this.pages[this.page]
    }
  },
  methods: {
    nextHandler() {
      if (this.page < this.pages.length - 1) {
        this.page++
      }
    },
    prevHandler() {
      if (this.page > 0) {
        this.page--
      }
    }
  },
  mounted() {
    this.chapter = this.$route.params.cid * 1
    if (
      // 此段是用來處理沒有資料的部分
      this.chapter % 100 < 1 || // 301/100餘1,小於1沒資料
      this.chapter % 100 > 10 || // 310/100餘10,大於10沒資料
      this.chapter / 100 < 1 ||
      this.chapter / 100 > 4
    ) {
      this.$router.replace({
        name: 'Comics'
      })
    } else {
      this.pages = [
        '/static/images/p1.jpg',
        '/static/images/p2.jpg',
        '/static/images/p3.jpg',
        '/static/images/p4.jpg',
        '/static/images/p5.jpg',
        '/static/images/p6.jpg',
        '/static/images/p7.jpg',
        '/static/images/p8.jpg',
        '/static/images/p9.jpg'
      ]
      this.page = 0
      // this.nchapter = {
      //   name: 'ComicChapter',
      //   id: this.$route.params.id,
      //   cid: this.chapter + 1
      // }
      // this.pchapter = {
      //   name: 'ComicChapter',
      //   id: this.$route.params.id,
      //   cid: this.chapter - 1
      // }
      this.nchapter = getChapterRoute(this.$route.params.id, this.chapter + 1)
      this.pchapter = getChapterRoute(this.$route.params.id, this.chapter - 1)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
