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



























/* 
{ 
    "_id" : ObjectId("5dfa2f1096fc8aaf607cb481"), 
    "mobile" : [
        {
            "title" : "Appie iPhone 7 plus(A1661)", 
            "productID" : "00001", 
            "describe" : "128G手机", 
            "stock" : 5.0, 
            "price" : 9.0, 
            "imgSrc" : "https://img14.360buyimg.com/n1/s450x450_jfs/t1/46735/28/7091/107313/5d4bd6d7Eae9d134b/d3f0c62fdcfe6235.jpg", 
            "childImgSrc" : [
                {
                    "src" : "https://img14.360buyimg.com/n1/s450x450_jfs/t1/46735/28/7091/107313/5d4bd6d7Eae9d134b/d3f0c62fdcfe6235.jpg"
                }, 
                {
                    "src" : "https://img14.360buyimg.com/n1/s450x450_jfs/t1/38546/2/9981/90766/5d4bd6d7E5051f3fa/fe4a3e35e555dcdc.jpg"
                }, 
                {
                    "src" : "https://img14.360buyimg.com/n1/s450x450_jfs/t1/57408/39/7140/19576/5d4bd6d7Eba963c77/98b3cafa69c6da47.jpg"
                }, 
                {
                    "src" : "https://img14.360buyimg.com/n1/s450x450_jfs/t1/66533/19/6499/37422/5d4bd6d7E137dd580/b8a4d7d9a5d93bbc.jpg"
                }
            ], 
            "detailsImgSrc" : [
                {
                    "src" : "https://img11.360buyimg.com/popWaterMark/jfs/t1/95113/27/7239/475386/5df9d6d3Ea2e1142f/6e508005b1e225cb.jpg"
                }, 
                {
                    "src" : "https://img11.360buyimg.com/popWaterMark/jfs/t1/92879/14/7166/418754/5df9d6d4E281b0001/92ba2fc0cadf563a.jpg"
                }
            ]
        }, 
        {
            "title" : "努比亚 nubia 红魔3S电竞游戏手机", 
            "productID" : "00002", 
            "describe" : "8GB+128GB ", 
            "stock" : 5.0, 
            "price" : 999.0, 
            "imgSrc" : "https://img10.360buyimg.com/n1/s450x450_jfs/t1/52299/20/12979/274134/5d9d9fdeE71d91646/1b4dedd95e4c32fb.jpg", 
            "childImgSrc" : [
                {
                    "src" : "https://img10.360buyimg.com/n1/s450x450_jfs/t1/52299/20/12979/274134/5d9d9fdeE71d91646/1b4dedd95e4c32fb.jpg"
                }, 
                {
                    "src" : "https://img10.360buyimg.com/n1/s450x450_jfs/t1/92425/26/7455/189875/5dfb4af5E152a65be/48fb0a09f7ee7e7c.jpg"
                }, 
                {
                    "src" : "https://img10.360buyimg.com/n1/s450x450_jfs/t1/73434/39/12365/231064/5d9d9fe4E98deb119/842e203bd0d87353.jpg"
                }
            ], 
            "detailsImgSrc" : [
                {
                    "src" : "https://img14.360buyimg.com/cms/jfs/t1/64481/38/13212/268386/5da96bfaE25deba4f/b9c0c43aeb0d6f39.jpg"
                }
            ]
        }
    ], 
    "digital" : [
        {
            "productID" : "00001", 
            "title" : "数码相机", 
            "describe" : "超高清的像素", 
            "stock" : 56.0, 
            "price" : 555.0, 
            "imgSrc" : "http://127.0.0.1:3001/images/floor/floor2-4.jpg"
        }
    ], 
    "slideshow" : [
        {
            "imgSrc" : "http://127.0.0.1:3001/images/banner/img1.jpg"
        }, 
        {
            "imgSrc" : "http://127.0.0.1:3001/images/banner/img2.jpg"
        }, 
        {
            "imgSrc" : "http://127.0.0.1:3001/images/banner/img3.jpg"
        }
    ]
} */