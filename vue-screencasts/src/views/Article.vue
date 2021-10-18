<template>
  <main>
    <div class="component__wrap-content-aside">
      <div class="component__content">
        <article class="component__wrap-details">

          <figure>
            <picture class="component__wrap-image">
              <img :src="video.thumbnail" alt="">
            </picture>
          </figure>
          
          <h1>{{ video.name }}</h1>
          <p>{{ this.$route.params.id }}</p>
          <div v-html="video.description"></div>
        </article>
      </div>
      
      <aside class="component__content-more">
        <h1>aside</h1>
      </aside>
    </div>
    
  </main>
  
</template>
<script>
export default {
  computed: {
    video() {
      return this.$store.state.videos.find( video => video.id == this.$route.params.id)
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

  .component__wrap-image{
    @include aspect-ratio(16, 9);
  }

  .component__content-more {
    width: 30%;
    margin-left: 20px;
  }
</style>