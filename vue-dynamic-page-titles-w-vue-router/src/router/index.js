import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import env from '../env'
const routes = [
  {
    path: '/',
    component: Home,
    name:'Home'
  },
  {
    path: '/about',
    component: About,
    name:'About'
  },
  {
    path: '/post/:id',
    component: Post,
    name:'Post'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-red-600'
});

router.beforeEach((to, from, next)=> {
  //to, from, next
  console.log('global before each', to, from);
  // document.title = to.name;
  let documentTitle = `${ env.VUE_APP_TITLE } - ${to.name}`;

  if (to.params.title) {
    documentTitle += ` - ${ to.params.title }`
  }
  document.title = documentTitle;
  next()
})


export default router