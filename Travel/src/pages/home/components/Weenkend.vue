<template>
  <div :class="$style.content">
    <h4>周末去哪儿</h4>
    <ul>
      <li :class="$style.item" v-for="item in weekendList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div :class="$style.info">
          <p :class="$style.title">{{item.title}}</p>
          <p :class="$style.details">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weenkend',
  props: {
    weekendList: {
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
    display: flex;
    flex-direction: column;
    width: 100%;
    >h4 {
      font-size: .28rem;
      height: .65rem;
      line-height: .65rem;
      padding-left: .2rem;
      background: #F5F5F5;
      font-weight: 500;
    }
    >ul {
      width: 100%;
      box-sizing: border-box;
      .item {
        width: 100%;
        box-sizing: border-box;
        img {
            display: block;
          width: 100%;
          height: 2.84rem;
        }
        .info {
          padding: .10rem .2rem .2rem .2rem;
          box-sizing: border-box;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 2rem;
          }
          .title {
            font-size: .28rem;
            line-height: .46rem;
            color: #212121;
          }
          .details {
            font-size: .24rem;
            line-height: .42rem;
            color: #616161;
          }
        }

      }

    }
  }

</style>
