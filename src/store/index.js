import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'
// import actions from './actions'
// import { productsSchema } from './schemas'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    product: {},
    products: [],
    manufacturers: []
  },
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions)
})
