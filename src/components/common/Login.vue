<template>
  <div id="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button style="background-color: lightseagreen;" type="primary" size="large">登录</mt-button>
    <div class="forgetPwd">忘记密码？</div>
    <div class="line">第三方登录</div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: "",
        password: ""
      }
    }
  }
</script>

<style scoped>
  .forgetPwd {
    margin: 8px;
    color: #aaa;
    text-align: right;
  }
  .line{
    padding: 0 10px 0;
    margin: 30px 0;
    line-height: 1px;
    border-left: 120px solid #ddd;
    border-right: 120px solid #ddd;
    text-align: center;
  }
</style>
