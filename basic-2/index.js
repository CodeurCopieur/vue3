const Un = {
  template: `
        <span> {{ unePerson.name.last }}</span><br/>
        <span> {{ unePerson.email }}</span><br/>
        <span> {{ unePerson.phone }}</span>
      `,
  props: ['unePerson']
}

const Tous = {
  components: {
    'un': Un
  },
  template: `
    <ul>
      <li v-for="person in persons">
        <un :unePerson="person"></un>
      </li>
    </ul>`,
  props: ['persons']
}

const app = {
  components: {
    'tous': Tous
  },
  data() {
      return {
        users: [] 
      }
  },
  methods:{

  },
  created(){
    axios.get('https://randomuser.me/api/?nat=fr&results=5')
    .then( ({data}) => { console.log(data.results); this.users = data.results;})
  }
};

Vue.createApp(app).mount("#app");