<template>
  <div class="main">
    <main-header title="Function Music" @nav-click="toPath"></main-header>
    <router-view />
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'
export default {
  name: 'Main',
  components: {
    MainHeader
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped></style>
