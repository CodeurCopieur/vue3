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
        text: '' ,
        count: 1,
        word:'',
        message: ''
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
  watch: {
    count(val) {
      if(val == 10) {
        this.count = 0
      }
    },
    word(val) {
      val.indexOf('ici')!=-1 ? this.message="le mot ici identifier" : this.message ="";
    }
  },
  created(){
    axios.get('https://randomuser.me/api/?nat=fr&results=5')
    .then( ({data}) => { 
      this.users = data.results;
    });
  }
};

Vue.createApp(app).mount("#app");