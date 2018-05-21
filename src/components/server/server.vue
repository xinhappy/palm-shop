<template>
  <div class="serRoom">
    <div class="search">
      <div class="into">
        <i class="icon_s"></i>请输入关键词
      </div>
    </div>
    <div class="clearfix" style="background-color: #fff;padding: 3px;">
      <a class="fl title_blue"></a>
      <p class="fl" style="line-height: 22px;font-size: 16px;">充值缴费</p>
    </div>
    <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="./images/yi.png">
        <span class="grid-center">统一缴费</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/guhua.png">
        <span class="grid-center">固化缴费</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/kuan.png">
        <span class="grid-center">宽带缴费</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/tv.png">
        <span class="grid-center">电视缴费</span>
      </grid-item>
    </grid>
    <div class="clearfix" style="background-color: #fff;padding: 3px;margin-top: 1vw">
      <a class="fl title"></a>
      <p class="fl" style="line-height: 22px;font-size: 16px;">业务查询</p>
    </div>
    <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="./images/xiang.png">
        <span class="grid-center">详单查询</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/yu.png">
        <span class="grid-center">余额查询</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/history.png">
        <span class="grid-center">历史账单</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/dao.png">
        <span class="grid-center">到期查询</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/ying.png">
        <span class="grid-center">营销活动</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/zi.png">
        <span class="grid-center">资费政策</span>
      </grid-item>
    </grid>
    <div class="clearfix" style="background-color: #fff;padding: 3px;margin-top: 1vw">
      <a class="fl title_blue"></a>
      <p class="fl" style="line-height: 22px;font-size: 16px;">业务受理</p>
    </div>
    <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="./images/chu.png">
        <span class="grid-center">初装申请</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/ting.png">
        <span class="grid-center">停机申请</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/fu.png">
        <span class="grid-center">复机申请</span>
      </grid-item>
    </grid>
    <div class="clearfix" style="background-color: #fff;padding: 3px;margin-top: 1vw">
      <a class="fl title"></a>
      <p class="fl" style="line-height: 22px;font-size: 16px;">综合服务</p>
    </div>
    <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="./images/gu.png">
        <span class="grid-center">故障申告</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/gen.png">
        <span class="grid-center">工单追踪</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/tou.png">
        <span class="grid-center">投诉建议</span>
      </grid-item>
    </grid>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from 'components/footer/footer'
  import {Grid, GridItem} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      'v-footer': Footer,
      Grid,
      GridItem
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .serRoom{
    .search{
      background: url("./images/title_blue.png");
      padding: 2vw 3vw;
      .into{
        color: #aaa;
        text-align: center;
        background: url("./images/search.png") no-repeat center;
        background-size: contain;
        .icon_s{
          background: url(./images/search_i.png) no-repeat;
          background-size: contain;
          width: 3vw;
          height: 3vw;
          display: inline-block;
          position: relative;
          top: 1px;
          right: 4px;
        }
      }
    }
    .title{
      background: url("./images/title.png") no-repeat;
      width: 1vw;
      height: 5vw;
      margin: 0 3vw;
    }
    .title_blue{
      background: url("./images/title_blue.png") no-repeat;
      width: 1vw;
      height: 5vw;
      margin: 0 3vw;
    }
  }

  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .weui-grids {
    background-color: #fff;
    .weui-grid{
      padding: 10px 0;
      &:after{
        border-bottom: none;
      }
    }
  }
</style>
