
const app = Vue.createApp({});
app.component('test', {
  template: '<div><slot>Text par défaut</slot></div>'
})
app.component('art', {
  template: `<div>
  <h2> {{ title }}</h2>
  <slot>Text par défaut</slot>
  </div>`,
  props: ['title']
})

app.component('slotnommes', {
  template: `
    <section>
      <h2>{{ title }}</h2>
      <slot name="texte">Text par défaut</slot>
      <slot name="default"></slot>
    </section>
  `,
  props: ['title']
})

app.component('employes', {
  template:`
  <div v-for="user in users">
    <slot :user="user"></slot>
  </div>
  `,
  data() {
    return {
      users: []
    }
  },
  created(){
    axios.get('https://randomuser.me/api/?nat=fr&results=2')
    .then( ({data}) => { this.users = data.results;})
  }
})

app.mount('#app');