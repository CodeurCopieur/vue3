export default {
  state:{
    tasks : [
      { id: 1, title: 'title 1', description: 'description 1', whatWatch: 'Film', completed: true, editing: false, tagsUsed: [{title: 'Horreur'}, {title: 'Action'}], time: '1 Heures 30 Minutes' },
      { id: 2, title: 'title 2', description: 'description 2', whatWatch: 'Serial', completed: false, editing: false, tagsUsed: [{title: 'Horreur'}, {title: 'Action'}], time: '7 Heures 20 Minutes' }
    ]
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getCompletedTasks(state) {
      return state.tasks.filter( task => task.completed)
    },
    getNotCompletedTasks(state) {
      return state.tasks.filter( task => !task.completed)
    }
  },
  mutations: {
    newTask(state, payload) {
      payload.id = Math.random()
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask({commit}, payload) {
      commit('newTask', payload)
    }
  }
  
}