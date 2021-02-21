<!-- 选择框 -->
<template>
    <div class="check-button" :class="{check:isChecked}"><img src="@/assets/img/cart/tick.svg" alt=""></div>
</template>

<script>
    export default {
        props: {
            isChecked: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            };
        },

        components: {},

        computed: {},

        methods: {

        }
    }

</script>
<style scoped>
    .check-button {
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }

    .check {
        border-color: red;
        background-color: rgb(250, 11, 11);
    }
</style>