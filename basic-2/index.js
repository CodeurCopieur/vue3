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
        users: [],
        text: '' 
      }
  },
  computed:{
    capitalize() {
      const t = this.text.split(' ');
      for (let i = 0; i < t.length; i++) {
        t[i] = t[i].slice(0, 1).toUpperCase() + t[i].slice(1);
      }

      return t.join(' ');
    },
    textReverse() {
      return this.text.split('').reverse().join('')
    }
  },
  created(){
    axios.get('https://randomuser.me/api/?nat=fr&results=5')
    .then( ({data}) => { console.log(data.results); this.users = data.results;})
  }
};

Vue.createApp(app).mount("#app");