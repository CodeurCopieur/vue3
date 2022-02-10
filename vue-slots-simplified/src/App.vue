<script setup>
  import CaptionedContent from './components/CaptionedContent.vue'
</script>

<template>
  <CaptionedContent>
    source : <a href="https://codesandbox.io/u/codwerk" target="_blank" class="px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer"><span class="sm:inline xl:inline"> codesandbox</span></a>

    <template #content>
      <img src="https://tailwindcss.com/_next/static/media/5.cb3efb05f0114abf9efaa0ddbeaed688.jpg" alt="" class="w-full h-96 object-cover rounded-lg sm:h-60 sm:col-span-2 lg:col-span-full" loading="lazy">
    </template>
    <template #caption>
      source : <a href="https://codepen.io/codwerk" target="_blank" class="px-3 py-2 rounded-md bg-sky-500 text-white cursor-pointer"><span class="sm:inline xl:inline"> codepen</span></a>
    </template>
  </CaptionedContent>
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
