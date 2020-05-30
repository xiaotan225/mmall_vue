<template>
  <div class="header-cont">
    <div class="box w">
      <div class="left" @click="optonName($event)">
        <ul>
          <li>
            <a href="javascript:;">手机</a>
            <a href="javascript:;">数码</a>
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
      <div class="right" v-if="swiper">
        <swiper :options="swiperOption" class="swiper-header">
          <swiper-slide>
            <img :src="swiperSlides[0].imgSrc" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="swiperSlides[1].imgSrc" alt />
          </swiper-slide>
          <swiper-slide>
            <img :src="swiperSlides[2].imgSrc" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <Loading msg="加载中" v-if="isLoading"></Loading>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: "carrousel",
  data() {
    return {
      swiper: false,
      isLoading: false,
      /* 轮播配置 */
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          // 分页器
          el: ".swiper-pagination"
        }
      },

      swiperSlides: []
    };
  },
  methods: {
    /* 导航选择 */
    optonName(event) {
      this.isLoading = true;
      var e = event.target;
      var htmlConter = e.innerHTML;
      this.$axios
        .get("/goods/searchGooods?searchName=" + htmlConter)
        .then(res => {
          var code = res.data.code;
          if (code === 1) {
            let { href } = this.$router.push({
              path: "/productlist/" + htmlConter
            });
            this.isLoading = false;

            this.loading = "";
            //  window.open(href, '_blank');
          } else if (code === -1) {
            alert("没有搜索到结果");
          } else {
            alert("搜索失败");
          }
        });
    },
    /* 获取轮播图数据 */
    getSlideshow() {
      this.$axios
        .get("/goods/getSlideshow")
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.swiperSlides = result.data.result;
            if (this.swiperSlides.length) {
              this.swiper = true;
            }
          } else {
            alert("获取轮播图图片失败");
          }
        })
        .catch(err => {
           alert("获取轮播图图片失败");
        });
    }
  },
  created() {
    this.getSlideshow();
  }
};
</script>

<style lang="css" scoped>
.loading {
  text-align: center;
}

.header-cont {
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