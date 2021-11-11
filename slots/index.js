
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


app.mount('#app');