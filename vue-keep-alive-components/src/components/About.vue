<template>
  <div class="h-96 flex justify-center items-center">
    <h1 class="text-green-500">Page About</h1>
  </div>
</template>

<script>
 export default {
   mounted() {
     console.log('About a été monté');
   },
    activated() {
      console.log("About a été activé");
    },
    deactivated() {
      console.log("About a été desactivé");
    }
  }
</script>