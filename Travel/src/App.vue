<template>
  <div id="app">
    <!-- 路由内容被加载过一次之后，就把路由中的内容放到内存之中
        下一次再进这个路由的时候，不需要重新渲染这个组件和去重新执行钩子函数 -->
    <keep-alive>
      <!-- router-view显示的是当前路由地址所对应的路由内容 -->
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
// .vue单文件组件,App.vue是整个应用的根组件
export default {
  name: 'App'
}

</script>

<style>
</style>
