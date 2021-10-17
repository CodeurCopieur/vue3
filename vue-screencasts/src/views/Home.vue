<template>
  <div class="home">
    <h1>Videos</h1>

    <section class="component-videos">
      <div class="component-videos__container">
        <cardVideo v-for="(video, i) in videos" :key="i" :article="video" />
      </div>
    </section>

  </div>
</template>

<script>

import cardVideo from '@/components/article'

export default {
  name: 'Home',
  components: {
    cardVideo
  },
  data() {
    return {
      videos: this.$store.state.videos
    }
  }
}
</script>

<style lang="scss" scoped>

  .component-videos {

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