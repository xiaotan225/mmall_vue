<template>
  <div class="login-index">
    <div class="login">
      <div class="title">新用户注册</div>
      <div class="body">
        <div class="user-name">
          <label for>用户名</label>
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div class="password">
          <label for>密码</label>
          <input type="password" placeholder="请输入密码" />
        </div>
         <div>
          <label for>确认密码</label>
          <input type="password" placeholder="请输确认密码" />
        </div>
         <div>
          <label for>邮箱</label>
          <input type="password" placeholder="请输邮箱" />
        </div>
        <div class="login-btn">
          <button>注册</button>
        </div>
      
      </div>
        <div class="options">
          <router-link to="/login/loginIndex">已有账号，去登陆>>></router-link>
        </div>
    </div>
  </div>
</template>
