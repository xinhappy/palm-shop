<template>
  <div>
    <x-header style="background-color:#fff" :left-options="{backText: '',showBack: false}">
      <a slot="left" class="back" @click="back()"></a>
      <a style="color: #333">通话详单</a>
    </x-header>
    <div style="margin-top: 2vw">
      <tab :line-width="1" v-model="index" custom-bar-width="30px" bar-active-color="#329dff" active-color="#666">
        <tab-item :selected="current === item" v-for="(item, index) in list" @click="current = item" :key="index">{{item}}</tab-item>
      </tab>
    </div>
    <div>
      <swiper v-model="index" height="550px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">
            <group gutter="0">
              <cell title="15012345678">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/in.png">
                <p slot="after-title" class="inline-desc">
                  05-10 <span style="margin-right: 2vw"></span>21:00<br>30秒
                </p>
              </cell>
              <cell title="13923454323">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/out.png">
                <p slot="after-title" class="inline-desc">
                  05-10 <span style="margin-right: 2vw"></span>21:00<br>30秒
                </p>
              </cell>
              <cell title="18712343267">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/out.png">
                <p slot="after-title" class="inline-desc">
                  05-10 <span style="margin-right: 2vw"></span>21:00<br>30秒
                </p>
              </cell>
              <cell title="15012345678">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/in.png">
                <p slot="after-title" class="inline-desc">
                  05-10 <span style="margin-right: 2vw"></span>21:00<br>30秒
                </p>
              </cell>
              <cell title="18712343267">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/in.png">
                <p slot="after-title" class="inline-desc">
                  05-10 <span style="margin-right: 2vw"></span>21:00<br>30秒
                </p>
              </cell>
            </group>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Tab, TabItem, Swiper, SwiperItem, Cell, Group} from 'vux'
  export default {
    components: {
      XHeader,
      Tab,
      Swiper,
      SwiperItem,
      TabItem,
      Cell,
      Group
    },
    data(){
      return {
        index: 0,
        list:['12月','1月','2月','3月','4月','5月'],
        current: this.$route.params.month
      }
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
    background: url(./images/back_bule.png) no-repeat;
    background-size: contain;
    display: inline-block;
    width: 5vw;
    height: 5vw;
  }
  .inline-desc{
    position: absolute;
    font-size: 14px;
    color: #999;
    right: 8px;
    top: 5px;
    text-align: right;
  }
  .weui-cell{
    padding: 15px;
  }
  .vux-header .vux-header-title {
    color: #999;
  }
</style>
