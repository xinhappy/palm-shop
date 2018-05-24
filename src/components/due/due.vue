<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">到期查询</a>
    </x-header>
    <div style="margin-top: 2vw">
      <tab :line-width="1" custom-bar-width="60px" active-color="#329dff">
        <tab-item selected @on-item-click="go('telephone-d')">固话账户</tab-item>
        <tab-item @on-item-click="go('broadband-d')">宽带账户</tab-item>
        <tab-item @on-item-click="go('tv-d')">电视账户</tab-item>
      </tab>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Tab, TabItem} from 'vux'
  export default {
    components: {
      XHeader,
      Tab,
      TabItem
    },
    methods: {
      back (){
        this.$router.push('/server')
      },
      go(path){
        this.$router.push({name:path})
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
