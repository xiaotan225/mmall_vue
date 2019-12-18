<template>
  <div class="login-header-box">
    <header class="login-header w">
      <div class="left">
          <router-link to="/" class="logo color-red">MMall</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style lang="css" scoped>
.login-header-box {
  background-color: #fff;
  height: 60px;
  line-height: 60px;
}
.login-header {
  margin: auto;
  display: flex;
  align-items: center;
}
.login-header .left {
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
}
</style>
