<template>
  <div class="recommend">
    <div class="scroll-wrapper">
      <recommend-swiper v-if="swiperList.length" :swiper-list="swiperList" :swiper-option="swiperOption"></recommend-swiper>
      <song-list :hot-songs="hotSongs"></song-list>
    </div>
  </div>
</template>

<script>
import RecommendSwiper from '@/components/main/recommend/RecommendSwiper'
import SongList from '@/components/main/recommend/SongList'

export default {
  name: 'Recommend',
  components: {
    RecommendSwiper,
    SongList
  },

  data() {
    return {
      swiperList: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      hotSongs: []
    }
  },
  methods: {
    // 获取轮播数据
    async fetchSwiperList() {
      const res = await this.$http.get('recommend/banner')
      this.swiperList = res.data.data.map(item => {
        return {
          img: item.picUrl
        }
      })
      // console.log(this.swiperList)
    },
    // 获取热门音乐
    async fetchHotSongs() {
      const res = await this.$http.get('recommend/playlist/u')
      this.hotSongs = res.data.data.list.map(item => {
        return {
          id: item.content_id,
          img: item.cover,
          title: item.title,
          name: item.username
        }
      })
      console.log(this.hotSongs)
    }
  },
  created() {
    this.fetchSwiperList()

    this.fetchHotSongs()
  }
}
</script>

<style lang="scss" scoped></style>
