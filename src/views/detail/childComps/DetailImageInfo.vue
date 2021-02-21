<!-- 图片 -->
<template>
    <div v-if="Object.keys(detailInfo).length!==0">
        <div class="title">
            <div>{{detailInfo.desc}}</div>
        </div>
        <div class="logo">{{detailInfo.detailImage[0].key}}</div>
        <div class="photo"><img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt=""
                @load="imgLoad">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            detailInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                counter: 0,
                imagesLength: 0
            };
        },
        methods: {
            imgLoad() {
                // 判断所有图片加载完了再进行一次回调
                if (++this.counter === this.imagesLength) {
                    this.$emit('imageLoad')
                }
            }
        },
        watch: {
            detailInfo() {
                this.imagesLength = this.detailInfo.detailImage[0].list.length
            }
        }
    }

</script>
<style scoped>
    .title {
        margin-top: 30px;
        font-size: 20px;
        color: rgb(21, 156, 197);
        padding: 15px 15px;

    }

    .logo {
        text-align: center;
        margin: 30px;
        color: rgb(236, 144, 6);
        font-size: 40px;

    }

    .photo img {
        width: 100%;
    }
</style>