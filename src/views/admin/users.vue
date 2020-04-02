<template>
  <div class="user-list">
    <h3 class="title">用户管理</h3>
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column prop="date" label="创建日期"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="mail" label="邮箱"></el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="isFreeze(scope.$index, scope.row)"
          >{{userlist[scope.$index].isFreeze?'已冻结':'未冻结'}}</el-button>
          <el-button
            size="mini"
            @click="isPromoteAdmin(scope.$index, scope.row)"
          >{{userlist[scope.$index].isAdmin?'已是管理员':'提升管理员'}}</el-button>
          <el-button size="mini" type="danger" @click="userDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="user-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
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
      tableData: [],
      currentPage: 1, // 当前选择的页数
      pageSize: 2 // 一页显示多少数据
    };
  },
  computed: {
    /* 分页 */
    userlist() {
      var pageSize = (this.currentPage - 1) * this.pageSize;
      var endPageSzie = this.currentPage * this.pageSize;
      return this.tableData.slice(pageSize, endPageSzie);
    }
  },
  methods: {
    /* 成功消息弹窗 */
    succMsgAlert(msg) {
      this.$notify({
        title: "成功",
        message: msg,
        type: "success"
      });
    },
    /* 错误消息弹窗 */
    errMsgAlert(msg) {
      this.$notify.error({
        title: "错误",
        message: msg
      });
    },
    /* 提升管理员 */
    isPromoteAdmin(index, row) {
      let { name, isAdmin } = row;
      this.$axios
        .post("/users/setAdmin", {
          userName: name,
          isAdmin: !isAdmin
        })
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.getUsers();
            if (isAdmin) {
              this.succMsgAlert("成功解除管理员权限");
            } else {
              this.succMsgAlert("成功提升管理员权限");
            }
          } else {
            this.errMsgAlert("修改失败");
          }
        })
        .catch(err => {
          this.errMsgAlert("修改失败");
        });
    },
    /* 是否冻结 */
    isFreeze(index, row) {
      let { name, isFreeze } = row;
      this.$axios
        .post("/users/isFreeze", {
          userName: name,
          isFreeze: !isFreeze
        })
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.getUsers();
            if (isFreeze) {
              this.succMsgAlert("成功解除冻结账号");
            } else {
              this.succMsgAlert("成功冻结账号");
            }
          } else {
            this.errMsgAlert("修改失败");
          }
        })
        .catch(err => {
          this.errMsgAlert("修改失败");
        });
    },
    /* 删除用户 */
    userDelete(index, row) {
      let $message = (type, msg) => {
        this.$message({
          type: type,
          message: msg
        });
      };
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let { name } = row;
          this.$axios
            .post("/users/userDelete", {userName:name})
            .then(result => {
              console.log(result)
              let code = result.data.code;
              if (code === 0) {
                this.getUsers()
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

    /* 获取用户数据 */
    getUsers() {
      this.$axios
        .post("/users/getUsers")
        .then(result => {
          let code = result.data.code;
          if (code === 0) {
            this.tableData = result.data.result;
          } else {
            alert("获取信息失败");
          }
        })
        .catch(err => {
          alert("获取信息失败");
        });
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style lang="css" scoped>
.user-pagination {
  margin-top: 20px;
}
.title{
  text-align: left;
}
</style>
