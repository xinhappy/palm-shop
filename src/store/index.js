/**
 * Created by xzz on 2017/12/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    [types.LOGIN] (state, data) {
      // localStorage.token = data
      // state.token = data
      localStorage.setItem('userInfo', JSON.stringify(data))
      state.user = data
    }
  }
})
