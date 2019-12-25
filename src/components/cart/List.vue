<template>
  <div>
    <div class="cart-list w">
      <div class="cart-title">
        <ul>
          <li>
            <!-- <input type="checkbox" id="all" />

            <label for="all">全选</label>-->
            <input type="checkbox" id="quanxuan" v-if="!isShowDel" :checked="isOptAll" @click="All" />
            <label for="quanxuan" v-if="!isShowDel">全选</label>
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
        <div v-if="!isXianshi">
          <ul v-for="(item, index) in list" :key="index" >
            <li @click="cartCountUpdate('checked',item,item.title)">
              <input type="checkbox" v-if="!isShowDel" :checked="item.isOpt" />
            </li>
            <li>
              <a href="javascript:;" class="info">
                <!-- <img src="../../assets/img/floor/floor2-2.jpg" alt /> -->
                <img v-lazy="item.imgSrc" alt />
                <span>{{item.title}}</span>
              </a>
            </li>
            <li>
              <em>{{item.price}}</em>
            </li>
            <li v-if="!isShowDel">
              <a href="javascript:;" class="add" @click="cartCountUpdate('jian',item,item.title)">-</a>
              <input type="text" v-model="item.count" class="input" @keydown="keydown(item.count)" />
              <a href="javascript:;" class="jian" @click="cartCountUpdate('add',item,item.title)">+</a>
            </li>
            <li v-if="isShowDel">{{item.count}}x</li>
            <li :class="isShowDel?'rt':''">
              <em>{{item.price * item.count}}</em>
            </li>
            <li v-if="!isShowDel">
              <a href="javascript:;" class="del" @click="del(item.title)">删除</a>
            </li>
          </ul>
        </div>

        <div v-if="isXianshi">
          <ul v-for="(item, index) in list" :key="index" v-if="item.isOpt">
            <li @click="cartCountUpdate('checked',item,item.title)">
              <input type="checkbox" v-if="!isShowDel" :checked="item.isOpt" />
            </li>
            <li>
              <a href="javascript:;" class="info">
                <!-- <img src="../../assets/img/floor/floor2-2.jpg" alt /> -->
                <img v-lazy="item.imgSrc" alt />
                <span>{{item.title}}</span>
              </a>
            </li>
            <li>
              <em>{{item.price}}</em>
            </li>
            <li v-if="!isShowDel">
              <a href="javascript:;" class="add" @click="cartCountUpdate('jian',item,item.title)">-</a>
              <input type="text" v-model="item.count" class="input" @keydown="keydown(item.count)" />
              <a href="javascript:;" class="jian" @click="cartCountUpdate('add',item,item.title)">+</a>
            </li>
            <li v-if="isShowDel">{{item.count}}x</li>
            <li :class="isShowDel?'rt':''">
              <em>{{item.price * item.count}}</em>
            </li>
            <li v-if="!isShowDel">
              <a href="javascript:;" class="del" @click="del(item.title)">删除</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="cart-bottom">
        <div class="left" :class="isShowDel?'hidden':''">
          <span @click="All">
            <input type="checkbox" id="all" :checked="isOptAll" />
            <label for="all">全选</label>
          </span>
          <a href="javascript:;" class="all-del" @click="clear">删除选择</a>
        </div>
        <div class="right">
          总价：
          <em class="color-red">￥{{total}}</em>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrumbList from "../public/CrumbList";

export default {
  props: {
    isShowDel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CrumbList
  },
  data() {
    return {
      list: [],
      ti: true,
      isOpt: null,
      isXianshi: false
    };
  },
  methods: {
    clear() {
      var userName = localStorage.getItem("userName");
      this.$axios
        .post("/cart/cartClear", {
          userName: userName
        })
        .then(res => {
          this.getCartData();
        });
    },
    cartCountUpdate(name, item, title) {
      var userName = localStorage.getItem("userName");
      var isOpt = true;
      if (name === "add") {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].title === title) {
            item.count = ++this.list[i].count;
          }
        }
      } else if (name == "jian") {
        if (item.count <= 1) {
          return;
        }
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].title === title) {
            item.count = --this.list[i].count;
          }
        }
      } else {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].title === title) {
            item.isOpt = !this.list[i].isOpt;
          }
        }
      }
      this.$axios
        .post("/cart/cartCountUpdate", {
          userName: userName,
          count: item.count,
          title: title,
          isOpt: item.isOpt
        })
        .then(res => {
          var code = res.data.code;
          if (code === "1") {
          } else {
            alert("购物车数量添加失败");
          }
        });
    },
    getCartData() {
      var userName = localStorage.getItem("userName");
      this.$axios
        .get("/cart/cartData", {
          params: {
            userName: userName
          }
        })
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            this.list = result.data.result;
            if (this.$route.name === "ordernotarize") {
              for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].isOpt) {
                  this.isXianshi = true;
                  return
                } else {
                  this.isXianshi = true;
                }
              }
              console.log(this.isXianshi)
            } else {
              this.isXianshi = false;
            }
          } else {
            alert("获取购物车数据失败");
          }
        })
        .catch(err => {
          alert("获取购物车数据失败");
        });
    },
    All() {
      var userName = localStorage.getItem("userName");
      var isOpt = null;
      this.list.forEach(item => {
        isOpt = item.isOpt = !item.isOpt;
      });
      this.$axios
        .post("/cart/checkedAll", {
          userName: userName,
          isOpt: isOpt
        })
        .then(res => {
          var code = res.data.code;
          if (code === 1) {
          } else {
            alert("购物车选中状态失败");
          }
        });
    },
    del(title) {
      var userName = localStorage.getItem("userName");
      this.$axios
        .post("/cart/cartDel", {
          userName: userName,
          title: title
        })
        .then(res => {
          var code = res.data.code;
          if (code === 1) {
            this.getCartData();
          } else {
            alert("删除购物车商品失败");
          }
        });
    }
  },
  created() {
    this.getCartData();
  },
  mounted() {},
  computed: {
    isOptAll() {
      var leng = this.list.length;
      var num = null;
      this.list.forEach(item => {
        if (item.isOpt) {
          num += 1;
        }
      });
      if (leng == num) {
        return true;
      } else {
        return false;
      }
    },
    total() {
      let sum = null;
      this.list.forEach(item => {
        if (item.isOpt) {
          sum += item.price * item.count;
        }
      });
      return sum;
    }
  }
};
</script>


<style lang="css" scoped>
.isNone {
}
.ti {
  text-align: center;
}
.hidden {
  visibility: hidden;
}
.cart-bottom {
  margin-top: 10px;
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(221, 221, 221);
}
.cart-bottom .left .all-del {
  margin-left: 10px;
}

.cart-bottom .right a {
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