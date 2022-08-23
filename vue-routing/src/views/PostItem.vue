<script setup>
  import axios from 'axios'
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router';
  const route = useRoute(); 

  const post = ref('');
  // const id = ref('');

  const props = defineProps({
    id: String
  });

  const getPostDetails = () => {
    //id.value = route.params.id;
    axios.get(`posts.json?id=${props.id}`).then( res => {
      post.value = res.data[props.id];
    });
  };

  watch(
    () => props.id, ()=>{
      getPostDetails();
    }
  );

  // Third Solution

  // watch(
  //   () => route.params , () =>{
  //     getPostDetails();
  //   }
  // );
  // Second Solution

  onMounted(() => {
    // id.value = route.params.id;
    // axios.get(`posts.json?id=${id.value}`).then( res => {
    //   post.value = res.data[id.value];
    // });

    // watch(
    //   () => route.params , () =>{
    //     getPostDetails();
    //   }
    // );
    // First Solution
    console.log(route.query);

    getPostDetails();
  });

  
</script>

<template>
  <main class="max-w-3xl mx-auto my-0 ">
    <h3 class="my-5">Post Details</h3>

    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Id: {{ id }}</p>
    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Title: {{ post.title }}</p>
    <p class="mb-4 text-lg text-gray-500 dark:text-gray-400">Description: {{ post.desc }}</p>
    <router-link to="/posts/-N9Y2z5yOhtknKWfsjaW"> go to post id : -N9Y2z5yOhtknKWfsjaW</router-link> <br><br>
    <router-link :to="{name:'Posts'}" class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Back to post</router-link>
  </main>
</template>