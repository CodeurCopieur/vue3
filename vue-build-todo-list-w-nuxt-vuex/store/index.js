export const state = () => ({
  task: []
})


export const mutations = {
  ADD_TASK(state, task) {
    state.task = [{content: task, done: false}, ...state.tasks]
    // state.tasks.push({content: task, done: false})
    // state.tasks.unshift({content: task, done: false})
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK(task) {
    task.done = !task.done
  }
}