import API from './api'

export default {
  getQuote() {
    return API().get('/');
  },
  createPost(data) {
    return API('https://jsonplaceholder.typicode.com/').post('/posts', data)
  }
}