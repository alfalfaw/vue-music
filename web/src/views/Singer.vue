<template>
  <div class="singer">
    <singer-category :singer-category="singerCategory"></singer-category>
    <singer-list></singer-list>
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
      singerCategory: {}
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
      console.log(this.singerCategory)
    },
    async fetchSingerList() {
      const res = await this.$http.get('/singer/list')
      console.log(res.data)
    }
  },
  created() {
    this.fetchSingerCategory()
  }
}
</script>

<style lang="scss" scoped></style>
