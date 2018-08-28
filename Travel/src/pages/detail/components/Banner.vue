<template>
  <div>
    <div :class="$style.banner" @click="handleShowGallary">
      <img :class="$style.banner_img" :src="this.bannerImg" />
      <div :class="$style.banner_info">
        <div :class="$style.banner_title">{{this.sightName}}</div>
        <div :class="$style.banner_number">
          <span class="iconfont">&#xe796;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }

}

</script>

<style lang="scss" module>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner_img {
      width: 100%;
    }
    .banner_info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      .banner_title {
        flex: 1;
        color: #fff;
        font-size: .32rem;
        padding: 0 .2rem;
        font-weight: 500;
      }
      .banner_number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        margin-right: .1rem;
        border-radius: .2rem;
        font-size: .24rem;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        >span {
          height: .32rem;
          line-height: .32rem;
          margin-right: .05rem;
        }
      }
    }
  }

</style>
