<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Tab from './components/Tab.vue'
import TabsWrapper from './components/TabsWrapper.vue'

</script>

<template>
  <main class="h-screen flex">
    <TabsWrapper>
      <Tab title="Tab 1">Hello Tab 1</Tab>
      <Tab title="Tab 2">Hello Tab 2</Tab>
      <Tab title="Tab 3">Hello Tab 3</Tab>
      <Tab title="Tab 4">Hello Tab 4</Tab>
    </TabsWrapper>
  </main>
 
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
