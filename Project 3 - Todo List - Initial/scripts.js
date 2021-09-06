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
      todos,
      newTodo: { done:false }
    }
  },
  methods:{
    addTodo() {

      if(this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { done:false }
      } else {
        alert('le texte est nécessaire !')
      }
       
    }
  }
};

Vue.createApp(todosApp).mount('#app');