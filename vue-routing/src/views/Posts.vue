<script setup>
  import axios from 'axios'
  import {ref, onMounted } from 'vue'

   const postDetails  = ref([]);

  onMounted(() => {
    try {
      axios
        .get('posts.json')
        .then( res => {
          formatPosts(res.data)
        })
    } catch(err) {
      console.log(err);
    }
  });

  const formatPosts = ( postData ) => {
    for (var key in postData) {
        var element = postData[key];
        postDetails.value.push({...element, id: key})
    }
  };



</script>

<template>
  <main class="max-w-3xl mx-auto my-0 ">
    <h3 class="my-5">Les posts</h3>

    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="py-3 px-6">
                      Id
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Title
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Desc
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Actions
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="post in postDetails" :key="post.id">
              <td class="py-4 px-6">
                    {{ post.id }}
              </td>
              <td class="py-4 px-6">
                    {{ post.title }}
              </td>
              <td class="py-4 px-6">
                    {{ post.desc }}
              </td>
              <td class="py-4 px-6">
                    <router-link
                      :to="`/posts/${post.id}`"
                      class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Show Details</router-link>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  </main>
</template>