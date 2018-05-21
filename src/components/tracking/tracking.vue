<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">工单追踪</a>
    </x-header>
    <div>
      <input class="in-text" v-model="code" type="text" placeholder="请输入业务号码/工单号/姓名进行查询">
    </div>
    <div class="bottom">
      <a class="btn">查询</a>
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
