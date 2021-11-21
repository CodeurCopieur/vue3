const store = new Vuex.Store({
  state: {
    compteur: 0
  },
  mutations: {
    plus(state) {
      state.compteur++;
    },
    moins(state) {
      state.compteur--;
    }
  }
})
const app = Vue.createApp( {
  computed : {
    actuel() {
      return store.state.compteur;
    }
  },
  methods: {
    plusUn() {
      store.commit('plus');
    },
    moinsUn() {
      store.commit('moins');
    }
  }
});
app.use(store);
app.mount("#app");