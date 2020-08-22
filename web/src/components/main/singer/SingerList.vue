<template>
  <div class="singer-list">
    <ul>
      <li v-for="singer of list" :key="singer.singer_id" class="d-flex ai-center px-3 py-3">
        <img :src="singer.singer_pic" style="width:60px;border-radius:50%" />
        <span class="pl-3 text-grey2">{{ singer.singer_name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SingerList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
