<template>
    <div id="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-button-bar></cart-button-bar>
    </div>
</template>

<script>
    import NavBar from '@/components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartButtonBar from './childComps/CartButtonBar'

    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
            };
        },

        components: {
            NavBar,
            CartList,
            CartButtonBar
        },

        computed: {
            ...mapGetters(['cartLength', 'cartList'])
        },

        mounted() { },

        methods: {}
    }

</script>
<style scoped>
    #cart {
        height: 100vh;
    }

    .nav-bar {
        background-color: rgb(253, 158, 174);
        color: azure;
    }
</style>