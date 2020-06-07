<template>
    <div>
        <MyMall title="订单成功" :ishid="ishid">
             <router-link to="/cart/cartlist" >去购物车查看</router-link>
             <router-link to="/myMall/myOrder" >查看我的订单</router-link>

        </MyMall>
    </div>
</template>

<script>
import MyMall from '../../views/MsgModul'
export default {
    components:{
        MyMall
    },
    data() {
        return {
            ishid:false
        }
    },
}
</script>