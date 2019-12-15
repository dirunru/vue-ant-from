import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)
// 解决点击相同路由时的报错问题 --- 版本问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
};
const routes = [
  {
    name: '系统首页',
    path: '/',
    alias: '/home',
    component: Home,
    children: []
  },
  {
    path: '/about',
    name: '综合展示',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
