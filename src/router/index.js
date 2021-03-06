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
    path: '/myMall',
    name: 'myMall',
    component: MyMall,
    children:[
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
    path: '/productdetails',
    name: 'productdetails',
    component: ProductDetails,
  },
  {
    path: '/productList',
    name: 'productList',
    component: ProductList,
   
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
   children:[
     {
       path:'cartlist',
       name:'cartlist',
       component:CartList
     },
     {
       path:'ordernotarize',
       name:'ordernotarize',
       component:OrderNotarize
     }
   ]
  },
  {
    
    path: '/login',
    name: 'login',
    component: Login,
    
    children:[
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
 
})

export default router
