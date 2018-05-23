<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">当前绑定手机</a>
    </x-header>
    <group>
      <cell title="手机号" value="15012345678"></cell>
    </group>
    <div class="bottom">
      <a class="btn" @click="go()">更换手机号码</a>
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
    data(){
      return {
        code: ''
      }
    },
    methods: {
      back (){
        this.$router.go(-1)
      },
      go(){
        this.$router.push('/modify-phone')
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

  .in-text {
    width: 100%;
    text-align: center;
    padding: 3vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
  }

  .bottom {
    .btn {
      background: url(./images/title_blue.png);
      display: block;
      width: 90%;
      color: #fff;
      text-align: center;
      margin: 4vw auto 0;
      border-radius: 3px;
      padding: 1vw 0;
    }
  }

  .vux-header .vux-header-title {
    color: #999;
  }
</style>
