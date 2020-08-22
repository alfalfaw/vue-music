<template>
  <div class="rank-list pt-4">
    <div v-for="rank of rankList" :key="rank.topId" class="d-flex mx-4 mb-4">
      <img :src="rank.picUrl" alt="" width="100px" />
      <ul class="rank d-flex flex-column jc-around px-3 w-100 text-grey2 fs-xs">
        <li v-for="(song, index) of rank.song" :key="index">{{ ++index }}.{{ song.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankList',
  props: {
    rankList: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.rankList)
  }
}
</script>

<style lang="scss" scoped>
.rank-list {
  .rank {
    box-shadow: 8px 5px 14px 0px rgba(0, 0, 0, 0.09);
  }
}
</style>
