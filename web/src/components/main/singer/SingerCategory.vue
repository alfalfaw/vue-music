<template>
  <div class="singer-category pt-2">
    <div v-for="(value, key) of singerCategory" :key="key" class="px-3 ">
      <ul class="d-flex flex-wrap text-grey2 fs-xs">
        <li
          v-for="(category, index) of value"
          :key="category.id"
          class="py-1 px-1 mx-2 mt-3"
          :class="{ active: activeIndex[key] === index }"
          @click="categoryClick(key, index)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singerCategory: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeIndex: {
        sex: 0,
        genre: 0,
        area: 0
      }
    }
  },
  watch: {
    // activeIndex: {
    //   handler(newVal) {
    //     const data = {}
    //     Object.keys(this.singerCategory).forEach(key => {
    //       data[key] = this.singerCategory[key][newVal[key]].id
    //     })
    //     this.$emit('select-changed', data)
    //   },
    //   deep: true
    // }
  },
  methods: {
    categoryClick(key, index) {
      this.activeIndex[key] = index
      const params = {}
      for (const key in this.activeIndex) {
        params[key] = this.singerCategory[key][this.activeIndex[key]].id
      }
      // console.log(params)
      this.$emit('category-click', params)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style';
.active {
  background: map-get($colors, 'primary');
  color: white;
  border-radius: 1rem;
}
</style>
