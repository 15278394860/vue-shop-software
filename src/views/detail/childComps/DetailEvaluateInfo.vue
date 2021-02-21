<!-- 评价 -->
<template>
  <div v-if="Object.keys(evaluateInfo).length!==0">
    <div class="header">
      <div class="user">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="content">
      <img :src="evaluateInfo.user.avatar" alt="">
      <span class="username">{{evaluateInfo.user.uname}}</span>
    </div>
    <div class="evaluate">
      <p>{{evaluateInfo.content}}</p>
      <div class="subhead">
        <span>{{evaluateInfo.created |dateFormat}}</span>
        <span>{{evaluateInfo.style}}</span>
      </div>
      <div class="user-images">
        <img :src="item" v-for="(item,index) in evaluateInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      evaluateInfo: {
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


    methods: {}
  }

</script>
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    height: 30px;
    border-bottom: 1px solid rgb(146, 137, 137);
  }

  .user {
    margin-left: 10px;
  }

  .more {
    margin-right: 10px;
  }

  .content {
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
  }

  .content img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }

  .content .username {
    margin-left: 15px;
    line-height: 50px;
  }

  .evaluate {
    margin: 15px 15px 15px 15px;


  }

  .evaluate p {
    font-size: 14px;
  }

  .evaluate .subhead {
    font-size: 10px;
    margin-top: 15px;
  }

  .user-images {
    margin-top: 15px;
    text-align: left;
    height: 80px;
    border-bottom: 1px solid rgb(139, 127, 127);
  }
</style>