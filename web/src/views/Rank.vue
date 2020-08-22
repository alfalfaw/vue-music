<template>
  <div class="rank">
    <rank-list :rank-list="rankList"></rank-list>
  </div>
</template>

<script>
import RankList from '@/components/main/rank/RankList'
export default {
  name: 'Rank',
  components: {
    RankList
  },
  data() {
    return {
      rankList: []
    }
  },
  created() {
    this.fetchRankList()
  },
  methods: {
    async fetchRankList() {
      const res = await this.$http.get('/top/category', {
        params: {
          showDetail: 1
        }
      })
      this.rankList = res.data.data.reduce((total, item) => total.concat(item.list), [])
      console.log(res.data.data)
      console.log(this.rankList)
    }
  }
}
</script>

<style lang="scss" scoped></style>
