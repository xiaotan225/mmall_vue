import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* element-ui 库 按需引入 */
import {
  Button, Table, TableColumn, Pagination,
  Container, Header, Aside, Main, Menu,
  MenuItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Pagination)




import Axios from 'axios'
// Axios.defaults.baseURL= "http://127.0.0.1:3001"
Vue.prototype.$axios = Axios;
Axios.defaults.withCredentials = true
/* 轮播图插件 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

/* 懒加载图片标 */
import VueLazyload from 'vue-lazyload'
import LazyloadPath from './assets/loading-svg/loading-balls.svg'
Vue.use(VueLazyload, {
  loading: LazyloadPath,
  try: 3 // default 1
})


/* 全局组件 */
import Loading from '@/components/public/Loading.vue'
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
