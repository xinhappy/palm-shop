<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">设置</a>
    </x-header>
    <group gutter="0">
      <cell title="帮助中心" is-link link="/declare"></cell>
      <cell title="意见反馈" is-link link="/advice"></cell>
      <cell title="关于我们" is-link ></cell>
      <cell title="电话咨询" is-link value="277777"></cell>
    </group>
    <div class="bottom">
      <a class="btn">退出登录</a>
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

  .bottom {
    background-color: #fff;
    padding: 3vw 3vw 8vw;
    position: fixed;
    bottom: 0;
    width: 94%;
    .btn {
      background: url(./images/title_blue.png);
      display: block;
      width: 100%;
      color: #fff;
      text-align: center;
      margin: 4vw auto 0;
      border-radius: 3px;
      padding: 1vw 0;
    }
    .last {
      text-align: center;
      color: #999;
      font-size: 12px;
    }
  }

  .vux-header .vux-header-title {
    color: #999;
  }
</style>
