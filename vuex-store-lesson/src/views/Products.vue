<template>
  <div class="home">
    <h1>Fake Store API</h1>
    <section class="products">
      
      <ProductListProducts 
        v-for="(product, i) in products" 
        :key="i"
        :product="product" />

    </section>
  </div>

</template>

<script>

import ProductListProducts from '@/components/ProductListProducts'

export default {
  name: 'Products',
  components: {
    ProductListProducts
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  }
}

</script>

<style lang="scss">
.products {
  display:grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap:32px;
  padding:32px;
  max-width: 600px;
  margin: 0 auto;
}

.movie__star {
  text-shadow: 0 0 8px #ffdc188c, 0 0 16px #ffffff54;
}
.movie__star--dark {
  opacity:0.5;
  text-shadow: none;
}
</style>