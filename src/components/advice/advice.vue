<template>
  <div class="adviceRoom">
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">投诉建议</a>
      <a slot="right" style="color: #2385ff" @click="save()">提交</a>
    </x-header>
    <div class="advice_in">
      <div class="title">账号:13331123121</div>
      <div class="area">
        <p>投诉建议:</p>
        <div>
          <textarea name="" cols="30" rows="10" placeholder="请输入"></textarea>
        </div>
      </div>
    </div>
    <uploader :src="'/app/savePicture'" :params="params" ref="upImg"></uploader>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Cell, Group} from 'vux'
  import uploader from 'components/uploader/uploader'
  export default {
    components: {
      XHeader,
      Cell,
      Group,
      uploader
    },
    data(){
      return {
        params: {},
        show: true
      }
    },
    methods: {
      back (){
        this.$router.go(-1)
      },
      save(){
        let vm = this
        vm.params.id = '00000000'
        vm.$refs.upImg.submit()
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .adviceRoom{
    .back {
      background: url(./images/back_bule.png) no-repeat;
      background-size: contain;
      display: inline-block;
      width: 5vw;
      height: 5vw;
    }
    .advice_in{
      background-color: #fff;
    }
    .title{
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      padding: 1vw 3vw;
    }
    .area{
      padding: 1vw 3vw;
      textarea{
        width: 100%;
        border: 1px solid #eee;
      }
    }
  }

  .vux-header .vux-header-title {
    color: #999;
  }
</style>
