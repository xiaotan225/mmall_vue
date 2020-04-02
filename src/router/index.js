import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../components/login/Register.vue'
import LoginIndex from '../components/login/LoginIndex.vue'
import Forget from '../components/login/Forget.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import CartList from '../components/cart/CartList.vue'
import OrderNotarize from '../components/cart/OrderNotarize.vue'
import MyMall from '../views/MyMall.vue'
import UserCenter from '../components/mymall/UserCenter.vue'
import AmendPass from '../components/mymall/AmendPass.vue'
import As from '../components/mymall/As.vue'
import MyOrder from '../components/mymall/MyOrder.vue'
import MsgModul from '../views/MsgModul.vue'
import axios from 'axios'
import SuccessOrder from '../components/cart/SuccessOrder.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'index',
    component: Index,

  },
  {
    path: '/msgModul',
    name: 'msgModul',
    component: MsgModul,
  },
  {
    path: '/successOrder',
    name: 'successOrder',
    component: SuccessOrder,
  },
  {
    path: '/myMall',
    name: 'myMall',
    component: MyMall,
    children: [
      {
        path: 'userCenter',
        name: 'userCenter',
        component: UserCenter,
      },
      {
        path: 'amendPass',
        name: 'amendPass',
        component: AmendPass,
      },
      {
        path: 'as',
        name: 'as',
        component: As,
      },
      {
        path: 'myOrder',
        name: 'myOrder',
        component: MyOrder,
      }
    ]
  },
  {
    path: '/productdetails/:id',
    name: 'productdetails',
    component: ProductDetails,
  },
  {
    path: '/productList/:searchName',
    name: 'productList',
    component: ProductList,

  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    children: [
      {
        path: 'cartlist',
        name: 'cartlist',
        component: CartList
      },
      {
        path: 'ordernotarize',
        name: 'ordernotarize',
        component: OrderNotarize
      }
    ]
  },
  {

    path: '/login',
    name: 'login',
    component: Login,

    children: [
      {

        path: 'register',
        name: 'register',
        component: Register,

      },
      {

        path: 'loginIndex',
        name: 'loginIndex',
        component: LoginIndex
      },
      {

        path: 'forget',
        name: 'forget',
        component: Forget
      },
    ]
  },

  {
    path:'/admin',
    name:'admin',
    component: () => import('@/views/admin'),
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/admin/users.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/admin/product'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/admin/order'),
      },
      {
        path: 'orderDetails/:orderId',
        name: 'orderDetails',
        component: () => import('@/views/admin/orderDetails'),
      },
      { path: '/', redirect: '/admin/users' },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,

})

router.beforeEach((to, from, next) => {
 axios.post('/users/getUser').then(res => {
    if (res.data.code === 1) {
      var userName = res.data.result.userName
      localStorage.setItem("userName",userName);
      localStorage.setItem("isLogin",true);
      if (userName) {
        next()
        return
      } else {
        if (to.path == '/' || to.path.indexOf('/login') >= 0 || to.path.indexOf('/productlist') >= 0 || to.path.indexOf('/productdetails') >= 0 ) {
          next()
        } else {
          if (confirm("没有登录是否去登录")) {
            next('/login/loginIndex')
          }
        }
      }
    } else {
      localStorage.clear("userName");
      localStorage.clear("isLogin");
      if (to.path == '/' || to.path.indexOf('/login') >= 0 || to.path.indexOf('/productlist') >= 0 || to.path.indexOf('/productdetails') >= 0 ) {
        next()
      } else {
        if (confirm("没有登录是否去登录")) {
          next('/login/loginIndex')
        }
      }
    }
  })



})
export default router
