import Vue from 'vue'
import App from './App'
// 导入路由
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //简写==router:router,
  render: h => h(App)
})
