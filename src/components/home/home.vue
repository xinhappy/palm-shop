<template>
  <div class="homeRoom">
    <div class="info">
      <div class="clearfix">
        <a class="msg fr"></a>
        <a class="set fr"></a>
      </div>
      <div class="info_msg clearfix">
        <div class="head_img">
          <img :src="headImg" class="img-responsive" alt="">
        </div>
        <div class="account">
          18768821342
        </div>
      </div>
    </div>
    <group gutter="0">
      <cell title="用户信息" is-link>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/info.png">
      </cell>
      <cell title="我的账户" is-link>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/account.png">
      </cell>
      <cell title="已订业务" is-link>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/ye.png">
      </cell>
      <cell title="我的订单" is-link>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/order.png">
      </cell>
      <cell title="修改绑定手机" is-link>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/gai.png">
      </cell>
    </group>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from 'components/footer/footer'
  import { Cell, Group } from 'vux'
  import HeadImg from './images/head_img.png'
  export default {
    components: {
      'v-footer': Footer,
      Cell,
      Group
    },
    data() {
      return {
        headImg: HeadImg
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .homeRoom{
    .info{
      background: url("./images/title_blue.png");
      padding: 2vw 2vw 4vw 4vw;
      .msg{
        background: url(./images/msg.png) no-repeat;
        width: 5vw;
        height: 5vw;
        background-size: contain;
      }
      .set{
        background: url(./images/set.png) no-repeat;
        width: 5vw;
        height: 5vw;
        background-size: contain;
        margin-right: 2vw;
      }
      .info_msg{
        color: #fff;
        display: flex;
        display: -webkit-flex;
        align-items:center;
        .head_img{
          border: none;
          border-radius: 50% 50%;
          width: 13vw;
          height: 13vw;
          overflow: hidden;
        }
        .account{
          margin-left: 3vw;
          font-size: 4vw;
        }
      }
    }
  }
</style>
