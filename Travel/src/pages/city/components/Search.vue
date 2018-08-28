<template>
  <div>
    <div :class="$style.search">
      <input v-model="keyword" type="text" :class="$style.searchInput" placeholder="输入城市名或拼音">
    </div>
    <div :class="$style.search_content" ref="search" v-show="keyword">
      <ul>
        <li :class="$style.search_item" v-for="item in list"
        :key="item.id" @click="handleCityClick(item.name)">
        {{item.name}}
        </li>
        <li :class="$style.search_item" v-show="hasItem">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      // 做节流
      timer: null
    }
  },
  computed: {
    hasItem () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}

</script>

<style lang="scss" module>
  .search {
    height: .72rem;
    background: #00bcd4;
    box-sizing: border-box;
    padding: 0.05rem .1rem .1rem .1rem;
    .searchInput {
      box-sizing: border-box;
      float: left;
      display: inline-block;
      height: .58rem;
      line-height: .58rem;
      width: 100%;
      text-align: center;
      border-radius: .06rem;
      border: 0;
      color: #666;
      padding: 0 .1rem;

    }
  }

  .search_content {
    overflow: hidden;
    background: #eee;
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .search_item {
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background: #fff;
    }
  }

</style>
