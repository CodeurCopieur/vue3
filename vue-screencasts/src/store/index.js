import { createStore } from 'vuex';
import Api from '@/service/api';

export default createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    async loadProducts({commit}) {
      let res = await Api().get('/products');
      let products = res.data;
      commit('SET_PRODUCTS', products);
    }
  },
  modules: {
  }
})
