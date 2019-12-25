<template>
  <div class="header-cont">
    <div class="box w">
      <div class="left">
        <ul>
          <li>
            <a href="javascript:;" @click="optonName($event)">手机</a>
            <a href="javascript:;" @click="optonName($event)">数码</a>
          </li>
          <li>
            <a href="javascript:;">电脑</a>
            <a href="javascript:;">办公配件</a>
          </li>
          <li>
   
            <a href="javascript:;">电视</a>
            <a href="javascript:;">空调</a>
            <a href="javascript:;">冰箱</a>
            <a href="javascript:;">洗衣机</a>
          </li>
          <li>
            <a href="javascript:;">厨卫家电</a>
            <a href="javascript:;">小家电</a>
          </li>
          <li>
            <a href="javascript:;">家居</a>
            <a href="javascript:;">家具</a>
            <a href="javascript:;">家装</a>

          </li>
                    
  
  
  
   
          <li>
            <a href="javascript:;">个护化妆</a>
            <a href="javascript:;">清洁</a>
            <a href="javascript:;">纸品</a>

          </li>
          <li>
            <a href="javascript:;">手机</a>
            <a href="javascript:;">玩具</a>
          </li>
          <li>
            <a href="javascript:;">童装童鞋</a>
            <a href="javascript:;">鞋靴</a>
            <a href="javascript:;">箱包</a>
            <a href="javascript:;">钟表</a>
            <a href="javascript:;">珠宝</a>

          </li>
          <li>
            <a href="javascript:;">运动户外</a>
            <a href="javascript:;">足球</a>
            <a href="javascript:;">汽车生活</a>

          </li>
          <li>
            <a href="javascript:;">图书</a>
            <a href="javascript:;">音像</a>
            <a href="javascript:;">电子书</a>

          </li>
        </ul>
      </div>
      <div class="right">
        <swiper :options="swiperOption" class="swiper-header">
          <swiper-slide v-for="slide in swiperSlides">
            <!-- <img :src="require('../../assets/img/'+slide.imgSrc)" alt /> -->
            <!-- <img :src="require('../../assets/img/img1.jpg')" alt=""> -->
            <!-- <img src="../../assets/img/img1.jpg" alt=""> -->
            <img v-lazy="slide.imgSrc" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
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
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },

      // swiperOption: {
      //   pagination: {
      //     el: ".swiper-pagination"
      //   }
      // },
      swiperSlides: []
    };
  },
  methods: {
    optonName(event) {
      var e = event.currentTarget;
      var htmlConter = e.innerHTML;
      this.$axios
        .get("/goods/searchGooods?searchName=" + htmlConter)
        .then(res => {
          var code = res.data.code;
          if (code === 1) {
            this.$router.push({
              path: "/productlist/" + htmlConter
            });
          } else if (code === -1) {
            alert("没有搜索到结果");
          } else {
            alert("搜索失败");
          }
        });
    },
    getSlideshow() {
      this.$axios
        .get("/goods/getSlideshow")
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.swiperSlides = result.data.result;
          } else {
            alert("获取轮播图图片失败");
          }
        })
        .catch(err => {});
    }
  },
  created() {
    this.getSlideshow();
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
.box .left li:hover {
  background: #999;
}
.box .left li a:hover {
  color: #c60023;
}
.box .left a {
  font-size: 14px;
      padding: 7px 5px;
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