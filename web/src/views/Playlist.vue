<template>
  <div class="playlist">
    <section class="back-wapper">
      <back @back="handleBackClick" :title="title" />
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
          <div class="fs-md ml-3 flex-1">
            <div class="songname">{{ nameText(item) }}</div>
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
import { PLAYLIST_TYPE } from '@/constants/index'

export default {
  name: 'Playlist',
  components: {
    Back
  },
  data() {
    return {
      songlist: [],
      title: ''
    }
  },
  created() {
    console.log(this.type)
    this.$store.commit('updateMainNav', false)
    this.fetchSongList()
  },
  computed: {
    singerText() {
      return list => {
        const names = list.map(item => item.name)
        return names.join('/')
      }
    },
    nameText() {
      return item => {
        if (this.type === PLAYLIST_TYPE.RECOMMEND) {
          return item.songname
        } else if (this.type === PLAYLIST_TYPE.SINGER) {
          return item.name
        } else if (this.type === PLAYLIST_TYPE.RANK) {
          return item.name
        }
        return ''
      }
    },
    cover() {
      if (this.songlist.length > 0) {
        return this.songlist[0].songmid
      } else {
        return ''
      }
    },
    type() {
      return +this.$route.query.type
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
      // RECOMMEND: 1,
      // SINGER: 2,
      // RANK: 3
      const { type } = this.$route.query
      const urls = {
        // 推荐
        1: '/songlist',
        // 获取歌手热门歌曲
        2: '/singer/songs',
        // 排行榜单详情
        3: '/top'
      }
      const config = {
        1: 'id',
        2: 'singermid',
        3: 'id'
      }
      console.log(urls[+type])

      const { data: res } = await this.$http.get(urls[+type], {
        params: {
          [config[+type]]: this.$route.query.id
        }
      })
      console.log('打印歌单详情')
      console.log(res)

      switch (+type) {
        case PLAYLIST_TYPE.RECOMMEND:
          this.songlist = res.data.songlist
          this.title = res.data.dissname
          break

        case PLAYLIST_TYPE.SINGER:
          this.songlist = res.data.list
          this.title = res.data.singer.name
          break

        case PLAYLIST_TYPE.RANK:
          this.songlist = res.data.list
          this.title = res.data.info.title
          break
      }
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
      width: 36px;
      font-size: 24px;
      color: #1a73e8;
    }
  }
}
</style>
