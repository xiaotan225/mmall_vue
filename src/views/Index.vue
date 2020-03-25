<template>
  <div class="index">
    <HeaderNav></HeaderNav>
    <Header></Header>
    <HeaderCont></HeaderCont>
    <GoodsRd :titleColor="orange" :productList="electricList" :count="count" >
      <h3>F1&nbsp;家用电器</h3>
    </GoodsRd>
    <GoodsRd :titleColor="red" :productList="shumaList" :count="count+5">
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
  created() {
  },
  methods: {
  
  },
  data() {
    return {
      count:6,
      orange: "orange",
      red: "red",
      electricList: [
        { title: "双开冰箱", imgSrc: "floor1-1.jpg" ,categoryId:100006},
        { title: "高清电视", imgSrc: "floor1-2.jpg" ,categoryId:100007},
        { title: "洗衣机", imgSrc: "floor1-3.jpg" ,categoryId:100008},
        { title: "空调", imgSrc: "floor1-4.jpg" ,categoryId:100009},
        { title: "电热水器", imgSrc: "floor1-5.jpg" ,categoryId:1000010}
      ],
      shumaList: [
        { title: "笔记本", imgSrc: "floor2-1.jpg",categoryId:100011 },
        { title: "手机", imgSrc: "floor2-2.jpg" ,categoryId:100012},
        { title: "平板电脑", imgSrc: "floor2-3.jpg" ,categoryId:100013},
        { title: "数码相机", imgSrc: "floor2-4.jpg" ,categoryId:100014},
        { title: "3C配件", imgSrc: "floor2-5.jpg" ,categoryId:100015}
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


<style >
.area-box {
  width: 300px;
  height: 200px;
  background-color: #ccffcc;
}
.dragover {
  background-color: #99cccc;
}
.drop {
  background-color: #ffffcc;
}
.img-box img {
  width: 200px;
}
.lv {
  background-color: blue;
}
.span {
  height: 100%;
  display: inline-block;
}
.span.red {
  background-color: red;
}
.progress {
  width: 200px;
  height: 20px;
  background-color: bisque;
}
.progress button {
  float: right;
}
.file {
  position: relative;
  background-color: #c3e2f3;
  padding: 4px 5px;
  border-radius: 5px;
  color: #1e88c7;
  border: 1px solid #b5e3fc;
  display: inline-block;
}
.file input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  height: 100%;
}

.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>
