<template>
  <div :class="$style.content">
    <h2>热销推荐</h2>
    <ul>
      <router-link tag="li" :class="$style.item" v-for="item in recommendList" :key="item.imgUrl" :to="'/detail/' + item.id">
        <img :src="item.imgUrl" alt="">
        <div :class="$style.secondary_content">
          <p :class="$style.title">{{item.title}}</p>
          <p :class="$style.describe">{{item.desc}}</p>
          <p :class="$style.details">查看详情</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: {
      type: Array,
      default () {
        return []
      }

    }
  }
}

</script>

<style lang="scss" module>
  .content {
    width: 100%;
    >h2 {
      font-size: .28rem;
      height: .6rem;
      line-height: .6rem;
      background: #F5F5F5;
      padding-left: .2rem;
    }
    >ul {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      li {
        display: flex;
        flex-direction: row;
        height: 2.4rem;
        box-sizing: border-box;
        padding: .18rem;
        img {
          width: 2rem;
          height: 2rem;
          padding-right: .22rem;
        }
        .secondary_content {
          display: flex;
          flex-direction: column;
          padding-top: .22rem;
          .title {
            font-size: .32rem;
          }
          .describe {
            font-size: .30rem;
            padding: .1rem 0;
            color: #999;
          }
          .details {
            font-size: .32rem; //  padding-top: .17rem;
            text-align: center;
            width: 1.6rem;
            padding: .1rem;
            margin-top: .1rem;
            border-radius: .1rem;
            display: inline-block;
            background: #FF9C02;
            color: #fff;
          }
        }
      }
    }

  }

</style>
