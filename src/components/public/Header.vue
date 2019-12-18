<template>
  <div class="header-box w">
    <header class="header">
      <div class="left">
        <router-link to="/" class="logo color-red">MMall</router-link>
      </div>
      <div class="right">
        <input type="text" class="search-input" placeholder="请输入产品名称" />
        <a href="javascript:;" class="search-btn">搜索</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
     
    }
  },
};
</script>
<style lang="css" scoped>
.active{
  color: red;
   
}
.text-danger{
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
  width:  200px;
}

.header .right .search-input{
  width: 550px;
  padding: 10px;
  border: 2px solid #c60023;
  font-size: 15px;
  outline: none;
}
.header .right .search-btn{
   width: 80px;
    border: none;
    background-color: #c60023;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    display: inline-block;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 12px;
}
</style>
