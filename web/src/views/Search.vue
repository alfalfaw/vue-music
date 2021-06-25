<template>
  <div class="search">
    <search-box :keyword="keyword" @search="fetchSongs" @keyword-change="handleChange" />
    <hot-list @keyword-change="handleChange" :hotKeys="hotKeys" @search="fetchSongs"></hot-list>
    <search-list :isLoading="isLoading" :search-list="searchList" @page-change="handlePageChange" />
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
      searchList: [],
      isLoading: false
    }
  },
  created() {
    this.fetchHotKeys()
  },
  methods: {
    handleChange(keyword) {
      this.keyword = keyword
    },
    handlePageChange(pageNo) {
      this.fetchSongs(this.keyword, 0, pageNo, false)
    },
    async fetchSongs(key, t = 0, pageNo = 1, reset = true) {
      if (!key.trim()) return
      this.isLoading = true
      const { data: res } = await this.$http.get('/search', {
        params: {
          key,
          t,
          pageNo
        }
      })
      if (reset) {
        this.searchList = res.data.list
      } else if (this.searchList.length !== res.data.total) {
        this.searchList = [...this.searchList, ...res.data.list]
      }
      this.isLoading = false
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
}
</style>
