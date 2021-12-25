<template>
  <div class="scrolling-component max-w-sm mx-auto bg-white" ref="scrollingComponent">
    <PostComponent
      v-for="(post, i) in posts"
      :post="post"
      :key="i"
    ></PostComponent>
  </div>
</template>

<script>

  import getPosts from '../api/get-posts'
  import PostComponent from './PostComponent.vue'
  import {ref, onMounted, onUnmounted} from 'vue'

  export default {
    components: {
      PostComponent
    },
    setup() {

      const posts = ref(getPosts(10))

      return {
        posts
      }

    }
  }
</script>

<style>

</style>