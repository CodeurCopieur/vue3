import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

import "./index.css"

Axios.defaults.baseURL = 'https://vue-apimoviedb-get-request.firebaseio.com/';

createApp(App).use(router).mount('#app')
