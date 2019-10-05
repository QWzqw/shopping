<template>
  <div>
    <!-- bannerList -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperList"
                     :key="item.id">
        <img :src="item.imgUrl">
      </mt-swipe-item>
    </mt-swipe>

    <!-- iconList -->
    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 "
          v-for="item in iconList"
          :key="item.id">
        <router-link to="/home/newslist">
          <img :src="item.imgUrl"
               class="icon-content">
          <div class="mui-media-body">{{item.desc}}</div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      swiperList: [],
      iconList: []
    }
  },
  created () {
    this.getswiper()
  },
  methods: {
    getswiper () {
      this.$http.get('./api/index.json').then(res => {
        console.log(res)
        res = res.body
        if (res.ret && res.data) {
          res = res.data
          this.swiperList = res.swiperList
          this.iconList = res.iconList
        } else {
          Toast('加载失败,请联系工作人员')
        }
        console.log(this.swiperList)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.mint-swipe
  height 10rem /* 160/16 */
  .mint-swipe-item
    &:nth-child(1)
      background-color pink
    &:nth-child(2)
      background-color hotpink
    &:nth-child(3)
      background-color lightpink
.mui-grid-view.mui-grid-9
  background-color #fff
  border-right 0
  border-bottom 0
  .mui-table-view-cell
    border-right 0
    border-bottom 0
.icon-content
  width 80%
</style>
