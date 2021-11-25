const store = new Vuex.Store({
  state: {

  },
  mutations: {
  }
})

const app = Vue.createApp( {
  data() {
    return {
      name: '',
      email: '',
      errors: []
    }
  },
  methods: {
    isEmail(email) {
      var re = new RegExp(/^[a-z0-9.-]+@[a-z0-9._-]{2,}\.[a-z]{2,8}$/);
      re.test(email);
    },
    submit(e) {
      e.preventDefault();

      this.errors = [];

      if(!this.name) {
        this.errors.push('le nom est obligatoire !')
      }

      if(!this.email) {
        this.errors.push('le mail est obligatoire !')
      } else if (!this.isEmail(this.email) ) {
        this.errors.push(' mail pas valide !')
      }

      if(this.errors.length == 0 ) {
        e.preventDefault();
        return true;
      } else { 
        e.preventDefault();
        return false;
      }
    }
  }
});
app.use(store);
app.mount("#app");