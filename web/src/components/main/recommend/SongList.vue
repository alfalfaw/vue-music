<template>
  <div class="song-list">
    <ul class="pt-3 px-4">
      <li v-for="item of hotSongs" :key="item.id" class="d-flex pb-3">
        <img :src="item.img" alt="" width="60" />
        <div class="d-flex flex-column jc-around ml-3">
          <span class="title fw-5">{{ item.title }}</span>
          <span class="name text-grey2">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    hotSongs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
