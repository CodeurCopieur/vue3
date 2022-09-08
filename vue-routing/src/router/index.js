import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Posts from '../views/Posts.vue'
import PostItem from '../views/PostItem.vue'
import NoPost from '../views/NoPost.vue'
import CreatePost from '../views/CreatePost.vue'
import PostsFooter from '../components/PostsFooter.vue'
import CreatePostFooter from '../components/CreatePostFooter.vue'
import Header from '../components/Header.vue'
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
    components: {
      default: Posts,
      footer: PostsFooter,
      navigation: Header,
    },
    beforeEnter: () => {
      console.log('route based before each');
    },
    // component: Posts,
    children: [
      {
        path: '',
        name: 'nopost',
        component: NoPost
      },
      {
        name: 'single-post',
        path: ':id',
        // name: 'PostItem',
        component: PostItem,
        props: true
      }
      // {
      //   path: ':id',
      //   name: 'PostItem',
      //   component: PostItem,
      //   props: true
      // }
    ]
  },
  // {
  //   path: '/posts/:id',
  //   name: 'PostItem',
  //   component: PostItem,
  //   props: true
  // },
  {
    path: '/createPost',
    name: 'CreatePost',
    // component: CreatePost
    components: {
      default: CreatePost,
      footer: CreatePostFooter,
      navigation: Header,
    }
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

router.beforeEach((to, _1, next)=> {
  //to, from, next
  console.log('global before each');
  // next(true)
  if(to.path === '/createPost'){
    // router.push('/test');
    // next('/test')
    // next({name: 'single-post', params: {id: '-N9Y2z5yOhtknKWfsjaW'}})
    next()
  } else {
    next()
  }
})

router.afterEach((to, _1)=> {
  console.log('router after each');
})

export default router