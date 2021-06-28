<template>
  <div class="lyric d-flex flex-column" @click="toggle">
    <div class="flex-1">
      <div class="text-center fs-md py-3">李玉刚</div>
      <div v-show="active === 0">
        <div class="cover mt-3 text-center">
          <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000002UYBxp46Cu2g_1.jpg?max_age=2592000" alt="" />
        </div>
        <div class="lyrics text-center mt-4 fs-md">
          是如影随行 还是走走停停
        </div>
      </div>
      <div v-show="active === 1">
        从来就没有什么救世主， 也不靠神仙皇帝！ 要创造人类的幸福， 全靠我们自己！ 我们要夺回劳动果实， 让思想冲破牢笼！ 快把那炉火烧得通红，
        趁热打铁才能成功！
      </div>
    </div>
    <div class="dot-wrapper pb-4 d-flex jc-center">
      <div class="dot" :class="{ 'dot-active': active === 0 }"></div>
      <div class="dot ml-2" :class="{ 'dot-active': active === 1 }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Lyric',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    toggle() {
      this.active = (this.active + 1) % 2
    }
  }
}
</script>
<style lang="scss" scoped>
.lyric {
  /* background: yellowgreen; */
  height: inherit;
  .cover {
    img {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      box-shadow: 0 0 5px 10px rgba(255, 255, 255, 0.3);
    }
  }
  .dot-wrapper {
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 4px;
      background: green;
      transition: 0.3s;
      &.dot-active {
        width: 22px;
      }
    }
  }
}
</style>
