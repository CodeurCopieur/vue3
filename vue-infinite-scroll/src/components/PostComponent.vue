<template>
  <div class="post p-6 border-b-4 border-indigo-500 last:border-b-0">
    <h2>{{post.author}}</h2>
    <p>{{post.content}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      post: Object
    }
  }
</script>