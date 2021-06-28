<template>
  <div class="back">
    <i @click="handleClick" class="iconfont icon-arrow-left"></i>
    <div class="title">{{ title }}</div>
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
    position: absolute;
    font-size: 20px;
    top: 50%;

    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
