<template>
  <div>
    <group title="您当前已订购的套餐" title-color="#329dff">
      <cell title="固话套餐">
        <p slot="inline-desc" class="inline-desc">
          订购时间:2018-05-05 <span style="margin-right: 2vw"></span>
          生效时间:2018-05-05<br>
          到期时间:2019-05-05
        </p>
      </cell>
    </group>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell, Group} from 'vux'
  export default {
    components: {
      Cell,
      Group
    },
    methods: {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .inline-desc{
    padding-left: 2vw;
    margin-top: 1vw;
    font-size: 12px;
  }
</style>
