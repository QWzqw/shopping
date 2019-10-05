import Vue from 'vue'
import Router from 'vue-router'
import HomeTab from '../components/tab/HomeTab.vue'
import MemberTab from '../components/tab/MemberTab.vue'
import SearchTab from '../components/tab/SearchTab.vue'
import ShopCarTab from '../components/tab/ShopCarTab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirects: '/home' },
    { path: '/home', component: HomeTab },
    { path: '/member', component: MemberTab },
    { path: '/shopcar', component: ShopCarTab },
    { path: '/search', component: SearchTab }
  ],
  linkActiveClass: 'mui-active' // 覆盖原来的路由高亮的属性
})
