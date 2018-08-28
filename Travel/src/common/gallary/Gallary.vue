<template>
  <div :class="$style.container" @click="handleShowGallary">
    <div :class="$style.wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in imgs" :key="item">
          <img :class="$style.gallary_img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallry',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleShowGallary () {
      this.$emit('close')
    }
  }
}

</script>

<style>
  .swiper-container {
    overflow: inherit;
  }

  .swiper-pagination {

    color: #fff;
    bottom: -1rem;
    z-index: 101;

  }

</style>

<style lang="scss" module>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    z-index: 100;
    .wrapper {
      background: #000;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .gallary_img {
        width: 100%;
      }

    }
  }
</style>
