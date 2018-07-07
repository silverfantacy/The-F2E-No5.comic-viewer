<script>
export default {
  name: 'imageArea',
  props: {
    src: {
      type: String, // 一定要字串,數字報錯
      required: true // 一定要有資料,空白報錯
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
