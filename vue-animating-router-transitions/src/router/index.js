import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Guide from '../components/Guide.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }, 
    {
      path: '/guide',
      component: Guide
    }
  ]
})

export default router