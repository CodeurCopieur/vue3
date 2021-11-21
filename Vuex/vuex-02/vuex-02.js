const store = new Vuex.Store({
  state: {
    salades: 20
  },
  mutations: {
    uneVente(state) {
      state.salades--
    },
    unReapPro(state) {
      state.salades+=10
    }
  }
})

const vente = {
  template: '<button @click="vente"> vente 1 salade</button',
  methods: {
    vente() {
      store.commit('uneVente')
    }
  }
}

const reappro = {
  template: '<button @click="reapPro">ajoute de 10 salades</button',
  methods: {
    reapPro() {
      store.commit('unReapPro')
    }
  }
}


const app = Vue.createApp( {
  computed : {
    actuel() {
      return store.state.salades;
    }
  },
  components: {
    vente,
    reappro
  }
});
app.use(store);
app.mount("#app");