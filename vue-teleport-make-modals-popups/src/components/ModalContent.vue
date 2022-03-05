<template>
  <div class="bg-white p-12 rounded-lg flex flex-col justify-center items-center">
      <h2 class="pb-2"> {{ title }}</h2>
      <p class="pb-2"> {{ msg }} </p>
      <button 
        class="block mx-auto text-center w-60 md:w-64 xl:w-60 bg-teal-400 text-teal-900 hover:bg-teal-300 rounded-lg font-semibold p-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      @click.self="$emit('close')"> Close </button>
  </div>
</template>
<script setup>

import { defineProps, defineEmits } from 'vue'

defineProps({
  title: String,
  msg: String,
});

defineEmits(['close']);

</script>