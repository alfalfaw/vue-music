<template>
  <div class="main-header">
    <!-- title  -->
    <div class="title text-primary fs-xxl fw-7 text-center">
      {{ title }}
    </div>
    <!-- title end -->

    <!-- nav  -->
    <div class="nav-list">
      <ul class="d-flex jc-around py-3 text-md text-grey2">
        <li
          v-for="item of navList"
          :key="item.path"
          :class="{ 'nav-active': item.path === $route.path || (item.path === '/recommend' && $route.path === '/') }"
          @click="navClick(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    title: {
      type: String,
      default: 'Function Music'
    }
  },
  data() {
    return {
      navList: [
        {
          path: '/recommend',
          name: '推荐'
        },
        {
          path: '/singer',
          name: '歌手'
        },
        {
          path: '/rank',
          name: '排行'
        },
        {
          path: '/search',
          name: '搜索'
        }
      ]
    }
  },
  methods: {
    // 交给父组件处理
    navClick(path) {
      this.$emit('nav-click', path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style';
.nav-active {
  color: map-get($colors, 'primary');
  font-weight: map-get($font-weights, 7);
}
</style>
