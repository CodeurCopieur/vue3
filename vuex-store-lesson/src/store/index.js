import { createStore } from 'vuex'
import axios from "axios"

import { SET_NOTE } from './mutation-types';

export default createStore({
  state: {
    currentProduct: {},
    products: []
  },
  getters: {
    getProducts(state){
      return state.products;
    },
    getCurrentProduct(state) {
      return state.currentProduct
    }
  },
  mutations: {
    setCurrentProduct (state, product) {
      state.currentProduct = product
    },
    loadProducts (state, products) {
      state.products = products;
    },
    [SET_NOTE] (state, rate) {
      state.currentProduct.rating.rate = rate;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then( response => {
        commit('loadProducts', response.data)
      })
    },
    setCurrentProduct({ commit, state }, productId) {
      let productFound = {};
      state.products.forEach( product => {
        if(productId == product.id) {
          productFound = product
        }
      })
      commit('setCurrentProduct', productFound)
    }
  },
  modules: {
  }
})
