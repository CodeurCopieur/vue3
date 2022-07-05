import { createApp } from 'vue'
import App from './App.vue'

// config router
import router from './router'

import './index.css'

createApp(App).use(router).mount('#app')
