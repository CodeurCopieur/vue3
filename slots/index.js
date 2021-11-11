
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

app.mount('#app');