<template>
  <div>
    <LoginHeader v-if="ishid"></LoginHeader>
    <div class="modul w">
      <h3>{{title}}</h3>
      <div>
        <a href="javascript:;" @click="tui" v-if="ishid">继续购物</a>
        <router-link to="/cart/cartlist" v-if="ishid">去购物车查看</router-link>
        <slot></slot>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import LoginHeader from "../components/public/LoginHeader";
import Footer from "../components/public/Footer";
export default {
  props: {
    title:{
      type:String,
      default:'您的商品已成功加入购物车'
    },
    ishid:{
      type:Boolean,
      default:true
    }
  },
  data () {
    return {

    }
  },
  components: {
    LoginHeader,
    Footer
  },
  methods: {
      tui(){
      let name = sessionStorage.getItem('productType')
      this.$router.push('/productlist/'+name)
    }
  },
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

