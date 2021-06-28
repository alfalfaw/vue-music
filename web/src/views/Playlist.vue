<template>
  <div class="playlist">
    <section class="back-wapper">
      <back @back="handleBackClick" />
    </section>
    <section>
      <div
        class="cover"
        :style="{ backgroundImage: 'url(http://qpic.y.qq.com/music_cover/JwclnudaObJXGgJOkTPBGbAlKc8bQByRzRBUmlcqHcbCv11txcplPQ/300?n=1)' }"
      >
        <div class="play-wrapper">
          <div class="px-3 py-1">
            <i class="iconfont icon-timeout"></i>
            随机播放全部
          </div>
        </div>
      </div>
    </section>

    <section class="mt-4 px-4">
      <ul class="songlist">
        <li class="d-flex ai-start" v-for="(item, index) of songlist" :key="index">
          <div class="order">{{ index + 1 }}</div>
          <div class="fs-md ml-3">
            <div class="songname">{{ item.songname }}</div>
            <div class="singer text-grey2">
              {{ singerText(item.singer) }}
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import Back from '@/components/common/Back'
export default {
  name: 'Playlist',
  components: {
    Back
  },
  data() {
    return {
      songlist: []
    }
  },
  created() {
    this.$store.commit('updateMainNav', false)
    this.fetchSongList()
  },
  computed: {
    singerText() {
      return list => {
        const names = list.map(item => item.name)
        return names.join('/')
      }
    }
  },
  beforeDestroy() {
    this.$store.commit('updateMainNav', true)
    console.log('destroy')
  },
  methods: {
    handleBackClick() {
      this.$router.go(-1)
    },
    async fetchSongList() {
      console.log(this.$route.query)
      const { data: res } = await this.$http.get('/songlist', {
        params: {
          id: this.$route.query.id
        }
      })

      console.log('打印歌单详情')
      console.log(res.data.songlist)
      this.songlist = res.data.songlist
    }
  }
}
</script>
<style lang="scss" scoped>
.playlist {
  .back-wapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    background: white;
  }
  .cover {
    padding-bottom: 70%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    .play-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 111;
      > div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10%;
        border: 1px solid #1a73e8;
        border-radius: 15px;
        color: #1a73e8;
      }
    }
  }
  .songlist {
    position: sticky;

    li + li {
      margin-top: 10px;
    }
    .order {
      width: 26px;
      font-size: 24px;
      color: #1a73e8;
    }
  }
}
</style>
