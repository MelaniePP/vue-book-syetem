<template>
  <div class='login'>
    <div class="leftbg">
      <p class="welcome"><u>W</u>elcome</p>
      <p class="name">智能培训系统</p>
    </div>
    <form class="loginForm auto">
      <p class="title">账户密码登录</p>
      <div class="inputLoginName"><span class="inputLoginNameIcon"></span><input type="text" id="inputLoginName" v-model="inputLoginUserName" placeholder="请输入用户名"></div>
      <div class="inputLoginPass"><span class="inputLoginPassIcon"></span><input type="text" id="inputLoginPass" v-model="inputLoginUserPass" placeholder="请输入登录密码"></div>
      <div class="loginSystem" @click="handleLogin()">登录</div>
    </form>
  </div>
</template>

<script>
  export default {
    // 组建的名称
    title: '登录',
    name: 'login',
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {},
    data() {
      return {
        inputLoginUserName:'',
        inputLoginUserPass:''
      }
    },
    methods: {
      // 处理登陆
      handleLogin () {
        let _this = this;
        if(_this.inputLoginUserName && _this.inputLoginUserPass !==''){
          _this.$router.push({name: 'indexPage'});
        }else{
          _this.loginMessage()
        }
      },
      loginMessage() {
        this.$message({
          message: '用户名或密码输入错误',
          type: 'warning'
        });
      },
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style lang="less">
  @import "../assets/theme/login.less";
</style>
