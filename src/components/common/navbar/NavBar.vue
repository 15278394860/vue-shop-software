<!-- 导航栏 -->
<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
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
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        box-shadow: 1px 1px 1px rgba(100, 100, 100, .5);

    }

    .left,
    .right {
        width: 60px;
    }

    .center {
        flex: 1;
        text-align: center;
    }
</style>