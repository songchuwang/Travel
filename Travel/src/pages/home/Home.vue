<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeenkend :weekendList="weekendList"></HomeWeenkend>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeenkend from './components/weenkend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeenkend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 页面初次加载时执行
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 当页面重新被显示的时候执行
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}

</script>

<style>
</style>
