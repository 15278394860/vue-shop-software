<!-- 底部购物栏 -->
<template>
  <div class="botton-bar">
    <div class="bar-item">
      <div class="bar-item-1">
        <i></i>
        <span>客服</span>
      </div>
      <div class="bar-item-1">
        <i></i>
        <span>店铺</span>
      </div>
      <div class="bar-item-1">
        <i></i>
        <span>收藏</span>
      </div>
      <div class="bar-item-a">
        <div @click="addToCart">加入购物车</div>

      </div>
      <div class="bar-item-b">
        <span>购买</span>
      </div>
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

    methods: {
      backClick() {
        this.$refs.scroller.scroll.scrollTo(0, 0)
      },
      addToCart() {
        this.$emit('addToCart')
      }

    }
  }

</script>
<style scoped>
  .botton-bar {
    height: 49px;
    background: rgb(255, 255, 255);
    position: relative;


  }

  .bar-item {
    display: flex;
  }

  .bar-item-1 {
    flex: 1;
    text-align: center;
    /* font-size: 14px; */
    line-height: 49px;
    color: rgb(117, 122, 122);
    border-right: 1px solid rgb(218, 201, 201);

  }

  .bar-item-a {
    flex: 2;
    line-height: 49px;
    text-align: center;
    background-color: rgb(243, 177, 202);
    color: rgb(255, 8, 62);
  }

  .bar-item-b {
    flex: 2;
    line-height: 49px;
    text-align: center;
    background-color: rgb(255, 8, 62);
    color: #fff;
  }
</style>