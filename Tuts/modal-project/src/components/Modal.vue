<template lang="pug">
.backdrop
  .modal
    p Lorem, ipsum
</template>

<script>
 export default {
   data: () => {
     return {}
   }
  }
</script>

<style lang="scss" scoped>
  .backdrop {
    top: 0;
    position: fixed;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;

    .modal{
      width: 400px;
      padding: 20px;
      margin: 100px auto;
      background-color: #fff;
      border-radius: 10px;
    }
  }
</style>