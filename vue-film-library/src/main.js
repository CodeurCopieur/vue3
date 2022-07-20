import { createApp } from 'vue'
import App from './App.vue'

// config router
import router from './router'

import './index.css'

import store from './store/index'

createApp(App).use(store).use(router).mount('#app')
