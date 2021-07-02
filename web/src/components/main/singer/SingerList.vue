<template>
  <div class="singer-list">
    <ul>
      <li @click="handleClick(singer)" v-for="singer of list" :key="singer.singer_id" class="d-flex ai-center px-3 py-3">
        <img :src="singer.singer_pic" style="width:60px;border-radius:50%" />
        <span class="pl-3 text-grey2">{{ singer.singer_name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { PLAYLIST_TYPE } from '@/constants/index'
export default {
  name: 'SingerList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick(item) {
      console.log('打印item')
      console.log(item)
      this.$router.push({
        path: '/playlist',
        query: {
          id: item.singer_mid,
          type: PLAYLIST_TYPE.SINGER
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
