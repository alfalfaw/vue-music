<template>
  <div class="main">
    <main-header v-show="mainNavigationVisible" title="Function Music" @nav-click="toPath"></main-header>

    <keep-alive :exclude="['Player', 'Playlist']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    MainHeader
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['mainNavigationVisible'])
  }
}
</script>

<style lang="scss" scoped></style>
