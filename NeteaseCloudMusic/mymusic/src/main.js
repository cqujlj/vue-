import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css';
import router from "./router";
import store from "./store/store";
// import './units/rem'
Vue.config.productionTip = false;
//添加数据总线 实现组件与组件之间通信
//实现登录状态的全局传递
Vue.prototype.$bus=new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
