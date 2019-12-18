<template>
  <div class="user-center">
    <div class="title">
      <h3>我的信息</h3>
    </div>
    <div class="body">
      <ul>
        <li>用户名：</li>
        <li>电话：</li>
        <li>邮箱：</li>
      </ul>
      <ol>
          <li>xiaotan</li>
          <li>1550662483</li>
          <li>2254301565@qq.com</li>
      </ol>
      
    </div>
    <div class="redact">
        <router-link to="/asdf">编辑</router-link>
      </div>
  </div>
</template>


<style lang="css" scoped>
.user-center {
  background-color: #fff;
  padding: 10px;
}
.user-center .title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.user-center .title h3 {
  margin: 0;
  padding-bottom: 10px;
}
.user-center .body{
  display: flex;
}
.user-center .body ol li{
     margin-top: 5px;
  height: 40px;
  line-height: 40px;

}
.user-center .body ul li {
  margin-top: 5px;
  padding: 0 0 0 20px;
  width: 55px;
  height: 40px;
  line-height: 40px;
  text-align-last: justify;
}
.redact {
    display: flex;
    justify-content: flex-end;
}
.redact a{
    display: inline-block;
  width: 50px;
    height: 30px;
    background-color: red;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 2px;
 
}
</style>