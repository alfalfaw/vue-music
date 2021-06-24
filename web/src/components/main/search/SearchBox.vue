<template>
  <div class="search-box pt-4">
    <div class="search-inner text-grey2 mx-4 px-3">
      <i class="iconfont icon-search"></i>
      <input :value="keyword" @input="handleChange" class="px-1" type="text" @keydown.enter="handleSearch" />
      <i @click="$emit('keyword-change', '')" v-show="keyword" class="iconfont icon-searchclose"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBox',
  props: {
    keyword: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChange(e) {
      this.$emit('keyword-change', e.target.value)
    },
    handleSearch() {
      console.log('search something....')
      this.$emit('search', this.keyword)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  .search-inner {
    display: flex;
    background: white;
    align-items: center;
    height: 32px;
    border-radius: 15px;
    input {
      border: none;
      outline: none;
      flex: 1;
    }
  }
}
</style>
