<template lang="pug">
.backdrop(@click.self="closeModal")
  .modal(:class="{ sale: theme === 'sale' }")
    h1 {{ header }}
    p {{ text }}
    p self - empeche le clic à l'intérieur de la modal
</template>

<script>
 export default {
   props: ['header', 'text', 'theme'],
   data: () => {
     return {}
   },
   methods: {
     closeModal() {
       this.$emit('close')
     }
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

  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }

  .modal p {
    font-style: normal;
  }

  .modal.sale {
    background: pink;
  }
</style>