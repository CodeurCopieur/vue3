import { createApp } from 'vue'
import App from './App.vue'

// config router
import router from './router'

import 'uimini'

createApp(App).use(router).mount('#app')
