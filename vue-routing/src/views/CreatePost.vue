<script setup>
  import axios from 'axios'
  import {reactive, onMounted } from 'vue'
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const state = reactive({
    title: '',
    desc: '',
  });

  const onCreatePost = (e) => {
    console.log(e);
    axios.post('posts.json', {
      title: state.title,
      desc: state.desc
    }).then( res => {
      router.push('/posts')
    })
  };

</script>

<template>
  <main class="max-w-3xl mx-auto my-0 ">
    <h3 class="my-5">Create Post</h3>

    <form @submit.prevent="onCreatePost">
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
      <input type="text" id="email" v-model="state.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required>
    </div>
    <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Desc</label>
      <textarea id="message" v-model="state.desc" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Desc"></textarea>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Post</button>
  </form>
  </main>
</template>