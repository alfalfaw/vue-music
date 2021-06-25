<template>
  <div class="search-list mt-3 px-4" ref="songListRef">
    <!-- <div class="px-3 fs-lg">共有100条搜索结果</div> -->
    <!-- <div>
      11/99
    </div> -->
    <ul class="songs px-3">
      <li class="py-2" v-for="item of searchList" :key="item.songid">
        <div class="d-flex jc-between ai-center">
          <div>
            <h4>{{ item.songname }}</h4>
            <div class="text-grey2">
              {{ singerText(item.singer) }}
            </div>
          </div>
          <div>
            <i class="iconfont icon-play "></i>
            <i class="iconfont icon-ellipsis ml-2"></i>
            <!-- <i class="iconfont icon-gongzhonghaotubiaoshangchuan- fs-sm  text-grey2"></i> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SearchList',
  props: {
    searchList: {
      type: Array
    },
    isLoading: {
      type: Boolean
    }
  },
  data() {
    return {
      pageNo: 1
    }
  },
  computed: {
    singerText() {
      return list => {
        const names = list.map(item => item.name)
        return names.join('/')
      }
    }
  },
  methods: {
    async onScroll(e) {
      const distance = this.$refs.songListRef.scrollHeight - this.$refs.songListRef.scrollTop - this.$refs.songListRef.offsetHeight

      if (!this.isLoading && distance < 150) {
        this.pageNo++
        this.$emit('page-change', this.pageNo)
      }
    }
  },
  mounted() {
    this.$refs.songListRef.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    this.$refs.songListRef.removeEventListener(this.onScroll)
  }
}
</script>
<style lang="scss" scoped>
.search-list {
  height: calc(100vh - 205px);
  overflow-y: scroll;
  .songs {
    background: white;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
    li {
      border-bottom: 1px solid #eeeeee;
    }
  }
}
</style>
