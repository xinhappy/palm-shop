<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">{{name}}</a>
    </x-header>
    <div class="info" v-show=" name === '一键缴费' ">
      <p class="title">您当前账号绑定的业务:</p>
      <p class="package"><span>固话:</span>固话套餐一</p>
      <p class="package"><span>宽带:</span>宽带套餐一</p>
    </div>
    <div class="info" v-show=" name === '固话缴费' ">
      <input class="phone" type="text" placeholder="请输入电话号码">
    </div>
    <div class="info" v-show=" name === '宽带缴费' ">
      <input class="phone" type="text" placeholder="请输入宽带账号">
    </div>
    <div class="info" v-show=" name === '电视缴费' ">
      <input class="phone" type="text" placeholder="请输入电视账号">
    </div>
    <div class="info">
      <p class="title">选择充值金额</p>
      <checker v-model="sum" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item value="20">20元</checker-item>
        <checker-item value="30">30元</checker-item>
        <checker-item value="50">50元</checker-item>
        <checker-item value="100">100元</checker-item>
        <checker-item value="200">200元</checker-item>
        <checker-item :value="inputting" @on-item-click="selectIn()">
          <input class="in_put" type="text" v-model="inputting" placeholder="其他金额">
        </checker-item>
      </checker>
    </div>
    <div style="background-color: #fff;padding-left: 3vw;margin-top: 2vw">
      选择支付方式
    </div>
    <group gutter="0">
      <cell title="支付宝">
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/zhi.png">
        <div>
          <check-icon :value.sync="zhi"></check-icon>
        </div>
      </cell>
      <cell title="微信支付">
        <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/wei.png">
        <div>
          <check-icon :value.sync="wei"></check-icon>
        </div>
      </cell>
    </group>
    <div class="info">
      支付金额: <span style="color: orange"> 0.00 元</span>
    </div>
    <div class="info">
      <a class="btn">立即支付</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Cell, Group, CheckIcon, Checker, CheckerItem} from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Group,
      CheckIcon,
      Checker,
      CheckerItem
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
    .title{
      font-size: 16px;
    }
    .phone{
      background-color: #fff;
      width: 100%;
    }
    .package{
      padding-left: 2vw;
      color: #999;
      span{
        color: #2c3e50;
      }
    }
    .demo1-item {
      border: 1px solid #329dff;
      border-radius: 3px;
      text-align: center;
      width: 25vw;
      margin: 2vw;
      padding: 2vw 0;
      .in_put{
        background-color: transparent;
        width: 24vw;
        text-align: center;
        color: #333;
      }
    }
    .demo1-item-selected {
      background-color: #329dff;
      color: #fff;
      .in_put{
        background-color: transparent;
        width: 24vw;
        text-align: center;
        color: #fff;
      }
      input::-webkit-input-placeholder{
        /* WebKit browsers */
        color: #fff;
      }
      input:-moz-placeholder{
        /* Mozilla Firefox 4 to 18 */
        color: #fff;
      }
      input::-moz-placeholder{
        /* Mozilla Firefox 19+ */
        color: #fff;
      }
      input:-ms-input-placeholder{
        /* Internet Explorer 10+ */
        color: #fff;
      }
    }
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
</style>
