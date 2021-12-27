import {createRouter, createWebHistory} from 'vue-router'
import Frontend from "../views/FrontEnd.vue"

const routes = [
  {path: '/', component: Frontend},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router