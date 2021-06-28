<template>
  <div class="player">
    <div class="background">
      <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000003sFPVI1XSfp2_1.jpg?max_age=2592000" alt="" />
    </div>
    <div class="content d-flex flex-column">
      <div class="flex-1 d-flex flex-column">
        <section>
          <back @back="handleBackClick" />
        </section>
        <section class="flex-1 d-flex jc-center">
          <lyric />
        </section>
      </div>

      <section>
        <control />
      </section>
    </div>
  </div>
</template>
<script>
import Lyric from '@/components/main/player/Lyric'
import Back from '@/components/common/Back'
import Control from '@/components/main/player/Control'
export default {
  name: 'Player',
  components: {
    Lyric,
    Back,
    Control
  },

  created() {
    this.$store.commit('updateMainNav', false)
  },
  beforeDestroy() {
    this.$store.commit('updateMainNav', true)
    console.log('destroy')
  },
  methods: {
    handleBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  /* z-index: -1; */
  opacity: 0.6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  img {
    width: 100%;
    height: 100vh;
  }
}
.content {
  position: relative;
  z-index: inherit;
}
</style>
