<!-- 弹出框 -->
<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                isShow: false
            };
        },

        components: {},

        computed: {},

        methods: {
            show(message = '默认文字', duration = 5000) {
                console.log('---');
                this.isShow = true;
                this.message = message
                setTimeout(() => {
                    this.isShow = false
                    this.message = ''
                }, duration)

            }
        }
    }

</script>
<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0, 0, 0, .6);
        z-index: 999;
    }
</style>