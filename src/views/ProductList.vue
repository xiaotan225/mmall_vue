<template>
  <div class="product-list">
    <HeaderNav></HeaderNav>
    <Header></Header>
    <CrumbList title="商品列表"></CrumbList>
    <div class="sortord w">
      <span class="default zuanzhong">默认排序</span>
      <span class="price">
        价格
        <i class="shang">↑</i>
      </span>
    </div>
    <div class="prod w">
      <Product :list="list"></Product>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/public/Header";
import HeaderNav from "../components/public/HeaderNav";
import Footer from "../components/public/Footer";
import CrumbList from "../components/public/CrumbList";
import Product from "../components/public/Product.vue";
export default {
  components: {
    Header,
    HeaderNav,
    Footer,
    CrumbList,
    Product
  },
  data() {
    return {
      list: [
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        },
        {
          imgSrc: "floor2-2.jpg",
          price: 9999,
          name: "Appie iPhone 7 plus(A1661)",
          eu: "128G手机"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.product-list .prod {
  margin-top: 20px;
}
.sortord span {
  display: inline-block;
  background: #fff;
  border: 1px solid #ccc;
  color: #000;
  width: 66px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.sortord span:hover {
  border: 1px solid #c60023;
  cursor: pointer;
}
.sortord span.price {
  position: relative;
  width: 50px;
  border-left: 1px solid transparent;
}
.sortord span.zuanzhong {
  color: #fff;
  background: #c60023;
}
.sortord i {
  position: absolute;
  right: 4px;

  font-weight: bold;
}
.sortord i.shang {
  top: -1px;
  transform: rotate(0);
  transition: all 0.3s ease-out;
}
.sortord i.xia {
  top: 1px;
  transform: rotate(180deg);
  transition: all 0.3s ease-out;
}
/* .sortord i.show {
  display: inline-block;
} */
.price-icon {
}
</style>