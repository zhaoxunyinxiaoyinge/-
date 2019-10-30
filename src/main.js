import Vue from 'vue'
import App from './App.vue'
import Store from "./store"
import router from "./router"
import "./common/style/index.css"
import axios from "axios"
import Scroll from "./components/Scroll"
import Loading from "./components/Loading"
Vue.prototype.axios=axios;
Vue.component("Scroll",Scroll)
Vue.component("Loading",Loading)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store:Store
}).$mount('#app')
