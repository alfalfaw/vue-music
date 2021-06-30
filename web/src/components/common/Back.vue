<template>
  <div class="back">
    <i @click="handleClick" class="iconfont icon-arrow-left"></i>
    <div class="title d-flex ai-center">
      <marquee behavior="scroll" direction="left">{{ title }}</marquee>
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
    position: absolute;
    font-size: 20px;
    top: 50%;
    width: calc(100% - 35px);

    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
