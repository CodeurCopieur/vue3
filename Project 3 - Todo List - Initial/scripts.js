const todosApp = {
  data() {
    return {
      todos:[],
      newTodo: { done:false }
    }
  },
  methods:{
    addTodo() {

      if(this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { done:false }
        localStorage.setItem('todos', JSON.stringify(this.todos));
      } else {
        alert('le texte est nécessaire !')
      }
       
    }
  },
  created() {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : this.todos;
  }
};

Vue.createApp(todosApp).mount('#app');