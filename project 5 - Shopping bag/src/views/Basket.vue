<template>
  <div class="basket">
    <div class="items">

      <template v-if="productsInBag.length">
        <div
          v-for="(productInBag, i) in productsInBag"
          :key="i"
          class="item">
        <div 
          class="remove"
          @click="this.$store.dispatch('removeToBag', productInBag.id)"
          >Supprimer dans le panier</div>
        <div class="photo">
            <img 
            :src="productInBag.image" alt=""></div>
        <div class="description">
          {{ productInBag.title }} 
        </div>
        <div class="price">
          <span class="quantity-area">
            <button 
            :disabled="productInBag.quantity <= 1" 
            @click="productInBag.quantity--">-</button>
            <span class="quantity">
              {{ productInBag.quantity }}
            </span>
            <button
            @click="productInBag.quantity++">+</button>
          </span>
          <span class="amount">US$ {{ (productInBag.quantity * productInBag.price).toFixed(2) }}</span>
        </div>
      </div>
      <div class="grand-total"> Grand Total: US$ {{ orderTotal() }}</div>

      </template>
      

      <template v-else>
        <h4> Aucun article dans le panier</h4>
      </template>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Basket',

  methods: {
   orderTotal() {
     
     var total = 0;
     this.productsInBag.forEach( item => {
       total += item.price * item.quantity;
     });

     return total.toFixed(2);
   }
  },
  computed:mapState([
    'productsInBag'
  ])
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
