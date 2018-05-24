<template>
  <div>
    <div class="info">
      <p class="title">填写个人信息</p>
      <p class="clearfix"><span class="fl left">姓名 :</span><span class="fl right"><input type="text" placeholder="请输入用户姓名"></span></p>
      <p class="clearfix"><span class="fl left">身份证号 :</span><span class="fl right"><input type="text" placeholder="请输入用户身份证"></span></p>
      <p class="clearfix"><span class="fl left">联系电话 :</span><span class="fl right"><input type="text" placeholder="请输入用户联系电话"></span></p>
    </div>
    <div class="info">
      <p class="title">填写预约信息</p>
      <p class="clearfix"><span class="fl left">安装地址 :</span>
        <span class="fl right">
          <select name="" ><option value="">河南</option></select>
          <select name=""><option value="">平顶山</option></select>
          <select name=""><option value="">新华区</option></select>
          <input type="text" placeholder="精确到门牌号">
        </span>
      </p>
      <p class="clearfix"><span class="fl left">安装时间 :</span>
        <span class="fl right"><input type="text" placeholder="请输入用户身份证"></span>
      </p>
      <p class="clearfix"><span class="fl left">验证码 :</span>
        <span class="fl right"><input type="text" placeholder="请输入用户联系电话"></span>
      </p>
    </div>
    <div class="bottom">
      <a class="btn">提交申请</a>
    </div>
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
  .info{
    background-color: #fff;
    padding: 2vw;
    margin-bottom: 2vw;
    .title{
      font-size: 16px;
      margin-bottom: 1vw;
    }
    .left{
      width: 20vw;
      text-align: right;
    }
    .right{
      width: 74vw;
      padding-left: 2vw;
      border-bottom: 1px solid #eee;
    }
  }
  .bottom{
    /*background-color: #fff;*/
    padding: 3vw;
    margin-top: 2vw;
    width: 94vw;
    position: fixed;
    bottom: 15vw;
    .btn{
      background-color: #329dff;
      color: #fff;
      text-align: center;
      display: block;
      width: 100%;
      border-radius: 3px;
      padding: 1vw 0;
    }
  }
</style>
