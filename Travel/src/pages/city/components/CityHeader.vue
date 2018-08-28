<template>
  <div :class="$style.header">
    <router-link to="/">
      <div class="iconfont city-icon-back">&#xe624;</div>
      <span :class="$style.title">城市选择</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}

</script>

<style>
  .city-icon-back {
    float: left;
    text-align: center;
    width: .64rem;
    padding-left: .15rem;
    box-sizing: border-box;
    color: #fff;
  }

</style>

<style lang="scss" module>
  .header {
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    background: #00bcd4;
    font-size: .32rem;
    color: #fff;
    box-sizing: border-box;
    .title{
        color: #fff;
    }
  }

</style>
