<template>
  <div class="header-box w">
    <header class="header">
      <div class="left">
        <router-link to="/" class="logo color-red">MMall</router-link>
      </div>
      <div class="right">
        <input
          type="text"
          class="search-input"
          placeholder="请输入产品名称  如：“手机”"
          v-model="searchName"
          @keyup.enter="searchBtn()"
        />
        <a href="javascript:;" class="search-btn" @click="searchBtn">搜索</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["list"],
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    searchBtn() {
      this.$axios
        .get("/goods/searchGooods?searchName=" + this.searchName)
        .then(result => {
          var code = result.data.code;
          if (code === 1) {
            let routerName = this.$route.path;
            this.$emit("setData", result.data.result);
            this.$router.push({
              path: "/productlist/" + this.searchName
            });
          } else if (code === -1) {
            alert("没有搜索到结果");
          } else {
            alert("搜索失败");
          }
        })
        .catch(err => {});
    }
  }
};
</script>
<style lang="css" scoped>
.active {
  color: red;
}
.text-danger {
  background-color: #000;
}
.header {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 111px;
}
.header .left {
  font-size: 36px;
  font-weight: 700;
  width: 200px;
}

.header .right .search-input {
  width: 550px;
  padding: 10px;
  border: 2px solid #c60023;
  font-size: 15px;
  outline: none;
}
.header .right .search-btn {
  width: 80px;
  border: none;
  background-color: #c60023;
  font-size: 17px;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  text-align: center;
  padding-top: 10px;
    padding-bottom: 11.5px;
}
</style>
