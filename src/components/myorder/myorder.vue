<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">我的订单</a>
    </x-header>
    <group gutter="0">
      <cell title="固话套餐">
        <span slot="title">
          <span style="vertical-align:middle;">固话套餐</span>
        </span>
      <p slot="inline-desc" class="inline-desc">
        生效时间:2018-05-05 00:00:00<br>
        生效时间:2019-05-05 00:00:00
      </p>
      <a slot="after-title" class="right_date">
        <span class="over">已付款</span><br>
        <span>¥100.00</span>
      </a>
    </cell>
      <cell title="电话套餐">
        <span slot="title">
          <span style="vertical-align:middle;">固话套餐</span>
        </span>
        <p slot="inline-desc" class="inline-desc">
          生效时间:2018-05-05 00:00:00<br>
          生效时间:2019-05-05 00:00:00
        </p>
        <a slot="after-title" class="right_date">
          <span class="wait">待支付</span><br>
          <span>¥100.00</span>
        </a>
      </cell>
      <cell title="电视套餐">
        <span slot="title">
          <span style="vertical-align:middle;">固话套餐</span>
        </span>
        <p slot="inline-desc" class="inline-desc">
          生效时间:2018-05-05 00:00:00<br>
          生效时间:2019-05-05 00:00:00
        </p>
        <a slot="after-title" class="right_date">
          <span class="cancel">已取消</span><br>
          <span>¥100.00</span>
        </a>
      </cell>
    </group>

  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Cell, Group} from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Group
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
  .inline-desc{
    padding-left: 2vw;
    margin-top: 1vw;
  }
  .right_date {
    position: absolute;
    font-size: 12px;
    color: #999;
    right: 8px;
    top: 13px;
    text-align: right;
    .over{
      font-size: 16px;
      color: #329dff;
    }
    .wait{
      font-size: 16px;
      color: orange;
    }
    .cancel{
      font-size: 16px;
      color: #999;
    }
  }
  .vux-header .vux-header-title {
    color: #999;
  }
</style>
