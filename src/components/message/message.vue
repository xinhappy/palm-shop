<template>
  <div>
    <x-header style="background-color:#329dff;" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      消息中心
    </x-header>
    <group gutter="0">
      <cell>
        <span slot="title">
          <span style="vertical-align:middle;">关于掌上营业厅微信端系统维护公告</span>
          <badge></badge>
        </span>
        <p slot="inline-desc" class="inline-desc">
          尊敬的用户您好:中平信通掌上营业厅系统维护将于5月10号
        </p>
        <a slot="after-title" class="right_date">05-08</a>
      </cell>
      <cell>
        <span slot="title">
          <span style="vertical-align:middle;">关于掌上营业厅微信端系统维护公告</span>
          <badge v-show="false"></badge>
        </span>
        <p slot="inline-desc" class="inline-desc">
          尊敬的用户您好:中平信通掌上营业厅系统维护将于5月10号系统维护公告
        </p>
        <a slot="after-title" class="right_date">05-08</a>
      </cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Cell, Group, Badge} from 'vux'
  export default {
    components: {
      XHeader,
      Cell,
      Group,
      Badge
    },
    methods: {
      back (){
        this.$router.go(-1)
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
    width: 95vw;
    margin: 1vw 0;
  }

  .right_date {
    position: absolute;
    font-size: 14px;
    color: #999;
    right: 8px;
    top: 13px;
  }
</style>
