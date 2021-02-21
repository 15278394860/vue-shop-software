<!-- 底部工具栏 -->
<template>
    <div class="botton-bar">
        <div class="select-all">
            <check-button :is-checked="isSelect" class="check-button" @click.native="checkClick"></check-button>
            <div class="font">全选({{checkLength}})</div>
        </div>
        <div class="total">
            合计:￥{{totalPrice}}
        </div>
        <div class="calculation" @click="purchaseClick">
            去结算
        </div>
    </div>
</template>

<script>
    import CheckButton from '@/components/content/checkButton/CheckButton'
    export default {
        data() {
            return {
            };
        },

        components: { CheckButton },

        computed: {
            totalPrice() {
                return this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.realPrice * item.count
                }, 0).toFixed(2)
            },
            checkLength() {
                return this.$store.state.cartList.filter(item => item.checked).length
            },

            isSelect() {
                // return !(this.$store.state.cartList.filter(item => !item.checked).length)
                if (this.$store.state.cartList.length === 0) return false
                return !this.$store.state.cartList.find(item => !item.checked)
            }

        },

        methods: {
            checkClick() {
                if (this.isSelect) {
                    this.$store.state.cartList.forEach(item => item.checked = false)
                } else {
                    this.$store.state.cartList.forEach(item => item.checked = true)
                }
            },
            purchaseClick() {
                if (!this.isSelect) {
                    this.$toast.show('请选择购买的商品', 2000)
                }
            }
        }
    }

</script>
<style scoped>
    .botton-bar {
        height: 40px;
        position: fixed;
        display: flex;
        bottom: 58px;
        left: 0;
        right: 0;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    }

    .select-all {
        display: flex;
        flex: 1;
        align-items: center;
    }

    .check-button {
        width: 23px;
        height: 23px;
        margin-left: 10px;
    }

    .font {
        margin-left: 5px;
    }

    .total {
        flex: 1;
        line-height: 40px;
    }

    .calculation {
        line-height: 40px;
        text-align: center;
        width: 90px;
        color: #fff;
        background-color: rgb(255, 8, 62);
    }
</style>