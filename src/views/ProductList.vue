<template>
  <div class="product-list">
    <HeaderNav></HeaderNav>
    <Header :list="list" @setData="setData"></Header>
    <CrumbList title="商品列表"></CrumbList>
    <div class="sortord w">
      <span class="default" @click="def" :class="!isPick?'zuanzhong':''">默认排序</span>
      <span class="price" @click="sort" :class="isPick?'zuanzhong':''">
        价格
        <i :class="[sortSign?'xia':'shang']">↑</i>
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
      list: [],
      sortSign: false,
      isPick: false
    };
  },
  methods: {
    def() {
      this.isPick = false;
      this.getGoodsList();
    },
    getGoodsList() {
      var searchName = this.$route.params.searchName;
      this.$axios
        .get("/goods/searchGooods?searchName=" + searchName)
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.list = result.data.result;
          } else if (code === -1) {
            alert("没有搜索到结果");
          } else {
            alert("搜索失败");
          }
        })
        .catch(err => {});
    },
    setData(data) {
      this.list = data;
    },
    sort() {
      this.isPick = true;
      this.sortSign = !this.sortSign;
      if (this.sortSign) {
        this.list.sort(function(i1, i2) {
          return i1.price - i2.price;
        });
      } else {
        this.list.sort(function(i1, i2) {
          return i2.price - i1.price;
        });
      }
    }
  },
  created() {
    this.getGoodsList();
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
      top: -2px;
  transform: rotate(0);
  transition: all 0.3s ease-out;
}
.sortord i.xia {
  top: 3px;
  transform: rotate(180deg);
  transition: all 0.3s ease-out;
}
/* .sortord i.show {
  display: inline-block;
} */
.price-icon {
}
</style>