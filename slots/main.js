// Fonctions de rendu (Render Functions)

const test = {
  render() {
    return h('div', {}, [
      h('header', {}, this.$slots.titre()),
      h('main', {}, this.$slots.default()),
      h('footer', {}, this.$slots.bas())
    ])
  }
}

const {h} = Vue;
const main = Vue.createApp({
  components: {
    test
  }
});
let vm = main.mount('#main');