<template>
  <div class="mainRoom">
    <x-header style="background-color:#329dff;" :left-options="{showBack: false}">
      掌上营业厅
      <x-icon slot="overwrite-left" type="navicon" size="35"
              style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <a slot="right" class="search"></a>
      <a slot="right" class="msg" @click="go('message')"></a>
    </x-header>
    <swiper :list="demo_list" loop auto :aspect-ratio="350/800" dots-position="center"></swiper>
    <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item>
        <img slot="icon" src="./images/chong.png">
        <span class="grid-center">充值缴费</span>
      </grid-item>
      <grid-item link="/query">
        <img slot="icon" src="./images/cha.png">
        <span class="grid-center">业务查询</span>
      </grid-item>
      <grid-item link="/handling">
        <img slot="icon" src="./images/ban.png">
        <span class="grid-center">业务办理</span>
      </grid-item>
      <grid-item link="/tracking">
        <img slot="icon" src="./images/gong.png">
        <span class="grid-center">工单追踪</span>
      </grid-item>
      <grid-item link="/home">
        <img slot="icon" src="./images/wo.png">
        <span class="grid-center">我的服务</span>
      </grid-item>
      <grid-item link="/declare">
        <img slot="icon" src="./images/gu.png">
        <span class="grid-center">故障申报</span>
      </grid-item>
      <grid-item link="/advice">
        <img slot="icon" src="./images/tou.png">
        <span class="grid-center">投诉建议</span>
      </grid-item>
      <grid-item link="/more">
        <img slot="icon" src="./images/geng.png">
        <span class="grid-center">更多服务</span>
      </grid-item>
    </grid>
    <div class="clearfix" style="margin: 6px 0;background-color: #fff;">
      <div class="fl">
        <p class="notice red">通知</p>
        <p class="notice bla">公告</p>
      </div>
      <div class="fl notice_r">
        <swiper auto loop height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item @click.native="go('message')"><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          <swiper-item @click.native="go('message')"><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          <swiper-item @click.native="go('message')"><p>完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
        </swiper>
      </div>
    </div>
    <div class="clearfix">
      <div class="fl reduce">
        <img class="img-responsive" src="./images/ying.jpg">
      </div>
      <div class="fl reduce_r">
        <img class="img-responsive" style="display: block" src="./images/gu.jpg" alt="">
        <img class="img-responsive" style="display: block" src="./images/kuan.jpg" alt="">
      </div>
    </div>
    <div class="clearfix" style="background-color: #fff;padding: 3px;">
      <a class="fl title"></a>
      <p class="fl" style="line-height: 22px;font-size: 16px;">为您推荐</p>
    </div>
    <div class="clearfix last">
      <div class="fl left">
        <div class="fl">
          <p style="color: #F00">新闻资讯</p>
          <p class="xiao">及时了解行业资讯</p>
        </div>
        <div class="fr left_img"></div>
      </div>
      <div class="fr right">
        <div class="fl">
          <p style="color: rgb(129,188,47)">服务与支持</p>
          <p class="xiao">最专业的服务帮助</p>
        </div>
        <div class="fr right_img"></div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Swiper, SwiperItem, Grid, GridItem} from 'vux'
  import * as ApiService from 'api/api'
  import Footer from 'components/footer/footer'
  import banner1 from './images/banner1.jpg'
  import banner2 from './images/banner2.jpg'
  import banner3 from './images/banner3.jpg'
  import banner4 from './images/banner4.jpg'
  import banner5 from './images/banner5.jpg'
  export default {
    components: {
      XHeader,
      Swiper,
      SwiperItem,
      Grid,
      GridItem,
      'v-footer': Footer
    },
    data () {
      return {
        demo_list: [{
          url: 'javascript:',
          img: banner1,
        },
          {
            url: 'javascript:',
            img: banner2,
          },
          {
            url: 'javascript:',
            img: banner3,
          },
          {
            url: 'javascript:',
            img: banner4,
          },
          {
            url: 'javascript:',
            img: banner5,
          }
        ]
      }
    },
    methods: {
      go(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .mainRoom {
    .search {
      background: url(./images/search.png) no-repeat;
      background-size: contain;
      display: inline-block;
      width: 5vw;
      height: 5vw;
    }
    .msg {
      background: url(./images/msg.png) no-repeat;
      background-size: contain;
      display: inline-block;
      width: 5vw;
      height: 5vw;
    }
    .notice {
      padding-left: 10px;
      font-size: 4vw;
      font-weight: bold;
      line-height: 20px;
      &.red {
        color: red;
      }
      &.bla {
        color: #000;
      }
    }
    .notice_r {
      width: 80%;
      padding-left: 10px;
      margin: 5px 0 5px 5px;
      border-left: 2px solid #ccc;
    }
    .reduce {
      width: 45%;
    }
    .reduce_r {
      width: 55%;
    }
    .title {
      background: url("./images/title.png") no-repeat;
      width: 1vw;
      height: 5vw;
      margin: 0 3vw;
    }
    .last {
      margin-top: 1px;
      margin-bottom: 12vw;
      background-color: #fff;
      .left {
        width: 45%;
        padding: 2vw;
      }
      .left_img {
        background: url(./images/news.png) no-repeat;
        background-size: contain;
        width: 15vw;
        height: 15vw;
      }
      .right {
        width: 45%;
        padding: 2vw;
      }
      .right_img {
        background: url(./images/chi.png) no-repeat;
        background-size: contain;
        width: 15vw;
        height: 15vw;
      }
      .xiao {
        font-size: 12px;
        color: #c0c0c0;
      }
    }
  }

  .text-scroll p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
  }

  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }

  .weui-grids {
    background-color: #fff;
    .weui-grid {
      padding: 10px 0;
      &:after {
        border-bottom: none;
      }
    }
  }
</style>
