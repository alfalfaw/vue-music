<template>
  <div class="singer">
    <singer-category :singer-category="singerCategory" @category-click="fetchSingerList"></singer-category>
    <singer-list :list="singerList"></singer-list>
  </div>
</template>

<script>
import SingerCategory from '@/components/main/singer/SingerCategory'
import SingerList from '@/components/main/singer/SingerList'
export default {
  name: 'Singer',
  components: {
    SingerCategory,
    SingerList
  },
  data() {
    return {
      singerCategory: {},
      singerList: []
    }
  },
  methods: {
    // 获取歌手分类
    async fetchSingerCategory() {
      const {
        data: { data: category }
      } = await this.$http.get('/singer/category')

      this.singerCategory = {
        sex: category.sex,
        area: category.area,
        genre: category.genre
      }
    },
    async fetchSingerList(params) {
      this.singerList = []
      const res = await this.$http.get('/singer/list', {
        params
      })

      this.singerList = res.data.data.list
      // console.log(this.singerList)
    }
  },
  created() {
    this.fetchSingerCategory()
    this.fetchSingerList()
  }
}
</script>

<style lang="scss" scoped></style>
