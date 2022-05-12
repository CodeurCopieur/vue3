import { createStore } from 'vuex';
import Api from '@/service/api';

export default createStore({
  state: {
    products: [],
    playedProducts: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PLAYED_VIDEOS(state, playedProducts) {
      state.playedProducts = playedProducts;
    }
  },
  actions: {
    async loadProducts({commit}) {
      let res = await Api().get('/products');
      let products = res.data;
      commit('SET_PRODUCTS', products);

      let playedProducts = JSON.parse(window.localStorage.playedProducts)
      commit('SET_PLAYED_VIDEOS', playedProducts);
    }
  },
  modules: {
  }
})
