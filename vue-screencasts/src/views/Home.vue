<template>
  <div class="home">
    <h1>Products</h1>

    <section class="component-products">
      <div class="component-products__container">
        <ProductListProduct v-for="(product, i) in products" :key="i" :product="product" />
      </div>
    </section>

  </div>
</template>

<script>

import ProductListProduct from '@/components/ProductListProduct';
import Api from '@/service/api';

export default {
  name: 'Home',
  components: {
    ProductListProduct
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      let res = await Api().get('/products');
      this.products = res.data;
    }
  },
  data() {
    return {
      //products: this.$store.state.products
      products: []
    }
  }
}
</script>

<style lang="scss" scoped>

  .component-products {

    &__container {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

  }
</style>