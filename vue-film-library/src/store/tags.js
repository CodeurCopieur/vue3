export default {
  state:{
    tags: [{title: 'Comedie', use:false}, {title: 'Western', use:false}, {title: 'Thriller', use:false}, {title: 'Action', use:false}]
  },
  getters: {
    tags(state) {
      return state.tags
    }
  },
  mutations: {
    newTag(state, payload) {
      state.tags.push(payload)
    }
  },
  actions: {
    newTag({commit}, payload) {
      commit('newTag', payload)
    }
  }
  
}