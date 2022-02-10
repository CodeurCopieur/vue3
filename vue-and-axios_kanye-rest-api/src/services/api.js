import axios from 'axios'

export default(url='https://api.kanye.rest/') => {
  return axios.create({
    baseURL: url,
  })
}