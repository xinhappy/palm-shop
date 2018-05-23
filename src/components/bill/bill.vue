<template>
  <div>
    <x-header style="background-color:#fff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">历史账单</a>
    </x-header>
    <group title="2018-05-10"  v-for="item in [0,1]">
      <cell inline-desc="今日 12:30:00" v-for="item in [0,1]">
        <span slot="title">
          <span style="vertical-align:middle;" class="inline-desc">缴费成功</span>
        </span>
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/bill.png">
        <a slot="after-title" class="right_date">¥20.00</a>
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
        this.$router.push('/index')
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
  .inline-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 80vw;
    margin: 1vw 0;
    display: block;
  }
  .right_date {
    position: absolute;
    font-size: 16px;
    right: 8px;
    bottom: 24px;
  }
  .vux-header .vux-header-title {
    color: #999;
  }
</style>
