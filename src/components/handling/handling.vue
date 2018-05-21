<template>
  <div>
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      业务办理
    </x-header>
    <grid :cols="4">
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
      <grid-item link="/declare">
        <img slot="icon" src="./images/gu.png">
        <span class="grid-center">故障申告</span>
      </grid-item>
      <grid-item link="/tracking">
        <img slot="icon" src="./images/gen.png">
        <span class="grid-center">工单追踪</span>
      </grid-item>
      <grid-item>
        <img slot="icon" src="./images/tou.png">
        <span class="grid-center">投诉建议</span>
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
        this.$router.replace('index')
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
