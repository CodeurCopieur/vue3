const plug = (store) => {
  console.log('ini');
  store.subscribe( (mutation, state) => {
    console.log('a chaque mutation');
    console.log(mutation);
    console.log(state);
  })
}

const store = new Vuex.Store({
  plugins: [plug],
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
  template: '<button @click="vente"> vente 1 salade</button>',
  methods: {
    vente() {
      // accès à l'état du store dans un composant
      console.log(`Avant : ${store.state.salades}`);
      store.commit('uneVente')
      console.log(`Après : ${this.$store.state.salades}`);
    }
  }
}

const reappro = {
  template: '<button @click="reapPro">ajoute de 10 salades</button>',
  methods: {
    reapPro() {
      // accès à l'état du store dans un composant
      console.log(`Avant : ${store.state.salades}`);
      store.commit('unReapPro')
      console.log(`Après : ${this.$store.state.salades}`);
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