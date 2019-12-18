<template>
    <div>
       <LoginHeader></LoginHeader>
       <router-view></router-view>
       <Footer></Footer>
    </div>
</template>
<script>
import LoginHeader from "../components/public/LoginHeader";
import LoginIndex from "../components/login/LoginIndex";
import Footer from "../components/public/Footer";
export default {
    components:{
        LoginHeader,
        LoginIndex,
        Footer,
    }
}
</script>