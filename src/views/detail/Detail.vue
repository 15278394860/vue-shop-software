<!-- 详情页 -->
<template>
    <div id="detail">
        <detail-nav-bar @titleClick="titleClick" class="detail-nav" ref="nav" />
        <scroll class="content" ref="scroller" :probe-type="3" @scroll="contentScroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods" />
            <detail-shop-info :shop="shop" />
            <detail-image-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
            <detail-param-info ref="params" :paramInfo="paramInfo" />
            <detail-evaluate-info ref="comment" :evaluateInfo="evaluateInfo" />
            <goods-list ref="recommend" :goods="recommends" class="recommends"></goods-list>
        </scroll>
        <detail-botton-bar @addToCart="addToCart"></detail-botton-bar>
        <back-top @click.native="backClick" v-show="isShowBackTop" />
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailImageInfo from './childComps/DetailImageInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailEvaluateInfo from './childComps/DetailEvaluateInfo'
    import DetailBottonBar from './childComps/DetailBottonBar'


    import { getDetail, getRecommend, Goods, Shop, GoodsParam } from '@/network/detail'

    import Scroll from '@/components/common/scroll/Scroll'
    import GoodsList from '@/components/content/goods/GoodsList'
    import BackTop from '@/components/content/backtop/BackTop'
    import Toast from '@/components/common/toast/Toast'
    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailImageInfo,
            DetailParamInfo,
            DetailEvaluateInfo,
            GoodsList,
            DetailBottonBar,
            BackTop,
            Toast
        },
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                evaluateInfo: {},
                recommends: [],
                themeTopYs: [],
                currentIndex: 0,
                isShowBackTop: false,
            };
        },

        created() {
            this.iid = this.$route.params.iid

            getDetail(this.iid).then(res => {
                console.log(res);
                const data = res.result
                this.topImages = res.result.itemInfo.topImages
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
                // this.detailInfo = data.skuInfo
                this.detailInfo = data.detailInfo
                console.log(this.detailInfo);
                console.log('5');
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                if (data.rate.cRate !== 0) {
                    this.evaluateInfo = data.rate.list[0]
                }
                // this.$nextTick(() => {
                //     this.$refs.scroller.scroll.refresh()
                // this.themeTopYs = []
                // this.themeTopYs.push(0)
                // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                // console.log(this.themeTopYs);
                // })
            })

            getRecommend().then(res => {
                this.recommends = res.data.list
            })


        },
        updated() {

        },
        methods: {
            imageLoad() {
                this.$refs.scroller.scroll.refresh()
                this.themeTopYs = []
                this.themeTopYs.push(0)
                this.themeTopYs.push(this.$refs.params.$el.offsetTop)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
                this.themeTopYs.push(Number.MAX_VALUE)
                console.log(this.themeTopYs);
            },
            titleClick(index) {
                this.$refs.scroller.scrollTo(0, -this.themeTopYs[index], 200)
            },
            contentScroll(position) {
                // console.log(position);
                const positionY = -position.y
                let length = this.themeTopYs.length
                for (let i = 0; i < length - 1; i++) {
                    if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
                        this.currentIndex = i;
                        this.$refs.nav.currentIndex = this.currentIndex
                    }
                }

                this.isShowBackTop = -position.y > 1000
            },
            backClick() {
                this.$refs.scroller.scroll.scrollTo(0, 0)
            },
            addToCart() {
                // 获取购物车需要展示的信息加入购物车
                const product = {}
                product.image = this.topImages[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.newPrice;
                product.realPrice = this.goods.realPrice;
                product.iid = this.iid;

                // this.$store.commit('addCart', product)
                this.$store.dispatch('addCart', product).then(res => {
                    console.log(res);
                    this.$toast.show(res, 2000)
                    console.log(this.$toast);
                })

                console.log(product);
            }
        }
    }

</script>
<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px);
    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: rgb(253, 158, 174);
        color: rgb(17, 24, 24);
    }

    .recommends {
        margin-top: 50px;
    }
</style>