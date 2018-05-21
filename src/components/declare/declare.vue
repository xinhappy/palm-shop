<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">故障申报</a>
    </x-header>
    <group title="常见故障" title-color="#333">
      <cell title="连接路由器,宽带无法上网解决办法" is-link v-for="item in  [0, 1, 2, 3, 4]"></cell>
    </group>
    <div class="bottom">
      <p>如故障未能解决,请进入在线服务</p>
      <a class="btn">在线服务</a>
      <p class="last">进入呼叫中心工单故障系统</p>
    </div>
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
        this.$router.replace('index')
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
  .bottom{
    background-color: #fff;
    padding: 3vw 3vw 8vw;
    position: fixed;
    bottom: 0;
    width: 94%;
    .btn{
      background: url(./images/title_blue.png);
      display: block;
      width: 100%;
      color: #fff;
      text-align: center;
      margin: 4vw auto 0;
      border-radius: 3px;
      padding: 1vw 0;
    }
    .last{
      text-align: center;
      color: #999;
      font-size: 12px;
    }
  }
  .vux-header .vux-header-title{
    color: #999;
  }
</style>
