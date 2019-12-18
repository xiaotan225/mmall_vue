<template>
  <div class="crumb">
    <div class="crumb-list w">
      <router-link to="/">MMall</router-link>&nbsp;
      <span>></span>&nbsp;
      <a href="javascript:;">{{title}}</a>
    </div>
  </div>
</template>
<script>
export default {
  props:['title']
}
</script>
<style lang="css" scoped>
.crumb {
    margin-bottom: 15px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: #eee;
    color: #888;
    border-top: 2px solid #c60023;
}
.crumb-list a:hover{
  color: #c60023;
}
</style>