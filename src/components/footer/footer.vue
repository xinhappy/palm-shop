<template>
  <div class="footerNav">
    <router-link to="/index" class="item">
      <span class="icon community"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/server" class="item">
      <span class="icon runner"></span>
      <p>服务</p>
    </router-link>
    <router-link to="/home" class="item">
      <span class="icon home"></span>
      <p>我的</p>
    </router-link>
    <div class="clearBoth"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .footerNav {
    background-color: #ffffff;
    width: 100%;
    padding: 1.7vw 0 0;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    border-top: 1px solid #eee;
    .item {
      text-align: center;
      width: 32%;
      height: 100%;
      float: left;
      color: #626262;
      p{
        line-height: 20px;
      }
      .icon {
        height: 20px;
        width: 20px;
        display: block;
        text-align: center;
        margin: 0 auto;
        &.community {
          background: url(./images/index.png) no-repeat;
          background-size: cover;
        }
        &.runner {
          background: url(./images/ser.png) no-repeat;
          background-size: cover;
        }
        &.home {
          background: url(./images/my.png) no-repeat;
          background-size: cover;
        }
      }
      &.router-link-active {
        color: #329dff;
        .community {
          background: url(./images/index_a.png) no-repeat;
          background-size: cover;
        }
        .runner {
          background: url(./images/ser_a.png) no-repeat;
          background-size: cover;
        }
        .home {
          background: url(./images/my_a.png) no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>
