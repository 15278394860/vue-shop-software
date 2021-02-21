<template>
  <div id="category">
    <!--    导航-->
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
    <scroll class="home-scroll" ref="scroller" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import BackTop from '@/components/content/backtop/BackTop'

  import { getHomeMultidata, getHomeGoods } from '@/network/home'
  export default {
    name: "Category",
    components: {
      NavBar,
      TabControl,
      Scroll,
      GoodsList,
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
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroller.scroll.refresh, 50)
    },
    methods: {
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
        console.log(this.banners);

      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = this.goods[type].page + 1
          console.log(this.goods);
          this.$refs.scroller.scroll.finishPullUp()
        })
      },
      backClick() {
        this.$refs.scroller.scroll.scrollTo(0, 0)
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

        this.$refs.tabControl2.currentIndex = index
      },
      contentScroll(position) {
        // console.log(position);
        this.isShowBackTop = -position.y > 1000

        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
    }
  }

</script>

<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }

  .nav-bar {
    position: relative;
    background-color: rgb(253, 158, 174);
    color: #fff;
    z-index: 3;
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