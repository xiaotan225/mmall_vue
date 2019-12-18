<template>
  <div class="cart">
    <HeaderNav></HeaderNav>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/public/Header";
import HeaderNav from "../components/public/HeaderNav";
import Footer from "../components/public/Footer";
import CrumbList from "../components/public/CrumbList";
export default {
  components: {
    Header,
    HeaderNav,
    Footer,
    CrumbList
  }
};
</script>

<style lang="css" scoped>

</style>