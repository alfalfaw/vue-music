<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'Scroll',
  props: {
    top: {
      type: Number,
      required: true
    },

    list: {
      type: Array,
      required: true
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    initScroll() {
      this.$refs.wrapper.style.top = this.top + 'px'
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    this.initScroll()
  },
  watch: {
    // 数据加载完成后进行刷新
    list() {
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
