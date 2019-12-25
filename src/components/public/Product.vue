<template>
  <div class="product">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="toProductdetails(item.productID)">
        <!-- <router-link to="/productdetails/"> -->
        <a href="javascript:;">
          <!-- <img ="require('../../assets/img/banner/'+slide.imgSrc)" alt=""> -->

          <img v-lazy="item.imgSrc" alt />
          <strong>￥{{item.price}}</strong>
          <p>{{item.title}}</p>
          <p>{{item.describe}}</p>
          <!-- </router-link> -->
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    toProductdetails(id) {
        sessionStorage.setItem('productType', this.$route.params.searchName)

        this.$router.push('/productdetails/'+id)
    }
  },
  mounted() {
    var num = 6;
    var myarr = [];
    for (var i = 0; i < this.list.length; i++) {
      num += 6 - 1;
      myarr.push(num);
    }
    var li = document.querySelectorAll("li");
    myarr.forEach(item => {
      li.forEach((em, index) => {
        if (item == index + 1) {
          em.style.marginLeft = 0;
        }
      });
    });
  }
};
</script>
<style lang="css" scoped>
.product ul {
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.product ul li {
  padding: 20px 0;
  width: 210px;
  height: 280px;
  margin-bottom: 20px;
  background-color: #fff;
}
.product ul li:first-child {
  margin-left: 0;
}
.product ul li:nth-child(6) {
  margin-left: 0;
}

.product ul li {
  margin-left: 7px;
}
.product ul li strong {
  margin: 5px 10px;
  font-size: 15px;
  color: #c92846;
  display: block;
}
.product ul li p {
  color: #000;
  margin: 2px 10px;
  padding: 0;
}
.product ul li img {
  width: 100%;
}
</style>