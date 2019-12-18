<template>
  <div class="header-cont">
    <div class="box w">
      <div class="left">
        <ul>
          <li>
            <router-link to="/productlist" href>手机</router-link>
            <a href>数码</a>
          </li>
          <li>
            <a href>电脑</a>
            <a href>办公配件</a>
          </li>
          <li>
            <a href>电视</a>
            <a href>空调</a>
            <a href>冰箱</a>
            <a href>洗衣机</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
          <li>
            <a href>手机</a>
            <a href>数码</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <swiper :options="swiperOption" class="swiper-header">
          <swiper-slide v-for="slide in swiperSlides">
            <!-- <img :src="require('../../assets/img/'+slide.imgSrc)" alt /> -->
            <!-- <img :src="require('../../assets/img/img1.jpg')" alt=""> -->
            <!-- <img src="../../assets/img/img1.jpg" alt=""> -->
            <img v-lazy="require('../../assets/img/banner/'+slide.imgSrc)" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        { imgSrc: "img1.jpg" },
        { imgSrc: "img2.jpg" },
        { imgSrc: "img3.jpg" }
      ]
    };
  },
  mounted() {
  
  }
};
</script>

<style lang="css" scoped>
.header-cont {
  width: 100%;
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box .left {
  width: 240px;
  height: 350px;
  background: #666;
}
.box .left li:hover{
  background: #999;
}
.box .left li a:hover{
  color: #c60023;
}
.box .left a {
  font-size: 14px;
  padding: 5px 5px;
  display: inline-block;
  color: #fff;
}

.box .right {
  height: 350px;
  width: 830px;
}
.box .right .swiper-header {
  height: 100%;
}
.box .right .swiper-header img {
    height: 100%;
    width: 100%;
}
</style>