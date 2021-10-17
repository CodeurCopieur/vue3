<template>
  <article class="component-videos__card">
      <router-link :to="{name: 'article', params: { id:article.id}}">
        <figure>
          <picture class="component-videos__wrap-image">
            <img :src="article.thumbnail" alt="">
          </picture>
        </figure>
        <h3>{{ article.name }}</h3>
        <div v-html="article.description"></div>
      </router-link>
  </article>

</template>

<script>
export default {
  name: 'cardVideo',
  props: ['article']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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


.component-videos{
  &__card {
      flex-basis: calc((100% - 2 * 20px)/3);
      font-size: .8125em;
      margin-top: 20px;
      position: relative;
      overflow: hidden;

      &:not(:nth-child(3n-2)) {
        margin-left: 20px;
      }
    }

    &__wrap-image {
       @include aspect-ratio(16, 9);
    }
}
    
</style>
