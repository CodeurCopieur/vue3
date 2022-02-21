<template>
  <div class="h-96 flex justify-center items-center flex-col">
    <h1 class="text-green-500 ">Page Contact</h1>
    <form action="" class="w-full">
      <input type="text" 
        class="appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
        placeholder="Enter your message">
      <button
          class=" w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">Send</button>
    </form>
  </div>
</template>

<script>
 export default {
   mounted() {
     console.log('Contact a été monté');
   }
  }
</script>