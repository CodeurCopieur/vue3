<template>
<div class="p-2 lg:w-1/3 md:w-1/2 w-full animate-pulse">
  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
    <img class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 bg-gray-400">
    <div class="flex-grow">
      <h2 class="title-font font-medium w-full bg-gray-400 rounded-lg p-3"></h2>
       <div class="h-4 bg-white rounded"></div>
      <p class="bg-gray-400 rounded-lg p-7"></p>
    </div>
  </div>
</div>        
</template>

<style scoped>

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>