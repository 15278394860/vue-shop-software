<template>
    <div class="cart-list">
        <scroll class="content" ref="scroller">
            <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"></cart-list-item>
        </scroll>
    </div>
</template>

<script>
    import Scroll from '@/components/common/scroll/Scroll'
    import CartListItem from './CartListItem'

    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
            };
        },

        components: {
            Scroll,
            CartListItem
        },

        computed: {
            ...mapGetters(['cartList'])
        },
        activated() {
            this.$refs.scroller.scroll.refresh()
        },
        methods: {}
    }

</script>
<style scoped>
    .cart-list {
        height: calc(100% - 49px - 44px - 40px);
    }

    .content {
        height: calc(100% - 44px);
    }
</style>