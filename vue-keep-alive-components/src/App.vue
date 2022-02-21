<script>

import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
    components: { About, Contact },
    data () {
      return {
        tabs: ["About", "Contact"],
        component: "About"
      }
    }
  }
</script>

<template>

<div class="max-w-3xl mx-auto">
  <ul class="flex justify-center">
    <li v-for="tab in tabs" 
        :key="tab" 
        @click="component = tab" class="py-1.5 px-1.5 mx-0.5 bg-green-500 cursor-pointer text-white">{{ tab }}</li>
  </ul>
  <keep-alive>
  <component :is="component" />
  </keep-alive>
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
