const app = Vue.createApp({

  //template: '<h2>Je suis un template</h2>',
  data() {
    return {
      x: 0,
      y: 0
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