<template>
  <article class="product">

    <router-link 
      :to="{name: 'product', params: { id : product.id}}" 
      class="product"
      >
      <div 
        class="product__image" 
        :style="{backgroundImage: 'url(\'' + product.image + '\')'}"/>
      <h2 class="product__title">{{ product.title}}</h2>
      <div class="product__note">

      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'ProductListProducts',
  props: ['product']
}
</script>

<style lang="scss" scoped>
  .product {
    flex:1;
    text-decoration: none;
    opacity:0.82;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
    }

  }

  .product__image {
      max-width: 100%;
      height:0;
      padding-bottom: 155%;
      background-size: cover;
      background-position: center center;
      border-radius: 8px;
  }

  .product__title {
    font-size: 16px;
    font-weight: 200;
    padding: 8px;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
    color:white;
  }
</style>