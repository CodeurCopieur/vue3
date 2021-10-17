<template>
  <main>
    <div class="component__wrap-content-aside">
      <div class="component__content">
        <article class="component__wrap-details">
          <img :src="video.thumbnail" alt="">
          <h1>{{ video.name }}</h1>
          <p>{{ this.$route.params.id }}</p>
          <div v-html="video.description"></div>
        </article>
      </div>
      
      <aside class="component__content-moreInfos"></aside>
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