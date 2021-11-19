<template>
  <div class="product">
    <div 
      class="product__background" 
      :style="{backgroundImage: 'url(\'' + product.image + '\')'}"></div>
      <div class="product__image" :style="{backgroundImage: 'url(\'' + product.image + '\')'}"/>
      <router-link :to="{name :'products'}" class="product__back">← Retour</router-link>
      <h1 class="product__title">{{product.title}}</h1>
      <div class="product__details">
        <p>{{product.description}}</p>
        <p>{{product.price}}€</p>
        <p>{{product.category}}</p>
      </div>
      <div class="product__note">
      <span v-for="i in 5" :key="i" :class="{'product__star': true, 'product__star--dark' : i > Math.floor(product.rating.rate)}" @click="updateNote(i)">⭐</span>

    </div>
  </div>
</template>

<script>

import { SET_NOTE } from '../store/mutation-types';

export default {
  name: 'Product',
  props: ['id'],
  created() {
    // action
    this.$store.dispatch('setCurrentProduct', this.$route.params.id);
  },
  methods: {
    updateNote(newNote) {
      this.$store.commit(SET_NOTE, newNote);
    }
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

  .product__title {
    font-size: 24px;
    padding: 8px;
    font-weight: normal;
    color:white;
  }

  .product__details {
    padding: 10px;
  }

  .product__details p {
    text-align: left;
    color:white;
    margin-bottom: 8px;
  }

  .product__star {
    text-shadow: 0 0 8px #ffdc188c, 0 0 16px #ffffff54;
  }
  .product__star:hover {
    cursor:pointer;
  }
  .product__star--dark {
    opacity:0.5;
    text-shadow: none;
  }

</style>
