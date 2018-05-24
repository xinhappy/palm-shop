<template>
  <div>
    <div style="margin-top: 2vw">
      <tab :line-width="1" v-model="index" custom-bar-width="30px" bar-active-color="#329dff" active-color="#666">
        <tab-item :selected="current === item" v-for="(item, index) in list" @click="current = item" :key="index">{{item}}</tab-item>
      </tab>
    </div>
    <div>
      <swiper v-model="index" height="400px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">
            <group gutter="0">
              <cell title="话费查询" is-link link="/userinfo">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../images/fei.png">
              </cell>
              <cell title="通话详单" is-link link="/myaccount">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../images/tong.png">
              </cell>
              <cell title="历史账单查询" is-link link="/bill">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../images/history.png">
              </cell>
              <cell title="账户余额查询" is-link link="/balance">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../images/yu.png">
              </cell>
              <cell title="到期查询" is-link link="/due">
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="../images/dao.png">
              </cell>
            </group>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Swiper, SwiperItem, Cell, Group} from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Cell,
      Group
    },
    data(){
      return{
        index: 0,
        list:['12月','1月','2月','3月','4月','5月'],
        current: '1月'
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
