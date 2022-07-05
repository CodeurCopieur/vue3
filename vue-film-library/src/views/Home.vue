<script setup>
  import {ref} from 'vue'

  const page = ref('');

  page.value = 'Home'

</script>
<template>
  <div>
    <h1>{{page}}</h1>
  </div>
</template>