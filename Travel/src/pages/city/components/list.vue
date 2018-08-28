<template>
  <div :class="$style.wrapper" ref="wrapper">
    <div>
      <section :class="$style.content">
        <h4>您的位置</h4>
        <div :class="$style.current">
          <div :class="$style.currentCity">
            {{this.currentCity}}
          </div>
        </div>
      </section>
      <section :class="$style.content">
        <h4>热门城市</h4>
        <div :class="$style.list">
          <div :class="[$style.item]" v-for="item in hotCities" :key="item.id"
               @click="handleCityClick(item.name)">
               {{item.name}}
          </div>
        </div>
      </section>
      <section :class="$style.content" v-for="(item,key) of cities" :key="key" :ref="key">
        <h4>{{key}}</h4>
        <ul :class="$style.site">
          <li v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    },
    hotCities: {
      type: Array,
      default () {
        return []
      }
    },
    letter: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity',city)
      // 使用mapMutations可以改能这样
      this.changeCity(city)
      this.$router.push('/')
    },
    // 有一个mutation叫changeCity,然后把这个mutation映射到这个组件里面一个名字叫做changeCity的方法里
    ...mapMutations(['changeCity'])
  },
  computed: {
    // 把vuex里的公用数据city映射到这个组件的计算属性里，映射过来的名字叫currentcity
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }

}

</script>

<style lang="scss" module>
  .wrapper {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .content {
      >h4 {
        height: .5rem;
        line-height: .5rem;
        font-size: .28rem;
        padding-left: .2rem;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        margin-top: -1px;
        background: #f5f5f5;
        font-weight: 500;
        box-sizing: border-box;
      }
      .current {
        padding: .2rem;
        overflow: hidden;
        .currentCity {
          min-width: 1.2rem;
          padding: 0.1rem .3rem;
          float: left;
          text-align: center;
          border: 1px solid #10B5DF;
          border-radius: .08rem;
          color: #10B5DF;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

        }
      }
      .list {
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        overflow: hidden;
        white-space: normal;
        .item {
          overflow: hidden;
          float: left;
          width: 33.3333%;
          box-sizing: border-box;
          padding: .3rem .4rem;
          text-align: center;
          border-right: .02rem solid #ddd;
          border-bottom: .02rem solid #ddd;

          &:nth-child(3n) {
            border-right: 0;
          }
        }
        .hotCity {
          color: #2b2b2b;
          border-color: #ddd;
        }
      }
      .site {
        display: flex;
        flex-direction: column;
        >li {
          padding: .2rem .2rem;
          border-bottom: 1px solid #ddd;
          box-sizing: border-box;
          font-size: .28rem;
        }
      }
    }

  }

</style>
