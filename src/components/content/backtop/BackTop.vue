<!-- 回到顶部按钮 -->
<template>
    <div class="back-top">
        <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
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
    .back-top {
        position: fixed;
        right: 10px;
        bottom: 60px;
    }

    .back-top img {
        width: 41px;
        height: 41px;
    }
</style>