<template>
  <div class="newsRoom">
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      新闻资讯
    </x-header>
    <div class="area">
      <p class="title">新闻详情</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader,
    },
    methods: {
      back (){
        this.$router.replace('/news')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .newsRoom{
    background-color: #fff;
    height: 100%;
    .back {
      background: url(./images/back.png) no-repeat;
      background-size: contain;
      display: inline-block;
      width: 5vw;
      height: 5vw;
    }
    .area{
      padding: 3vw;
      .title{
        text-align: center;
        font-size: 16px;
      }
    }
  }
</style>
