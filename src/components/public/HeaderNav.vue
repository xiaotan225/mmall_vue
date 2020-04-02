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
        <router-link to="/cart/cartlist">
          <span class="iconfont icon">&#xe600;</span>
          购物车{{userName?'('+count+')':'('+0+')'}}
        </router-link>
        <router-link to="/myMall/myOrder">我的订单</router-link>
        <router-link to="/myMall/userCenter">我的Mall</router-link>
        <router-link to="/myMall/as">关于Mall</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      count: "",
      userName: "",
      isLogin: "",
    };
  },
  methods: {
    exitLogin() {
      this.$axios
        .post("/users/logout")
        .then(result => {
          let code = result.data.code;
          if (code === 1) {
            this.userName = localStorage.clear("userName");
            this.isLogin = localStorage.clear("isLogin");
          }
        })
        .catch(err => {});
    },
    getCartData() {
      var userName = localStorage.getItem("userName");
      if(!userName){
        return
      }
      this.$axios
        .get("/cart/cartData", {
          params: {
            userName: userName
          }
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.count = result.data.result.length;
          } else {
            alert("获取购物车数据失败");
          }
        })
        .catch(err => {
          alert("获取购物车数据失败");
        });
      
    }
  },
  created() {
    this.userName = localStorage.getItem("userName");
    this.isLogin = localStorage.getItem("isLogin");
    this.getCartData();
  }
};
</script>

<style lang="css" scoped>
.icon {
  margin: 2px;
}
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