const app = Vue.createApp({

  //template: '<h2>Je suis un template</h2>',
  data() {
    return {
      title: 'j\'apprend vue js3 ',
      author: 'Codwerk',
      age: 25,
      showText: true
    }
  },
  methods: {
    change(title) {
      //this.title = 'encore et encore du vue mais vue js 3'
      this.title = title
    },
    showEl() {
      this.showText = !this.showText;
    }
  }
});

app.mount('#app')