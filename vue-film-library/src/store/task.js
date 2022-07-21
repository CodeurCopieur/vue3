export default {
  state:{
    tasks : [
      { id: 1, title: 'title 1', description: 'description 1', whatWatch: 'Film', completed: false, editing: false },
      { id: 2, title: 'title 2', description: 'description 2', whatWatch: 'Serial', completed: false, editing: false }
    ]
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  },
  mutations: {},
  actions: {}
  
}