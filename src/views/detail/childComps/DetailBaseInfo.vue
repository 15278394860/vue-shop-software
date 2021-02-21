<!-- 商品的基本信息 -->
<template>
    <div v-if="Object.keys(goods).length!==0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="shop-price">
            <span class="f-price">{{goods.newPrice}}</span>
            <span class="u-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="activity">{{goods.discount}}</span>
        </div>
        <div class="columns">
            <span class="columns-0">{{goods.columns[0]}}</span>
            <span class="columns-1">{{goods.columns[1]}}</span>
            <span class="columns-3">{{goods.servies[goods.servies.length-1].name}}</span>
        </div>
        <div class="servies">
            <span v-for="index in goods.servies.length-1" :key="index" class="servies-1">
                <img :src="goods.servies[index-1].icon" alt="">
                <span>{{goods.servies[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props: {
            goods: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
            };
        },

    }

</script>
<style scoped>
    .base-info {
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 1px solid rgb(187, 164, 164);
    }

    .info-title {
        color: #222;
    }

    .shop-price {
        margin-top: 15px;
    }

    .f-price {
        font-weight: 900;
        color: rgb(248, 85, 112);
    }

    .u-price {
        font-size: 12px;
        margin: 0 5px;
        text-decoration: line-through;
    }

    .activity {
        display: inline-block;
        text-align: center;
        line-height: 20px;
        border-radius: 30px 30px 30px 30px;
        background: rgb(248, 85, 112);
        color: azure;
        font-size: 10px;
        width: 60px;
        height: 20px;
    }

    .columns {
        display: flex;
        margin-top: 15px;

    }

    .columns-0,
    .columns-1,
    .columns-3 {
        flex: 1;
        display: inline-block;
        text-align: center;
        margin-top: 15px;
        height: 20px;
        font-size: 10px;
        border-bottom: 1px solid rgb(196, 173, 173);
    }

    .servies {
        /* display: flex; */
        margin: 30px;
        font-size: 10px;
        color: black;

    }

    .servies-1 {
        flex: 1;
        margin-right: 10px;
    }

    .servies img {
        width: 13px;
        height: 13px;

    }
</style>