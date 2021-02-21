<template>
    <div class="cart-list-item">
        <div class="check-button">
            <CheckButton :is-checked="itemInfo.checked" @click.native="checkClick"></CheckButton>
        </div>
        <div class="photo">
            <img :src="itemInfo.image" alt="">
        </div>
        <div class="title">
            <div class="item-title">{{itemInfo.title}}</div>
            <div class="item-price">{{itemInfo.realPrice}}</div>
            <div class="item-count">x{{itemInfo.count}}</div>
        </div>
    </div>
</template>

<script>
    import CheckButton from '@/components/content/checkButton/CheckButton'
    export default {
        props: {
            itemInfo: {
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
        components: { CheckButton },

        computed: {},

        methods: {
            checkClick() {
                this.itemInfo.checked = !this.itemInfo.checked
            }
        }
    }

</script>
<style scoped>
    .cart-list-item {
        display: flex;
        margin-top: 10px;
        border-bottom: 2px solid rgb(153, 142, 142);
    }

    .photo {
        flex: 1;
    }

    .photo img {
        width: 60px;
        height: 60px;
    }

    .title {
        flex: 3;
        font-size: 15px;
        margin-left: 10px;
        width: 100%;

    }

    .item-title {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        width: 100%;

    }

    .item-price {
        margin-top: 20px;
        float: left;
        font-size: 20px;
        color: rgb(255, 32, 32);
    }

    .item-count {
        margin-top: 20px;
        float: left;
        margin-left: 100px;
        font-size: 18px;


    }

    .check-button {
        margin: 10px 5px;
    }
</style>