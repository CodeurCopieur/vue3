var todos = [
  {
    text: 'HTML/CSS',
    done: true
  },
  {
    text: 'JS',
    done: false
  }
]

const todosApp = {
  data() {
    return {
      todos
    }
  }
};

Vue.createApp(todosApp).mount('#app');