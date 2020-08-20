<template>
  <div class="recommend-swiper">
    <swiper ref="recommendSwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) of swiperList" :key="index">
        <img class="w-100" :src="item.img" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'RecommendSwiper',
  props: {
    swiperList: {
      type: Array,
      required: true
    },
    swiperOption: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
