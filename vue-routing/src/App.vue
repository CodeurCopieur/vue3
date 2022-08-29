<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Header from './components/Header.vue'
</script>

<template>
  <!-- <Header /> -->
  <router-view name="navigation"/>
  <div>
    <router-view/>
  </div>
  <div>
    <router-view name="footer"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
