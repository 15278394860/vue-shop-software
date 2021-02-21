<!-- 详情轮播图 -->
<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="item in topImages">
                <a :href="item.link">
                    <img :src="item" alt="">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperItem } from '@/components/common/swiper'
    export default {
        props: {
            topImages: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isLoad: false
            }
        },
        components: {
            Swiper,
            SwiperItem,

        },

    }

</script>
<style scoped>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>