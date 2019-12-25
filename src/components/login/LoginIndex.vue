<template>
  <div class="login-index">
    <div class="login">
      <div class="title">用户登录</div>
      <div class="body">
        <div class="user-name">
          <label for>用户名</label>
          <input type="text" placeholder="请输入用户名" v-model="userName" />
        </div>
        <div class="password">
          <label for>密码</label>
          <input type="password" placeholder="请输入密码" v-model="userPwd" @keyup.enter="login()"/>
        </div>
        <div class="login-btn">
          <button @click="login">登录</button>
        </div>
      </div>
      <div class="options">
        <router-link to="/login/forget">忘记密码</router-link>
        <router-link to="/login/register">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/loginLayout.css";
export default {
  data() {
    return {
      userName: "",
      userPwd: ""
    };
  },
  methods: {
    login() {
      this.$axios
        .post("/users/login", {
          userName: this.userName,
          userPwd: this.userPwd
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            alert("登录成功");
            localStorage.setItem('userName',this.userName)
            localStorage.setItem('isLogin',"true")
            this.$router.push("/");
            
          } else if (code === 0) {
            alert('账号或密码错误')
          }else{
            alert('登录失败或者账号不存在')
          }
        })
        .catch(err => {});
    }
  }
};
</script>


<style lang="css" scoped>
/* label {
  display: block;
  margin: 5px 0;
  font-size: 14px;
}
.login-index {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background-color: #e72955;
}
.login {
  width: 400px;
  background-color: #fff;
}
.login .title {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.login .body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login .body input {
  padding: 10px 0 10px 10px;
  width: 308px;
  height: 18px;
  line-height: 18px;
  font-size: 15px;
  color: #333;
  border: none;
  outline: none;
  border: 1px solid #cccccc;
}
.login .body .login-btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.login .body button {
  padding: 6px 0;
  width: 90%;
  text-align: center;
  background: #e4393c;
  color: #fff;
  font-size: 20px;
  border: 1px solid transparent;
  outline: none;
}
.login .options {
  margin: 5px 0;
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px 10px 0;
}
.login .options a + a {
  margin: 0 10px;
} */
</style>