<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">修改绑定手机</a>
    </x-header>
    <div style="background-color: #fff;margin-top: 2vw;padding-left: 3vw">
      +86<input class="in-text" v-model="code" type="text" placeholder="请输入新的手机号">
    </div>
    <div class="bottom">
      <a class="btn" @click="go">下一步</a>
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
        this.$router.push('/verification')
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
    width: 80%;
    padding: 3vw;
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
