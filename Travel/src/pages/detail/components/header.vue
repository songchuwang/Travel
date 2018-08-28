<template>
  <div>
    <router-link to="/">
      <div :class="$style.header_abs" v-show="showAbs">
        <i class="iconfont header-abs-back">&#xe624;</i>
      </div>
    </router-link>
    <div :class="$style.header_fixed" :style="opacityStyle" v-show="!showAbs">
      <router-link to="/">
        <div class="iconfont city-icon-back">&#xe624;</div>
      </router-link>
      <span :class="$style.title">景点详情</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    hanldeScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.hanldeScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.hanldeScroll)
  }
}

</script>

<style>
  .city-icon-back {
    float: left;
    position: absolute;
    text-align: center;
    width: .64rem;
    margin-left: .15rem;
    box-sizing: border-box;
    color: #fff;
  }

  .header-abs-back {
    color: #fff;
    font-size: .38rem;
  }

</style>

<style lang="scss" module>
  .header_abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    border-radius: .4rem;
    background: rgba(0, 0, 0, 0.7);
  }

  .header_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    background: #00bcd4;
    font-size: .32rem;
    color: #fff;
    box-sizing: border-box;
    z-index: 2;
    .title {
      color: #fff;
    }
  }

</style>
