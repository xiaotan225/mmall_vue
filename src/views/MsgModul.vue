<template>
  <div>
    <LoginHeader></LoginHeader>
    <div class="modul w">
      <h3>您的商品已成功加入购物车</h3>
      <div>
        <router-link to="/productlist">继续购物</router-link>
        <router-link to="/cart/cartlist">去购物车查看</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import LoginHeader from "../components/public/LoginHeader";
import Footer from "../components/public/Footer";
export default {
  components: {
    LoginHeader,
    Footer
  }
};
</script>

<style lang="css" scoped>
.modul {
  height: 130px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  background-color: #fff;
}
.modul h3 {
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 20px;
  color: rgb(85, 85, 85);
}
.modul a {
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 0 10px;
}
</style>

