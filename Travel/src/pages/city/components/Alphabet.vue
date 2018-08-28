<template>
  <ul :class="$style.list">
    <li v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: {}
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 数据被更新的时候，同时页面完成了自己的渲染之后，updated构造就会执行
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    // 函数节流
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}

</script>

<style lang="scss" module>
  .list {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      text-align: center;
      line-height: .4rem;
      color: #00bcd4;
    }
  }

</style>
