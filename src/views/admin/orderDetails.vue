<template>
  <div class="order-detalis">
    <h3 class="title">订单详情</h3>
    <div class="header">
      <ul>
        <li>
          <span class="left">订单号：</span>
          <span class="right">{{orderDetails.orderCode}}</span>
        </li>
        <li>
          <span class="left">创建时间：</span>
          <span class="right">{{orderDetails.createTime}}</span>
        </li>
        <li>
          <span class="left">收件人：</span>
          <span class="right">{{orderDetails.name}}</span>
        </li>
        <li>
          <span class="left">地址：</span>
          <span class="right">{{orderDetails.siteData}}</span>
        </li>
        <li>
          <span class="left">订单金额：</span>
          <span class="right">{{orderDetails.total}}</span>
        </li>
      </ul>
    </div>
    <div class="body">
      <el-table :data="orderDetails.goodsList" border style="width: 100%">
        <el-table-column label="商品图片">
          <template slot-scope="scope">
            <img class="body-img" :src="orderDetails.goodsList[scope.$index].imgSrc" alt />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="商品信息"></el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column prop="count" label="数量"></el-table-column>
        <el-table-column prop="price" label="合计">
          <template slot-scope="scope">
            <p>{{orderDetails.goodsList[scope.$index].count * orderDetails.goodsList[scope.$index].price}}</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDetails: {}
    };
  },
  methods: {
    /* 获取订单详情 */
    getOrderDetails() {
      let orderCode = this.$route.params.orderId;
      this.$axios
        .get("/cart/getOrderDetails/?orderId=" + orderCode)
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.orderDetails = result.data.result;
            console.log(this.orderDetails);
          } else {
            alert("失败");
          }
        })
        .catch(err => {
          alert("失败");
        });
    }
  },
  created() {
    this.getOrderDetails();
  }
};
</script>

<style lang="css" scoped>
.order-detalis .title {
  text-align: left;
}
.order-detalis .header {
  text-align: left;
}
.header .left {
  display: inline-block;
  margin-top: 5px;
  padding: 0 20px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: right;
}
.header .right {
  display: inline-block;
  background: #fefefe;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  width: 500px;
}
.body {
  margin-top: 10px;
}
.body .body-img {
  width: 50%;
}
</style>