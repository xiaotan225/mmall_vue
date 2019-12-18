<template>
  <div class="index">
    <HeaderNav></HeaderNav>
    <Header></Header>
    <HeaderCont></HeaderCont>
    <GoodsRd :titleColor="orange" :productList="electricList">
      <h3>F1&nbsp;家用电器</h3>
    </GoodsRd>
    <GoodsRd :titleColor="red" :productList="shumaList">
      <h3>F2&nbsp;数码3C</h3>
    </GoodsRd>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/public/Header";
import HeaderNav from "../components/public/HeaderNav";
import HeaderCont from "../components/index/HeaderCont";
import GoodsRd from "../components/index/GoodsRd";
import Footer from "../components/public/Footer";

export default {
  name: "index",
  data() {
    return {
      orange: "orange",
      red: "red",
      electricList: [
        { title: "双开冰箱", imgSrc: "floor1-1.jpg" },
        { title: "高清电视", imgSrc: "floor1-2.jpg" },
        { title: "洗衣机", imgSrc: "floor1-3.jpg" },
        { title: "空调", imgSrc: "floor1-4.jpg" },
        { title: "电热水器", imgSrc: "floor1-5.jpg" }
      ],
      shumaList: [
        { title: "笔记本", imgSrc: "floor2-1.jpg" },
        { title: "手机", imgSrc: "floor2-2.jpg" },
        { title: "平板电脑", imgSrc: "floor2-3.jpg" },
        { title: "数码相机", imgSrc: "floor2-4.jpg" },
        { title: "3C配件", imgSrc: "floor2-5.jpg" }
      ]
    };
  },
  components: {
    HeaderNav,
    Header,
    HeaderCont,
    GoodsRd,
    Footer
  }
};
</script>
