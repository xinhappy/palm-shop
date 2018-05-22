<template>
  <div>
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      新闻资讯
    </x-header>
    <group gutter="0">
      <cell inline-desc="来源:云智生活-智慧平煤" v-for="item in [0,1,2,3,4]" @click.native="go('/newsDetail',1)">
        <span slot="title">
          <span style="vertical-align:middle;" class="inline-desc">平顶山七月前刷乘公交车有优惠,不要错过呀呀呀呀</span>
        </span>
        <img slot="icon" width="40" style="display:block;margin-right:5px;" src="./images/suo.png">
        <a slot="after-title" class="right_date">05-08</a>
      </cell>
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
      },
      go(path,id){
        this.$router.replace(path+'/'+id)
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
  .inline-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 80vw;
    margin: 1vw 0;
    display: block;
  }
  .right_date {
    position: absolute;
    font-size: 14px;
    color: #999;
    right: 8px;
    bottom: 13px;
  }
</style>
