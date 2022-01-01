<template>
  <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
          :src="userData.pic">
        <div class="flex-grow">
          <h2 class="text-gray-900 title-font font-medium">{{ userData.name }}</h2>
          <p class="text-gray-500">{{ userData.bio }}</p>
        </div>
      </div>
  </div>                
</template>

<script>

import { ref } from 'vue';

  const loadUserData = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve({
          name: 'Holden Caulfield',
          pic: 'https://dummyimage.com/80x80',
          bio: 'I run a VueJS community over at https://github.com/codwerk/vue.js3, develop web sites.'
        })
      }, 2000)
    })
  }

  export default {
    async setup() {
      const userData = ref(await loadUserData())

      return {
        userData
      }
    }
  }
</script>