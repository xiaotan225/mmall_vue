<template>
  <div class="goods-rd w">
    <div class="title" :class="titleColor">
        <slot></slot>
    </div>
    <div class="body">
      <ul>
        <li v-for="(item, index) in productList" :key="index" @click="categoryId(item.categoryId)">
          <a href="javascript:;">
            <h4>{{item.title}}</h4>
            <img v-lazy="require('../../assets/img/floor/'+item.imgSrc)" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:['titleColor','productList','count'],
    data() {
        return {
        }
    },
    computed: {
      
    },
    methods: {
        categoryId(categoryId){
           this.$router.push({
              path: "/productlist/" + categoryId
            });
        },
    },
    mounted() {
    },
};
</script>

<style lang="css" scoped>
.goods-rd .orange {
  color: orange;
  border-bottom: 1px solid orange;
}
.goods-rd .red {
  color: red;
  border-bottom: 1px solid red;
}
.goods-rd .body{
    margin-top: 10px;
}
.goods-rd .body ul{
    display: flex;
}
.goods-rd .body ul li + li{
  margin-left: 20px;

}
.goods-rd .body ul li{
  width: 200px;
  height: 220px;
  padding: 10px 0;
  background-color: #fff;
}
.goods-rd .body ul li h4{
    
    color: black;
    font-size: 13px;
    font-weight: normal; 
    padding: 0 0 6px 10px;
    margin: 0;
}
.goods-rd .body li a{
    
    display: flex;
    flex-direction: column;
}
.goods-rd .body li img{
    width: 100%;
    height: 100%;
}
</style>