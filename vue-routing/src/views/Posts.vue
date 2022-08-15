<script setup>
  import axios from 'axios'
  import {ref, onMounted } from 'vue'

   const postDetails  = ref([]);

  onMounted(() => {
    try {
      axios
        .get('https://vue-apimoviedb-get-request.firebaseio.com/posts.json')
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
  }



</script>

<template>
  <main class="max-w-3xl mx-auto my-0 ">
    <h3 class="my-5">Post Details</h3>

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
            </tr>
          </tbody>
      </table>
    </div>
  </main>
</template>