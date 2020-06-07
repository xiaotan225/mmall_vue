<template>
  <div class="my-order">
    <Loading msg="加载中" v-if="loading"></Loading>
    <div class="wu" v-if="wu">暂无订单</div>
    <div v-if="orderList.length" class="order">
      <h3 class="header-title">我的订单</h3>
      <table class="order-title">
        <tbody>
          <tr>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>合计</th>
          </tr>
        </tbody>
      </table>
      <table class="order-body" v-for="(item, index) in orderList" :key="index">
        <tbody>
          <tr>
            <td colspan="6" class="order-body-title">
              <span class="order-text">
                订单号：
                <a href class="phone">{{item.orderId}}</a>
              </span>
              <span class="order-text">{{item.createDate}}</span>
              <span class="order-text">收件人：{{item.siteData.name}}</span>
              <span class="order-text">
                订单总价：
                <span class="special">￥{{item.total}}</span>
              </span>
            </td>
          </tr>
          <tr class="order-cont" v-for="(goods, index) in item.goodsList" :key="index">
            <td class="order-cont-img">
              <a href>
                <img :src="goods.imgSrc" alt />
              </a>
            </td>
            <td class="order-cont-title">
              <a href>{{goods.title}}</a>
            </td>
            <td class="order-cont-price layout">￥{{goods.price}}</td>
            <td class="order-cont-count layout">{{goods.count}}</td>
            <td class="order-cont-total layout">￥{{goods.count * goods.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [],
      totalList: [],
      wu: false,
      loading: true
    };
  },
  methods: {
    getOrderData() {
      let userName = localStorage.getItem("userName");
      if (!userName) {
        return;
      }
      this.$axios
        .get("/cart/getOrder?userName=" + userName)
        .then(result => {
          let code = result.data.code;
          if (code === 1) {
            this.orderList = result.data.result;
            if (!this.orderList.length) {
              this.wu = true;
            }
            this.loading = false;
          } else {
            alert("获取订单数据失败");
          }
        })
        .catch(err => {
          alert("获取订单数据失败");
        });
    }
  },
  created() {
    this.getOrderData();
  }
};
</script>

<style lang="css" scoped>
.wu {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
.my-order {
}
.order {
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.my-order .header-title {
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #666;
}
.my-order .order-title {
  width: 100%;
  font-weight: 100;
  color: #666;
  padding: 10px 0;
  background: #eee;
  margin-bottom: 20px;
}
.order-body {
  margin-bottom: 20px;
  width: 100%;
  border-collapse: collapse;
}
.order-body .order-body-title {
  padding: 10px 10px;
  background: #eee;
}
.order-body .order-body-title .phone {
  font-weight: 700;
}
.order-body .order-body-title .special {
  font-weight: 700;
  color: #c60023;
}
.order-body .order-text {
  color: #999;
  margin-right: 13px;
}
.order-body .order-cont {
  background: #fafafa;
  height: 100px;
  border-bottom: 1px solid #eee;
}
.order-body .order-cont-img {
  width: 7%;
  text-align: center;
}
.order-body .order-cont-img img {
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
}
.order-body .order-cont-title {
  width: 18%;
}

.layout {
  text-align: center;
  width: 14%;
  color: #666;
}
</style>