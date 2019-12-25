import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
// Axios.defaults.baseURL="http://127.0.0.1:3001"; 
Vue.prototype.$axios = Axios;

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
