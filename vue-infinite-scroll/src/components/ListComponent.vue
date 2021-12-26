<template>
  <div class="scrolling-component max-w-sm mx-auto bg-white">
    <PostComponent
      v-for="(post, i) in posts"
      :post="post"
      :key="i"
    ></PostComponent>
    <div  ref="scrollingComponent"> loader </div>
  </div>
</template>

<script>

  import PostComponent from './PostComponent.vue'
  import {ref, onMounted, onUnmounted} from 'vue'
  import getPosts from '../api/get-posts'

  export default {
    components: {
      PostComponent
    },
    setup() {

      const posts = ref(getPosts(10))
      const scrollingComponent = ref(null)

      const loadMorePosts = () => {
        let newPosts = getPosts(10)
        posts.value.push(...newPosts)
      }

    const scrollTriger = ()=> {
      
       const observer = new IntersectionObserver( (entries) => {
         entries.forEach( entry => {
           if(entry.intersectionRatio > 0 ) {
             setTimeout(()=> {
               loadMorePosts()
             },1000)
           }
         });
       });
       observer.observe(scrollingComponent.value);
     }

      onMounted(()=> {
        scrollTriger()
      })

      return {
        posts,
        scrollingComponent
      }

    }
  }
</script>