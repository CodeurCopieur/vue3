<template>
  <div class="product">
    <div 
      class="product__background" 
      :style="{backgroundImage: 'url(\'' + product.image + '\')'}"></div>
      <div class="product__image" :style="{backgroundImage: 'url(\'' + product.image + '\')'}"/>
      <router-link :to="{name :'products'}" class="product__back">← Retour</router-link>
  </div>
</template>

<script>

export default {
  name: 'Product',
  props: ['id'],
  created() {
    // action
    this.$store.dispatch('setCurrentProduct', this.$route.params.id);
  },
  computed: {
    product() {
      return this.$store.getters.getCurrentProduct
    }
  }
}

</script>

<style lang="scss" scoped>
  .product {
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;
    padding:32px;
  }

  .product__background {
    padding: 32px;
    background-size: cover;
    background-position: center center;
    filter: blur(8px);
    height: 400px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }

  .product__image {
    max-width: 100%;
    height: 0;
    padding-bottom: 154%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    border-radius:16px;
  }

  .product__back {
    color: #ececec;
    font-weight: 300;
    text-decoration: none;
    margin-top: 16px;
    display: inline-block;
  }

</style>
