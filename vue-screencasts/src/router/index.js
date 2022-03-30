import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductWatch from '../views/ProductWatch.vue'
import TagProductList from '../views/TagProductList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product/:id',
    name: 'product-watch',
    component: ProductWatch,
    params: true
  },{
    path: '/tag/:name',
    name: 'tag',
    component: TagProductList,
    params: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
