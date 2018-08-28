<template>
  <div :class="$style.content">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :class="$style.swiperImg" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 导航点
      swiperOption: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true,
        clickable: true
      }

    }
  }
}
</script>

<style lang="scss">
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>

<style lang="scss" module>
  .content {
    width: 100%;
    height: 0;
    padding-bottom: 31.2%;
    .swiperImg {
      width: 100%;
      display: block;
    }
  }
</style>
