<!-- 滚动组件 -->
<template>
    <div ref="wrapper" class="roll">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null,
            }
        },

        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                observeDom: true,
                observeImage: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })

            this.scroll.scrollTo(0, 0)
            // 监听滚动的位置
            this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position)
            })
            this.scroll.refresh()
            // this.scroll.on('pullingUp', () => {
            //     this.$emit('pullingUp')
            // })
            // console.log(this.scroll);

            // console.log('------------');

        },
        updated() {
            // console.log('----');
            this.scroll && this.scroll.refresh()
        },
        methods: {
            scrollTo(x, y, time = 300) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0
            },
            // refresh() {
            //     console.log('----');
            //     this.scroll && this.scroll.refresh()
            // }
        }
    }
</script>

<style scoped>
    .roll {
        overflow: hidden;
    }
</style>