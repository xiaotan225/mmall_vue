<template>
  <div class="order-list">
    <h3 class="title">订单信息</h3>
    <el-table :data="newOrderlist" border style="width: 100%">
      <el-table-column prop="orderCode" label="订单号"></el-table-column>
      <el-table-column prop="name" label="收件人"></el-table-column>
      <el-table-column prop="account" label="用户账号"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button size="mini" @click="check(scope.$index, scope.row)">查看详情</el-button>
          <el-button size="mini" type="danger" @click="orderDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="order-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="orderlist.length"
        :current-page.sync="currentPage"
        :page-size="pageSize"
      ></el-pagination>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      orderlist: [],
      currentPage: 1,
      pageSize: 2
    };
  },
  computed: {
    newOrderlist() {
      let pageSize = (this.currentPage - 1) * this.pageSize
      let endPageSize = this.currentPage * this.pageSize
      return this.orderlist.slice(pageSize,endPageSize)
    }
  },
  methods: {
    /* 查看订单详情 */
    check(index, row) {
      let { orderCode } = row;
      this.$axios
        .get("/cart/getOrderDetails/?orderId=" + orderCode)
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.$router.push("/admin/orderDetails/" + orderCode);
          } else {
            alert("失败");
          }
        })
        .catch(err => {
          alert("失败");
        });
    },
    /* 删除订单信息 */
    orderDelete(index, row) {
      let $message = (type, msg) => {
        this.$message({
          type: type,
          message: msg
        });
      };
      this.$confirm("此操作将永久删除该订单信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"

      })
        .then(() => {
          let { orderCode,account } = row;
          this.$axios
            .post("/cart/cartDelete", { orderCode: orderCode,userName:account })
            .then(result => {
              let code = result.data.code;
              if (code === 0) {
                this.getOrderAll();
                $message("success", "删除成功!");
              } else {
                $message("error", "删除失败!");
              }
            })
            .catch(err => {
              $message("error", "删除失败!");
            });
        })
        .catch(() => {
          $message("info", "已取消删除");
        });
    },
    /* 获取订单信息 */
    getOrderAll() {
      this.$axios
        .get("/cart/getOrderAll")
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.orderlist = result.data.result;
          } else {
            alert("获取订单信息失败");
          }
        })
        .catch(err => {
           alert("获取订单信息失败");
        });
    }
  },
  created() {
    this.getOrderAll();
  }
};
</script>


<style lang="css" scoped>
.title {
  text-align: left;
}
.order-pagination {
  margin-top: 20px;
}
</style>
