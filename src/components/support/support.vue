<template>
  <div>
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      服务与支持
    </x-header>
    <group gutter="0">
      <cell title="帮助中心" is-link link="/declare"></cell>
      <cell title="服务电话" is-link value="277777"></cell>
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
</style>
