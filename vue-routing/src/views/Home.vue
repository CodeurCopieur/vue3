<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const onPostClick = (route) => {
    router.push(route)
    // router.push({ path: route})
    // router.push({ path: route, query: { id: 1 }})
    // router.replace({ path: route, query: { id: 1 }})
    // router.go(-1)
  };
</script>

<template>
  <div>
    <h1>home</h1> 
    <button
        @click.prevent="onPostClick('/posts')"
        class="bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-500 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">Click to Post page</button>
  </div>
</template>