<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">输入验证码</a>
    </x-header>
    <div class="info">
      验证码已发送至手机号150****1234
    </div>
    <input type="hidden" v-model="password"/>
    <div class="pay-pwd clearfix">
      <form v-auto-focus="focusCtrl" :data-current="currentIndex" :data-action="actionType">
        <input @focus="setFocusIndex(0)" type="text" data-index="0" v-model="pw1">
        <input @focus="setFocusIndex(1)" type="text" data-index="1" v-model="pw2">
        <input @focus="setFocusIndex(2)" type="text" data-index="2" v-model="pw3">
        <input @focus="setFocusIndex(3)" type="text" data-index="3" v-model="pw4">
        <input @focus="setFocusIndex(4)" type="text" data-index="4" v-model="pw5">
        <input style="border-right: 1px solid #999" @focus="setFocusIndex(5)" type="text" data-index="5" v-model="pw6">
      </form>
    </div>
    <div class="bottom">
      <a class="btn" @click="go">确定</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import Vue from 'vue'
  import AutoFocus from 'vue-auto-focus'
  Vue.use(AutoFocus)
  export default {
    components: {
      XHeader
    },
    data(){
      return {
        password: '',
        pw1: '',
        pw2: '',
        pw3: '',
        pw4: '',
        pw5: '',
        pw6: '',
        focusCtrl: 0,  // 自动聚焦控制,变动时,执行自动聚焦指令
        currentIndex: 0, // 当前聚焦元素的索引
        actionType: 'next', // 自动聚焦的行为类型
      }
    },
    methods: {
      back (){
        this.$router.go(-1)
      },
      go(){
        this.$router.push('/home')
      },
      setFocus(actionType,index) {
        if (actionType === 'jump') {
          this.currentIndex = index
        }
        this.focusCtrl++
        this.actionType = actionType
      },
      setFocusIndex(index) {
        this.currentIndex = index
      },
    },
    watch: {
      pw1(val){
        this.pw1 = val
        this.setFocus('next',1)
      },
      pw2(val){
        this.pw1 = val
        this.setFocus('next',2)
      },
      pw3(val){
        this.pw1 = val
        this.setFocus('next',3)
      },
      pw4(val){
        this.pw1 = val
        this.setFocus('next',4)
      },
      pw5(val){
        this.pw1 = val
        this.setFocus('next',5)
      },
      pw6(val){
        this.pw1 = val
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
    padding: 3vw;
    background-color: #fff;
    margin-top: 2vw;
  }
  .pay-pwd {
    width: 72vw;
    margin: 8vw auto 3vw;
    div {
      padding-bottom: 0;
    }
    input {
      width: 11vw;
      height: 7vw;
      border: 1px solid #999;
      border-right: none;
      background-color: #fff;
      text-align: center;
      font-size: 30px;
      float:left;
    }
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
