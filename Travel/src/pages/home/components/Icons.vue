<template>
  <div :class="$style.content">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <ul>
          <li :class="$style.item" v-for="item in page" :key="item.id">
            <img :src="item.imgUrl" />
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}

</script>

<style lang="scss" module>
  .content {
    width: 100%;
    height: 4rem;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      box-sizing: border-box;
      flex-wrap: wrap;
      .item {
        width: 25%;
        height: 2rem;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        img {
          padding-top: .15rem;
          width: 1.1rem;
          height: 1.1rem;
        }
        p {
          font-size: .28rem;
          color: #2b2b2b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

</style>
