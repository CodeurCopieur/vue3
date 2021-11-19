import { createRouter, createWebHistory } from 'vue-router'
import Products from "../views/Products.vue"
import Product from "../views/Product.vue"

const routes = [
  {
    name: 'products',
    path: '/',
    component: Products,
  },
  {
    name: 'product',
    path: '/product/:id',
    component: Product,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
