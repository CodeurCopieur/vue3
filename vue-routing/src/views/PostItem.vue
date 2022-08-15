<script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router';
  const route = useRoute(); 

  const post = ref('');
  const id = ref('');

  onMounted(() => {
    id.value = route.params.id;
    axios.get(`posts.json?id=${id.value}`).then( res => {
      post.value = res.data[id.value];
    })
  });
</script>

<template>
  <main class="max-w-3xl mx-auto my-0 ">
    <h3 class="my-5">Post Details</h3>

    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Id: {{ id }}</p>
    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Title: {{ post.title }}</p>
    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Description: {{ post.desc }}</p>
    <router-link to="/posts" class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Back to post</router-link>
  </main>
</template>