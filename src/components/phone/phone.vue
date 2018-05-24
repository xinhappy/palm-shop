<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">话费查询</a>
    </x-header>
    <div style="margin-top: 2vw">
      <tab :line-width="1" v-model="index" custom-bar-width="30px" bar-active-color="#329dff" active-color="#666">
        <tab-item :selected="current === item" v-for="(item, index) in list" @click="current = item" :key="index">{{item}}</tab-item>
      </tab>
    </div>
    <div>
      <swiper v-model="index" height="550px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">
            <div class="info" style="border-bottom: 1px solid #eee">
              <p>截止2018-01-10日当月话费</p>
              <p class="fee">80.00 <span>元</span></p>
            </div>
            <div class="info" style="font-size: 16px">
              话费详情
            </div>
            <group gutter="0">
              <cell value="¥10.00" v-for="item in [0,1,2]">
                <span slot="title">
                   <span style="vertical-align:middle;font-size: 14px;color: #999">话费支出明细</span>
                </span>
              </cell>
            </group>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Tab, TabItem, Swiper, SwiperItem, Cell, Group} from 'vux'
  export default {
    components: {
      XHeader,
      Tab,
      Swiper,
      SwiperItem,
      TabItem,
      Cell,
      Group
    },
    data(){
      return {
        index: 0,
        list:['12月','1月','2月','3月','4月','5月'],
        current: this.$route.params.month
      }
    },
    methods: {
      back (){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .back {
    background: url(./images/back_bule.png) no-repeat;
    background-size: contain;
    display: inline-block;
    width: 5vw;
    height: 5vw;
  }
  .info{
    background-color: #fff;
    padding: 2vw;
    .fee{
      font-size: 24px;
      color: #f00;
      text-align: center;
      padding: 2vw;
      span{
        font-size: 14px;
        color: #999;
      }
    }
  }
  .vux-header .vux-header-title {
    color: #999;
  }
</style>
