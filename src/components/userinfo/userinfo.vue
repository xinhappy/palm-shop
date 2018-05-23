<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">用户信息</a>
    </x-header>
    <group gutter="0">
      <cell title="姓名" value="**雷"></cell>
      <cell title="实名认证" value="已认证"></cell>
      <cell title="联系方式" value="15112345678"></cell>
      <cell title="详细地址" value="平顶山新华区矿工路北段"></cell>
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
  .vux-header .vux-header-title {
    color: #999;
  }
</style>
