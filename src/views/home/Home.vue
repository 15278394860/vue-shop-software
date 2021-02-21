<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-bar" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"
      v-show="isTabFixed" />
    <scroll class="home-scroll" ref="scroller" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <popular-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import PopularView from './childComps/PopularView'
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/backtop/BackTop'

  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'


  import { getHomeMultidata, getHomeGoods } from '@/network/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      PopularView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false
      }
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroller.scroll.refresh, 50)
      this.$bus.$on('itemImageLoad', () => {
        // console.log('1');
        // refresh()
      })
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
      // 监听图片加载完成
    },
    methods: {
      // 防抖
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })

      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = this.goods[type].page + 1
          // console.log(this.goods);
          this.$refs.scroller.scroll.finishPullUp()
        })
      },
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        this.$refs.scroller.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        // console.log(position);
        this.isShowBackTop = -position.y > 1000

        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      // 上拉加载更多
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

      }



    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {

      this.$refs.scroller.scrollTo(0, this.saveY, 0)
      // this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroller.getScrollY()
    }
  }

</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; 
    z-index: 9;*/
    background-color: rgb(253, 158, 174);
    color: #fff;
  }

  .tab-control {
    position: relative;
    z-index: 9;

  }

  .tab-bar {
    position: relative;
    z-index: 9;
  }

  .home-scroll {
    height: calc(100% - 93px);
    /* position: relative;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden; */
  }
</style>