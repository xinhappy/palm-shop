<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">余额查询</a>
    </x-header>
    <div class="info">
      <p style="text-align: center">账户余额（元）</p>
      <p style="color: #f00;font-size: 24px;text-align: center">100.00</p>
    </div>

    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>当月消费（元）</span>
          <br/>
          50.00
        </div>
        <div class="vux-1px-r">
          <span>可用余额（元）</span>
          <br/>
          50.00
        </div>
      </div>
    </card>
    <div class="bottom">
      <a class="btn">立即支付</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Card} from 'vux'
  export default {
    components: {
      XHeader,
      Card
    },
    data(){
      return {
        zhi:true,
        wei: false,
        sum: '',
        inputting: '',
        name: this.$route.params.name
      }
    },
    methods: {
      back (){
        this.$router.go(-1)
      },
      selectIn(){
        this.sum = this.inputting
      }
    },
    watch: {
      zhi(val){
        if(val){
          this.zhi = val
          this.wei = false
        }
      },
      wei(val){
        if(val){
          this.wei = val
          this.zhi = false
        }
      },
      inputting (val) {
        this.inputting = val.replace(/[^\d+(/.\d+)?$]/g, '')
        let ArrMen = val.split('.')   // 截取字符串
        if (ArrMen.length === 2) {
          if (ArrMen[1].length > 1) {    // 判断小数点后面的字符串长度

          } else {

          }
        }
        this.sum = val
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '~vux/src/styles/1px.less';
  .back {
    background: url(./images/back_bule.png) no-repeat;
    background-size: contain;
    display: inline-block;
    width: 5vw;
    height: 5vw;
  }
  .info{
    background-color: #fff;
    padding: 3vw;
    margin-top: 2vw;
  }
  .bottom{
    padding: 3vw;
    margin-top: 2vw;
    position: fixed;
    width: 94vw;
    bottom: 10vw;
    .btn{
      background-color: rgb(219,0,27);
      color: #fff;
      text-align: center;
      display: block;
      width: 100%;
      border-radius: 3px;
      padding: 1vw 0;
    }
  }
  .vux-header .vux-header-title {
    color: #999;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  .card-demo-flex span {
    color: #666;
  }
</style>
