import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Posts from '../views/Posts.vue'
import PostItem from '../views/PostItem.vue'
import CreatePost from '../views/CreatePost.vue'
import { Axios } from 'axios'

const routes = [
  {
    path: '/',
    // alias: '/',
    // redirect: '/posts',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'PostItem',
    component: PostItem,
    props: true
  },
  {
    path: '/createPost',
    name: 'CreatePost',
    component: CreatePost
  }, 
  {
    path: '/:NotFound(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-red-600'
});

export default router