<template>
  <div class="hot-list px-4 pt-2">
    <div class="px-2 text-grey2 d-flex flex-wrap ai-center">
      <div class="mx-2 my-1 item">热搜:</div>
      <div @click="handleClick(item.k)" v-for="(item, index) of hotKeys" :key="index" class="mx-2 my-1 item">
        <i class="iconfont icon-hot fs-sm"></i>{{ item.k }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HotList',
  props: {
    hotKeys: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(keyword) {
      this.$emit('keyword-change', keyword)
      this.$emit('search', keyword)
    }
  }
}
</script>
<style lang="scss" scoped>
.hot-list {
  > div {
    .item {
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      /* color: #000; */
      display: flex;
      align-items: center;

      i {
        color: rgba(253, 80, 91, 0.6);
      }
    }
  }
}
</style>
