<template>
  <div>
    <Banner :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    >
    </Banner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="categoryList"></DetailList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/Banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}

</script>

<style>
  .content {
    height: 40rem;
  }

</style>
