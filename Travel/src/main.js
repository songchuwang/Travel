// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAweSomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
// 处理可能出现的移动端300毫秒点击事件的问题
fastClick.attach(document.body)
Vue.use(VueAweSomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 在es6中如果键和值相同可以省略一部分内容
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容给用户
