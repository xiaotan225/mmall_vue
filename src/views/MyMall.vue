<template>
    <div class="my-mall">
        <HeaderNav></HeaderNav>
        <Header></Header>
        <CrumbList title="个人中心"></CrumbList>
        <div class="w my">
            <div class="left">
                <ul>
                    <li><router-link to="/myMall/userCenter">个人中心</router-link></li>
                    <li><router-link to="/myMall/myOrder" >我的订单</router-link></li>
                    <li><router-link to="/myMall/amendPass">修改密码</router-link></li>
                    <li><router-link to="/myMall/as">关于MMall</router-link></li>
                </ul>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/public/Header";
import HeaderNav from "../components/public/HeaderNav";
import Footer from "../components/public/Footer";
import CrumbList from "../components/public/CrumbList";
export default {
    components:{
        Header,
        HeaderNav,
        Footer,
        CrumbList
    }
}
</script>

<style lang="css" scoped>
.router-link-active{
    color: #c60023;
}
.my{
    display: flex;

}
.my .left{
   width: 130px;
}
.my .left li + li{
    margin-top: 10px;
}
.right{
       width: 90%;
}
</style>