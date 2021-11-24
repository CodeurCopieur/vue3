const store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    maj(state, payLoad) {
      state.message = payLoad
    }
  }
})
const app = Vue.createApp( {
  computed : {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$store.commit('maj', e.target['message'].value);
      console.log(e.target['message'].value);
    }
  }
});
app.use(store);
app.mount("#app");