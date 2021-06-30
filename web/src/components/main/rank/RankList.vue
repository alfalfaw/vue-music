<template>
  <div class="rank-list pt-4">
    <div v-for="rank of rankList" :key="rank.topId" class="d-flex mx-4 mb-4">
      <img :src="rank.picUrl" alt="" width="100px" />
      <ul class="rank d-flex flex-column jc-around px-3 w-100 text-grey2 fs-xs">
        <li @click="handleClick(song)" v-for="(song, index) of rank.song" :key="index">{{ ++index }}.{{ song.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { PLAYLIST_TYPE } from '@/constants/index'
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
  },
  methods: {
    handleClick(item) {
      console.log('打印item')
      console.log(item)
      this.$router.push({
        path: '/playlist',
        query: {
          id: item.topId,
          type: PLAYLIST_TYPE.RANK
        }
      })
    }
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
