<script setup>

  import Header from './components/Header.vue'
</script>

<template>
  <Header />

  <main class="max-w-3xl mx-auto my-0 ">
    <router-view/>
  </main>
  
</template>

<style lang="scss">
#app {
  @import './assets/scss/main.scss';
}
</style>
