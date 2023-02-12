<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0);
</script>

<template>
<header>
  <h1>{{ msg }}</h1>


  <nav>
  <ul style="list-style:none; padding-left: 0;">
    <li><router-link to='/'>Home</router-link></li>
    <li><router-link to='/about'>About</router-link></li>
  </ul>
    
    
    
  </nav>

</header>

</template>

<style scoped>
a {
  color: #42b983;
}

.router-link-exact-active {
  color: #2c3e50;
}
</style>
