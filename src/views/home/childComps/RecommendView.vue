<!-- 推荐信息 -->
<template>
    <div class="recommends">
        <div v-for="item in recommends" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props: {
            recommends: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
            };
        },

        components: {},

        computed: {},

        methods: {}
    }

</script>
<style scoped>
    .recommends {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 14px;
        border-bottom: 10px solid #eee;
    }

    .recommends-item {
        flex: 1;
    }

    .recommends-item img {
        width: 70px;
        height: 70px;
    }
</style>