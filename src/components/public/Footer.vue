<template>
  <div class="footer-box">
    <footer class="footer w">
        <div class="top">
            <ul>
                <li><a href="#">项目实战&nbsp;&nbsp;|&nbsp;&nbsp;</a></li>
                <li><a href="#">xiaotan主页&nbsp;&nbsp;|&nbsp;&nbsp;</a></li>
                <li><a href="#">tanxiao主页&nbsp;&nbsp;|&nbsp;&nbsp;</a></li>
                <li><a href="#">xxx主页</a></li>
            </ul>
        </div>
        <div class="bottom">
            <p class="color-888">Copyright © 2018 happymmall.com All Rights Reserved</p>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="css" scoped>
.footer-box{
    margin-top: 20px;
    width: 100%;
    height: 75px;
}
.footer{
    align-items: center;
    display: flex;
    flex-direction: column;
}
.footer ul{
    display: flex;
}
.footer ul li +li{
    margin: 0 2px;
}
</style>