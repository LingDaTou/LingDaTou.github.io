import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAweSomeSwiper from "vue-awesome-swiper"
import store from './store/index.js'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import  'styles/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

Vue.use(VueAweSomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
