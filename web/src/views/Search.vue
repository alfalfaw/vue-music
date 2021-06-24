<template>
  <div class="search">
    <search-box :keyword="keyword" @search="fetchSongs" @keyword-change="handleChange" />
    <hot-list @keyword-change="handleChange" :hotKeys="hotKeys" @search="fetchSongs"></hot-list>
    <search-list :search-list="searchList" />
  </div>
</template>

<script>
import SearchBox from '@/components/main/search/SearchBox'
import SearchList from '@/components/main/search/SearchList'
import HotList from '@/components/main/search/HotList'

export default {
  name: 'Search',
  components: {
    SearchBox,
    SearchList,
    HotList
  },
  data() {
    return {
      hotKeys: [],
      keyword: '',
      searchList: []
    }
  },
  created() {
    this.fetchHotKeys()
  },
  methods: {
    handleChange(keyword) {
      this.keyword = keyword
    },
    async fetchSongs(key, t = 0) {
      console.log('打印关键字')
      console.log(key)
      if (!key.trim()) return
      const { data: res } = await this.$http.get('/search', {
        params: {
          key,
          t
        }
      })
      console.log('打印搜索结果')
      console.log(res.data)
      this.searchList = res.data.list
    },
    async fetchHotKeys() {
      const { data: res } = await this.$http.get('/search/hot')
      this.hotKeys = res.data.slice(0, 6)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  .top-section {
  }
  .middle-section {
  }
}
</style>
