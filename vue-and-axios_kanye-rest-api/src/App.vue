<script setup>
  import axios from 'axios'
  import { ref } from 'vue'

  const quote = ref('');

  axios.get('https://api.kanye.rest/')
    .then( res => quote.value = res.data.quote)



</script>

<template>
  <div>
    <i>"{{ quote}}"</i>
    <p>- kanye west</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
