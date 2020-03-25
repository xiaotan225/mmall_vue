<template>
  <div class="user-center">
    <div class="user"  v-if="!isLoading">
      <div class="title">
        <h3>我的信息</h3>
      </div>
      <div class="body">
        <ul>
          <li>用户名：</li>
          <li>邮箱：</li>
          <li>电话：</li>
          <li>地址：</li>
        </ul>
        <ol>
          <li>{{userList.userName}}</li>
          <li>{{userList.mail}}</li>
          <li>{{address.mobile}}</li>
          <li>{{address.value}} {{address.detailSite}}</li>
        </ol>
      </div>
      <div class="redact">
        <!-- <router-link to="/asdf">编辑</router-link> -->
      </div>
    </div>

    <Loading msg="加载中..." v-if="isLoading"></Loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      userList: {},
      addressList: [],
      address: ""
    };
  },
  created() {
    let userName = localStorage.getItem("userName");
    this.$axios
      .post("/users/getUser")
      .then(result => {
        let code = result.data.code;
        if (code == 1) {
          this.isLoading = false
          this.userList = result.data.result;
          this.addressList = result.data.result.addressList;
          this.addressList.forEach(item => {
            if (item.checked) {
              this.address = item;
            }
          });
        } else {
          alert("获取用户信息失败");
        }
      })
      .catch(err => {});
  }
};
</script>
<style lang="css" scoped>
.user{
  background-color: #fff;
  padding: 10px;
}
.user-center {
  
}
.user-center .title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.user-center .title h3 {
  margin: 0;
  padding-bottom: 10px;
}
.user-center .body {
  display: flex;
}
.user-center .body ol li {
  margin-top: 5px;
  height: 40px;
  line-height: 40px;
}
.user-center .body ul li {
  margin-top: 5px;
  padding: 0 0 0 20px;
  width: 55px;
  height: 40px;
  line-height: 40px;
  text-align-last: justify;
}
.redact {
  display: flex;
  justify-content: flex-end;
}
.redact a {
  display: inline-block;
  width: 50px;
  height: 30px;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
}
</style>