<template>
  <div class="search-list mt-3 px-4">
    <ul class="songs px-3">
      <li class="py-1" v-for="item of searchList" :key="item.songid">
        <i class="iconfont icon-gongzhonghaotubiaoshangchuan- fs-sm  text-grey2"></i>
        <span class="ml-2 text-grey2">
          <span>{{ item.songname }}</span> -
          <template v-for="(singer, index) of item.singer">
            <span :key="index">{{ singer.name }}</span>
          </template>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SearchList',
  props: {
    searchList: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.search-list {
  height: calc(100vh - 205px);
  overflow-y: scroll;
}
</style>
