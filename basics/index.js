const app = Vue.createApp({

  //template: '<h2>Je suis un template</h2>',
  data() {
    return {
      x: 0,
      y: 0,
      books: [
        {
          title: 'name of the wind', author: 'patrick'
        },
        {
          title: 'the way of kings', author: 'ben'
        },
        {
          title: 'the final empire', author: 'stan'
        }
      ]
    }
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);
      if(data) {
        console.log(data);
      }

    },
    handleMousemove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    }
  }
});

app.mount('#app')