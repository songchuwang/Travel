<template>
  <div :class="$style.header">
    <div :class="$style.headerLeft">
      <div class="iconfont">&#xe624;</div>

    </div>
    <div :class="$style.headerInput">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/主题
    </div>
    <!-- <input type="text" :class="$style.headerInput" placeholder="输入城市/景点/主题"> -->
    <router-link to="/city">
      <div :class="$style.headerRight">
        <span>{{this.city}}</span>
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Home',
  computed: {
    // mapState是指我把vuex里的数据映射到这个组件的computed的计算属性里，
    // 把city这个公用数据映射到映射到名字叫city的计算属性中
    // ...展开运算符
    ...mapState(['city']),
    // 未用到
    ...mapGetters(['doubleCity'])
  }
}

</script>

<style lang="scss" module>
  @import '~@/assets/styles/elements.scss';
  .header {
    display: flex;
    height: .86rem;
    line-height: .86rem;
    background: $bgcolor;
    color: #fff;
    box-sizing: border-box;

    .headerLeft {
      width: .64rem;
      float: left;
      font-size: .32rem;
      text-align: center;
    }
    .headerInput {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      padding-left: .15rem;
      font-size: .32rem;
      background: #fff;
      box-sizing: border-box;
      border-radius: .1rem;
      margin-top: .12rem;
      margin-bottom: .12rem;
      margin-left: .2rem;
      margin-right: .1rem;
      color: #ccc;
      border: 0;
    }
    .headerRight {
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      font-size: .32rem;
      text-align: center;
      color: #fff;
      .arrow-icon {
        text-align: left;
        font-size: .24rem;
      }
      a {
        text-decoration: none;
      }
    }
  }

</style>
