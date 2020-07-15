import Vue from 'vue'
import Vuex from 'vuex'
import regUserInfo from './modules/registerUserInfo'
import userInfo from './modules/userInfo'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    regUserInfo,
    userInfo
  }
})