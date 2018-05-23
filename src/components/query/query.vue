<template>
  <div>
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      业务查询
    </x-header>
    <grid :cols="4">
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
      <grid-item>
        <img slot="icon" style="display: none">
        <span class="grid-center" style="color: transparent">占位</span>
      </grid-item>
      <grid-item>
        <img slot="icon" style="display: none">
        <span class="grid-center" style="color: transparent">占位</span>
      </grid-item>
    </grid>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Grid, GridItem} from 'vux'
  export default {
    components: {
      XHeader,
      Grid,
      GridItem
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
    background: url(./images/back.png) no-repeat;
    background-size: contain;
    display: inline-block;
    width: 5vw;
    height: 5vw;
  }

  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }

  .weui-grids {
    background-color: #fff;
  }
</style>
