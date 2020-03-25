<template>
  <div class="login-index">
    <div class="login" v-if="!isMsgModul">
      <div class="title">用户登录</div>
      <div class="body">
        <div v-if="step === 0">
          <span class="iconfont icons">&#xe602;</span><input ref="email" type="email" @keydown="keydown" v-model="mail" placeholder="请输入邮箱" />
        </div>
        <div v-if="step === 1">
          <span class="iconfont icons">&#xe650;</span><input type="txt" placeholder="请输验证码" class="input-w" v-model="verifyCode" />
          <a href="javascript:;" class="verify" @click="getVerify">{{codeBtnText}}</a>
        </div>
        <div v-if="step === 1">
          <span class="iconfont icons">&#xe60a;</span><input type="password" v-model="newPwd" placeholder="设置新密码" />
        </div>
        <div class="login-btn">
          <button @click="next">下一步</button>
        </div>
      </div>
      <div class="options">
        <router-link to="/login/loginIndex">已经想起密码，去登录>>></router-link>
      </div>
    </div>
    <MsgModul v-if="isMsgModul" :ishid="false" title="修改密码成功">
      <router-link to="/login/loginIndex" >去登录</router-link>
      <router-link to="/" >去首页</router-link>
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
      codeBtnText: "获取验证码",
      isclick: true,
      verifyCode: "",
      mail: "",
      step: 0,
      newPwd: "",
      isMsgModul: false
    };
  },
  methods: {
    next() {
      if (this.step == 0) {
        alert("请输入正确邮箱或者邮箱没有注册");
      } else if (this.step == 1) {
        this.$axios
          .post("/users/updateUserPwd", {
            mail: this.mail,
            verifyCode: this.verifyCode,
            newPwd: this.newPwd
          })
          .then(res => {
            var code = res.data.code;
            if (code == 1) {
              this.isMsgModul = true;
            } else if (code == -1) {
              alert("验证码错误");
            } else if (code == -3) {
              alert("验证码已失效");
            } else {
              alert("修改密码失败");
            }
          });
      }
    },
    keydown() {
      this.$axios
        .post("/users/isMail", {
          mail: this.mail
        })
        .then(res => {
          var code = res.data.code;
          var verifyInput = this.$refs.email;

          if (code === 1) {
            this.step = 0;
          } else if (code == 0) {
            this.step = 0;
          } else {
            this.step = 1;
          }
        });
    },
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
            var code = result.data.code;
            if (code === 1) {
            } else {
              alert("发送失败");
              this.step = 1;
            }
          })
          .catch(err => {});
      } else {
        alert("不能重复点击");
      }
    }
  }
};
</script>

<style lang="css" scoped>
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
</style>