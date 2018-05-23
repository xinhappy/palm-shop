<template>
  <div>
    <group gutter="0">
      <cell title="账户余额" value="¥100.00"></cell>
      <cell title="到期日期" value="2019-01-01"></cell>
      <cell title="套餐种类" value="套餐A"></cell>
      <cell title="账单查询" is-link></cell>
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
</style>
