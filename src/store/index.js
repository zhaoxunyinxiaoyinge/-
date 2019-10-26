import Vue from "vue"
import vuex from "vuex"
import state from "./state"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
Vue.use(vuex)
const store = new vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store