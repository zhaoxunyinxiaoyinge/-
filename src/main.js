import Vue from 'vue'
import App from './App.vue'
import Store from "./store"
import router from "./router"
import "./common/style/index.css"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store:Store
}).$mount('#app')
