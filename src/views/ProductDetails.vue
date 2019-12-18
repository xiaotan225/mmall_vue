<template>
  <div class="product-details">
    <HeaderNav></HeaderNav>
    <Header></Header>
    <CrumbList title="商品详情"></CrumbList>
    <div class="details-list w">
      <div class="top">
        <div class="left">
          <img src="../assets/img/floor/floor2-2.jpg" alt />
        </div>
        <div class="right">
          <h3>Appie iPhone 7 plus(A1661)</h3>
          <em class="color-red">iPhone 7、先更以红色呈现</em>
          <div class="bottom">
            <div class="price">
              <span>价格：</span>
              <em class="color-red">￥6999</em>
            </div>
            <div class="inventory">
              <span>库存：</span>
              <em>9980</em>
            </div>
            <div class="count">
              <span>数量：</span>
              <input type="text" value="1" class="input-count" />
              <span class="operate">
                <a href="javascript:;" class="add">+</a>
                <a href="javascript:;" class="jian">-</a>
              </span>
            </div>
            <div class="add-cart">
              <router-link to="/msgModul"  class="color-red">加入购物车</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="little-img">
        <ul>
          <li>
            <img src="../assets/img/floor/floor2-2.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/floor/floor2-2.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/floor/floor2-2.jpg" alt />
          </li>
          <li>
            <img src="../assets/img/floor/floor2-2.jpg" alt />
          </li>
        </ul>
      </div>
      <div class="details-img">
          <div class="title">
              <p>产品详情</p>
              
          </div>
          <div class="body">
                <ul>
                    <li>
                          <img src="../assets/img/xiangqing/tu1.jpg" alt="">
                    </li>
                     <li>
                          <img src="../assets/img/xiangqing/tu2.jpg" alt="">
                    </li>
                    <li>
                          <img src="../assets/img/xiangqing/tu3.jpg" alt="">
                    </li>
                </ul>
          </div>
      </div>
    </div>
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
  },
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped>
h3 {
  padding: 0;
  margin: 0 0 2px 0;
}
.details-list .details-img .body{
    background-color: #fff;
    width: 100%;
}
.details-list .details-img .body ul{
    width: 80%;
    margin: auto;
    padding: 10px 0;
}
.details-list .details-img .body ul li{
  
    font-size: 0;
}
.details-list .details-img .body ul img{
    width: 100%;
    
}
.details-list .details-img .title{
    background-color: rgb(235, 235, 235);
    border-bottom: #c60023;
    height: 50px;
}

.details-list .details-img p{
    height: 50px;
    width: 140px;
    background-color: #c60023;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 15px;
}
.little-img{
    margin-top: 10px;
}
.little-img ul{
    display: flex;
    align-items: center;
}
.little-img ul li + li{
    margin-left: 10px;   
}
.little-img ul li{
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
}
.little-img ul li img{
    width: 100%;
    height: 100%;
}
.details-list .top {
  font-size: 14px;
  display: flex;
}
.details-list .left {
  width: 35%;
  height: 370px;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ccc;

}
.details-list .left img {
  width: 100%;
  height: 100%;
}
.details-list .right {
  width: 65%;
  margin-left: 15px;
}

.details-list .right .bottom div {
  margin: 20px 0;
  padding: 0 10px;
}
.details-list .right .bottom .price {
  background-color: #ccc;
  padding: 10px 10px;
}
.details-list .right .bottom .price em {
  font-weight: bold;
}
.details-list .right .bottom .count {
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

.details-list .right .bottom .input-count {
  width: 40px;
  height: 22px;
  text-align: center;
  margin-right: 5px;
}
.details-list .right .bottom .operate a {
  width: 20px;
  height: 10px;
  display: block;
  border: 1px solid #ccc;
  margin: 3px 0;
  line-height: 10px;
  text-align: center;
  color: #000;
  background-color: #fff;
}
.details-list .right .bottom .add-cart a {
  display: inline-block;
  color: #fff;
  width: 125px;
  height: 30px;
  text-align: center;
  background-color: #c60023;
  line-height: 30px;
  border-radius: 2px;
}
</style>