<script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  import kanyeApi from './services/kanyeApi'

  const quote = ref('');

  // Using Axios with async/await
  const loadQuote = async() => {

    try {
      const res = await kanyeApi.getQuote()
      quote.value = res.data.quote
    } catch (error) {
      console.log(error);
    }
    
  }
  loadQuote()

  /*axios.get('https://api.kanye.rest/')
    .then( res => quote.value = res.data.quote)*/

  async function createPost() {
    const res = await kanyeApi.createPost(JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }))
    console.log(res);
  }


</script>

<template>
  <div>
    <i>"{{ quote}}"</i>
    <p>- kanye west</p>
    <p>
      <button @click="createPost"> create Post</button>
    </p>
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
