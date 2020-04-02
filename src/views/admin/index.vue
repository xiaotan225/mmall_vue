<template>
  <el-container class="admin-cont" v-if="isAdmin">
    <el-header>
      mmall后台管理，
      <span class="welcome">欢迎：{{user}}</span>
      <span class="triangle"></span>
      <div class="welcome-option">
        <el-button type="danger" @click="exitLogin">退出登录</el-button>
        <el-button type="primary" @click="toHome">返回首页</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" default-active="1">
          <router-link to="/admin/users">
            <el-menu-item index="1">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/admin/product">
            <el-menu-item index="2">
              <i class="el-icon-shopping-bag-2"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/admin/order">
            <el-menu-item index="3">
              <i class="el-icon-tickets"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      isAdmin: false
    };
  },
  methods: {
    /* 退出账号 */
    exitLogin() {
      this.$confirm("是否退出管理员账号?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$axios
            .post("/users/logout")
            .then(result => {
              let code = result.data.code;
              if (code === 1) {
                this.userName = localStorage.clear("userName");
                this.isLogin = localStorage.clear("isLogin");
                this.$message({
                  type: "success",
                  message: "退出成功!"
                });
                this.$router.push("/");
              }
            })
            .catch(err => {
              this.$message({
                type: "error",
                message: "退出失败"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    },
    /* 去往首页 */
    toHome() {
      this.$router.push("/");
    }
  },
  created() {
    this.user = localStorage.getItem("userName");
    this.$axios
      .post("/users/isAdmin")
      .then(result => {
        if (result.data.code == 0) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
          this.$router.push("/");
        }
      })
      .catch(err => {});
  }
};
</script>
<style lang="css" scoped>
* {
  font-size: 16px;
}

.welcome-option {
  position: absolute;
  z-index: 999;
  background-color: #d1dff0;
  left: 145px;
  padding: 0 5px;
  border: 1px solid #ccc;
  border-top: 0;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: none;
  animation: excessive 0.8s linear;
}
.welcome:hover + span + .welcome-option {
  display: block;
}
.welcome-option:hover {
  display: block;
}
@keyframes excessive {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.welcome-option button {
  height: 30px;
  font-size: 15px;
  padding: 5px 5px;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-top: 5px solid #000;
  position: absolute;
  top: 28px;
  margin-left: 5px;
}
.welcome {
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: 100%;
}

.admin-cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* color: #409EFF;
    background-color: #ecf5ff; */
</style>