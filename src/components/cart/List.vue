<template>
  <div>
    <div class="cart-list w">
      <div class="cart-title">
        <ul>
          <li>
           <!-- <input type="checkbox" id="all" />

            <label for="all">全选</label> -->
           <slot name="All"></slot>
            <slot name="quanxuan"></slot> 
            <!-- <slot name="checkboxAll"></slot> -->

          </li>
          <li>
            <span>商品信息</span>
          </li>
          <li>
            <span>单价</span>
          </li>
          <li>
            <span>数量</span>
          </li>
          <li :class="isShowDel?'rt':''">
            <span>合计</span>
          </li>
          <li v-if="!isShowDel">
            <span>操作</span>
          </li>
        </ul>
      </div>


      <div class="cart-body">
        <ul v-for="(item, index) in list" :key="index">
          <li>
            <slot name="checkboxAll"></slot>
          </li>
          <li>
            <a href="javascript:;" class="info">
              <!-- <img src="../../assets/img/floor/floor2-2.jpg" alt /> -->
            <img v-lazy="require('../../assets/img/floor/'+item.imgSrc)" alt="">

              <span>{{item.name}}</span>
            </a>
          </li>
          <li>
            <em>{{item.price}}</em>
          </li>
          <li v-if="!isShowDel">
            <a href="javascript:;" class="add">-</a>
            <input type="text" value="1" class="input" />
            <a href="javascript:;" class="jian">+</a>
          </li>
          <li v-if="isShowDel">
              1x
          </li>
          <li :class="isShowDel?'rt':''">
            <em>{{item.total}}</em>
          </li>
          <li v-if="!isShowDel">
            <a href="javascript:;" class="del">删除</a>
          </li>
        </ul>
      </div>

      
      <div class="cart-bottom" >
        <div class="left" :class="isShowDel?'hidden':''" >
          <input type="checkbox" id="all" />
          <label for="all">全选</label>
          <a href="javascript:;" class="all-del">删除选择</a>
        </div>
        <div class="right" >
          总价：
          <em class="color-red" >￥9999</em>
          <router-link to="/cart/ordernotarize" href="javascript:;">去结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";

export default {
    props:{
        isShowDel:{
            type:Boolean,
            default:false
        }
    },
    components:{
        CrumbList
    },
    data() {
        return {
            // isShowDel:false,
            list:[
                {
                     imgSrc:'floor2-2.jpg',
                     name:'Appie iPhone 7 plus(A1661) 128G手机',
                     price:999,
                     total:999,
                 },
                  {
                     imgSrc:'floor2-2.jpg',
                     name:'Appie iPhone 7 plus(A1661) 128G手机',
                     price:999,
                     total:999,
                 }
            ]
        }
    },
}
</script>


<style lang="css" scoped>
.hidden{
   visibility:hidden;
}
.cart-bottom {
  margin-top: 10px;
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  justify-content:space-between;
   background-color: rgb(238, 238, 238);
  border: 1px solid rgb(221, 221, 221);
}
.cart-bottom .left .all-del{
  margin-left: 10px;
}

.cart-bottom .right a{
 display: inline-block;
    width: 88px;
    height: 40px;
    background-color: red;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin-left: 20px;
}

 .info {
  display: flex;
  align-items: center;
}
label {
  font-size: 12px;
  display: inline-block;
}
#all {
  position: relative;
  top: 3px;
  left: -1px;
}

 .cart-body .add,
.cart-body .jian {
  width: 18px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.cart-body .input {
  width: 50px;

  text-align: center;
}
.cart-body ul {
    height: 100px;
  margin-top: 5px;
  background-color: rgb(236, 236, 236);
  border: 1px solid rgb(230, 230, 230);
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.cart-body ul li img {
  width: 20%;
}

.cart-title {
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(221, 221, 221);
  height: 30px;
  line-height: 30px;
}

.cart-title ul li:nth-child(2) {
  width: 440px;
  padding: 0 10px;
  text-align: left;
}
.cart-body ul li:nth-child(2) {
  width: 587px;
}
.cart-title ul {
  padding: 0 10px;
  display: flex;
  font-size: 12px;
}
.cart-title ul li {
  text-align: center;
  width: 176.5px;
}
.cart-body ul li {
  text-align: center;
  width: 176.5px;
}
.cart-title ul li:first-child {
  text-align: left;
}
.cart-body ul li:first-child {
  width: 50px;
  text-align: left;
}
.cart-body ul li:last-child,
.cart-title ul li:last-child {
  text-align: right;
} 
</style>