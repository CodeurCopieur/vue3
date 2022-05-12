<template>
  <main>
    <div class="component__wrap-content-aside">
      <div class="component__content">
        <article class="component__wrap-details">

          <!--<video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions">
          </video-player> 
          <div class="component__wrap-product">
            <video controls :poster="product.thumbnail">
              <source :src="product.videoUrl" type="video/mp4">
            </video>
          </div>-->
          

          <figure>
            <picture class="component__wrap-image">
              <img :src="product.image" alt="">
            </picture>
          </figure>
          
          <h1>{{ product.title }}</h1>
          <p>{{ this.$route.params.id }}</p>
          <div class="btn-text" v-if="isPlayed">Played :)</div>
          <div v-else class="btn-text"> Marked played</div>
          <div>
            <p>{{ product.price }}€</p>
            <p>{{ product.category }}</p>
            <p>{{ product.description }}</p>
          </div>
        </article>
      </div>
      
      <aside class="component__content-more">
        <h1>aside</h1>
      </aside>
    </div>
    
  </main>
  
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    product() {
      return this.products.find( product => product.id == this.$route.params.id)
    },
    ...mapState(['playedProducts', 'products']),
    isPlayed() {
      return this.playedProducts.includes(this.product.id);
    }
  }
}
</script>

<style lang="scss">

  
@mixin aspect-ratio($width, $height, $displayType: block, $important:false) {

  display: $displayType;
  position: relative;
  height: 0;

  @if $important {
    padding-top: ($height / $width) * 100% !important;
  }
  @else {
    padding-top: ($height / $width) * 100%;
  }

  img,video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  .btn-text {
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    width: 25%;
    margin: 0 auto;
  }

  .component__wrap-content-aside {
    display: flex;
    flex-direction: row;

    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .component__content {
    width: 60%;
  }

  .component__wrap-image, .component__wrap-product{
    @include aspect-ratio(16, 9);
  }

  .component__content-more {
    width: 30%;
    margin-left: 20px;
  }
</style>