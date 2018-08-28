import Vue from 'vue'
import Router from 'vue-router'
// @指代src目录
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    // 访问根路径的时候，根路径对应的内容是HelloWorld,
    // HelloWorld是components目录下的一个vue单文件组件

    // 即当用户访问根路径的时候，给用户展示的组件是HelloWorld组件
    path: '/',
    // 给路由项起一个名字，叫Home,组件Home
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    // 动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
