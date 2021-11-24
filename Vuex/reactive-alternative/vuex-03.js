let state = Vue.reactive({
  salades: 20
})

const vente = {
  template: '<button @click="vente"> vente 1 salade</button>',
  methods: {
    vente() {
      // accès à l'état du store dans un composant
      state.salades--
    }
  }
}

const reappro = {
  template: '<button @click="reapPro">ajoute de 10 salades</button>',
  methods: {
    reapPro() {
      // accès à l'état du store dans un composant
      state.salades+=10
    }
  }
}
const app = Vue.createApp({
  components: {
    vente,
    reappro
  },
  computed: {
    etat() {
      return {state}
    }
  }
});
app.mount("#app");