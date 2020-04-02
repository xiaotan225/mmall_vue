<template>
  <div class="login-index">
    <div class="login" v-if="!isMsgModul">
      <div class="title">新用户注册</div>
      <div class="body">
        <div class="user-name">
          <span class="iconfont icons">&#xe64a;</span>
          <input type="text" placeholder="请输入用户名" v-model="userName" @keydown="keydownName" />
        </div>
        <div class="password">
          <span class="iconfont icons">&#xe60a;</span>
          <input type="password" placeholder="请输入密码" v-model="userPwd" />
        </div>
        <div>
          <span class="iconfont icons">&#xe60a;</span>
          <input type="password" placeholder="请输确认密码" v-model="verifyUserPwd" />
        </div>
        <div>
          <span class="iconfont icons">&#xe602;</span>
          <input
            ref="email"
            type="email"
            @keydown="keydownMail"
            v-model="mail"
            placeholder="请输入qq邮箱"
          />
        </div>
        <div>
          <span class="iconfont icons">&#xe650;</span>
          <input type="txt" placeholder="请输验证码" class="input-w" v-model="verifyCode" />
          <a href="javascript:;" class="verify" @click="getVerify">{{codeBtnText}}</a>
        </div>
        <div class="login-btn">
          <button @click="register">注册</button>
        </div>
      </div>
      <div class="options">
        <router-link to="/login/loginIndex">已有账号，去登陆>>></router-link>
      </div>
    </div>

    <MsgModul v-if="isMsgModul" :ishid="false" title="注册成功">
      <router-link to="/login/loginIndex">去登录</router-link>
      <router-link to="/">去首页</router-link>
    </MsgModul>
  </div>
</template>

<script>
import MsgModul from "../../views/MsgModul";
export default {
  components: {
    MsgModul
  },
  data() {
    return {
      userName: "",
      userPwd: "",
      verifyUserPwd: "",
      mail: "",
      verifyCode: "",
      verifyInput: "",
      codeBtnText: "获取验证码",
      isclick: true,
      isMsgModul: false,
      timer: null
    };
  },
  methods: {
  
    /* 防抖 */
    antiShake(time, fn) {
      let _this = this;
      if (_this.timer !== null) clearTimeout(_this.timer);
      _this.timer = setTimeout(() => {
        fn.apply(_this, arguments);
        _this.timer = null;
      }, time);
    },
    /* 检测用户名是否有 */
    isName() {
      this.$axios
        .post("/users/isUserName", {
          userName: this.userName
        })
        .then(res => {
          var code = res.data.code;
          if (code === 1) {
            alert("用户名称可以注册");
          } else if(code === -5){
            alert('用户名不能有空')
          } else {
            alert("用户名称已经注册");
          }
        });
    },
    /* 输入用户名 */
    keydownName() {
      this.antiShake(1000,this.isName)
    },
    /* 检测邮箱是否有 */
    isMail() {
      this.$axios
        .post("/users/isMail", {
          mail: this.mail
        })
        .then(res => {
          var code = res.data.code;
          var verifyInput = this.$refs.email;

          if (code === 1) {
            verifyInput.style.borderColor = "#09f";
          } else if (code == 0) {
            verifyInput.style.borderColor = "#f66";
          } else {
            alert("邮箱已经注册");
            verifyInput.style.borderColor = "#f66";
          }
        });
    },
    /* 输入邮箱 */
    keydownMail() {
      this.antiShake(1000, this.isMail);
    },
    /* 获取验证码 */
    getVerify() {
      if (this.isclick) {
        let timter = 60;
        var item = setInterval(() => {
          this.isclick = false;
          timter--;
          this.codeBtnText = "正在获取" + timter;
          if (timter == 0) {
            clearInterval(item);
            this.codeBtnText = "获取验证码";
            this.isclick = true;
          }
        }, 1000);
        this.$axios
          .post("/users/verify", {
            mail: this.mail
          })
          .then(result => {
            console.log(result);
            var code = result.data.code;
            if (code === 1) {
            } else {
              alert("发送失败");
            }
          })
          .catch(err => {});
      } else {
        alert("不能重复点击");
      }
    },
    /* 点击注册 */
    register() {
      if(this.userPwd !== this.verifyUserPwd){
        alert('两次密码不正确')
        return
      }
      this.$axios
        .post("/users/register", {
          userName: this.userName,
          userPwd: this.userPwd,
          mail: this.mail,
          verifyCode: this.verifyCode
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.isMsgModul = true;
          } else if (code === -3) {
            alert("验证码已失效");
          }else if(code === -5){
            alert('用户名不能有空')
          }else {
            alert("注册失败");
          }
        })
        .catch(err => {
          alert('注册失败')
        });
    }
  }
};
</script>



<style lang="css" scoped>
/* 308px */
.verify {
  width: 100px;
  padding: 15px 12px 11px 14px;
  background-color: #e4393c;
  color: #fff;
  line-height: 18px;
  text-align: center;
  margin-left: 5px;
}
.input-w {
  width: 218px !important;
}
.zq {
  border-color: #09f !important;
}
.err {
  border-color: #f66 !important;
}
</style>
