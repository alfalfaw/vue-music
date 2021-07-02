<template>
  <div class="back d-flex">
    <i @click="handleClick" class="iconfont icon-arrow-left"></i>
    <div class="title d-flex ai-center">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  },
  methods: {
    handleClick() {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  position: relative;
  .iconfont {
    font-size: 30px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
