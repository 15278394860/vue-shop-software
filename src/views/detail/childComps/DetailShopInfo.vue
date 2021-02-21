<!-- 店铺信息 -->
<template>
    <div>
        <div class="logo">
            <img :src="shop.logo" alt="">
            <span class="logo-name">{{shop.name}}</span>
        </div>
        <div class="content">
            <div class="content-left">
                <div class="shop-number">
                    <div>
                        {{shop.sells|sellCountFilter}}
                    </div>
                    <div class="total">总销量</div>
                </div>
                <div class="shop-whole">
                    <div>
                        {{shop.goodsCount}}
                    </div>
                    <div class="total">全部宝贝</div>
                </div>
            </div>
            <div class="content-right">
                <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props: {
            shop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            sellCountFilter: function (value) {
                if (value < 10000) return value;
                return (value / 10000).toFixed(1) + '万'
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
    .logo {
        display: flex;
        margin: 15px 15px;
        /* height: 80px; */
    }

    .logo img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid rgb(226, 203, 203);
    }

    .logo-name {
        line-height: 50px;
        margin-left: 15px;
        color: black;
    }

    .content {
        display: flex;
        margin-top: 30px;
    }

    .content-left {
        flex: 1;
        text-align: center;
        height: 50px;
        border-right: 1px solid red;

    }

    .content-right {
        flex: 1;
        text-align: center;
        margin-left: 10px;
    }

    .shop-number {
        float: left;
        margin-left: 30px;

    }

    .total {
        margin-top: 5px;
        font-size: 10px;
    }

    .shop-whole {
        float: left;
        margin-left: 30px;
    }

    .content-right table {
        font-size: 13px;
        margin-left: 20px;
    }

    .content-right table tr td {
        padding: 1px 5px;
    }

    .content-right .score {
        color: #5ea732;
    }

    .content-right .score-better {
        color: #f13e3a;
    }

    .content-right .better span {
        color: #5ea732;
        background: #5ea732;
        color: #fff;
    }

    .content-right .better-more span {
        color: #f13e3a;
        background: #f13e3a;
        color: #fff;
    }
</style>