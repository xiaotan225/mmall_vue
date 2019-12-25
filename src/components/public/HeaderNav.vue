<template>
  <div class="nav">
    <nav class="header-nav w">
      <div class="left" v-if="!isLogin">
        <router-link to="/login/loginIndex">登录</router-link>
        <router-link to="/login/register">注册</router-link>
      </div>
      <div class="left" v-if="isLogin">
        <a href="javascript:;">欢迎、{{userName}}</a>
        <a href="javascript:;" @click="exitLogin">退出</a>
      </div>
      <div class="right">
        <router-link to="/cart/cartlist">购物车</router-link>
        <router-link to="/myMall/myOrder">我的订单</router-link>
        <router-link to="/myMall/userCenter">我的Mall</router-link>
        <router-link to="/aboutMall">关于Mall</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      userName: "",
      isLogin: ""
    };
  },
  methods: {
    exitLogin() {
      this.userName =  localStorage.clear("userName");
      this.isLogin =  localStorage.clear("isLogin");
      
    }
  },
  created() {
    this.userName = localStorage.getItem("userName");
    this.isLogin = localStorage.getItem("isLogin");
  }
};
</script>

<style lang="css" scoped>
.nav {
  width: 100%;
  background-color: #eee;
}
.header-nav {
  margin: auto;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
}
.header-nav .right a:hover {
  color: #c60023;
}
.header-nav .right a + a,
.header-nav .left a + a {
  margin-left: 15px;
}
</style>