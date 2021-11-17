<template>
  <main>
    <div class="component__wrap-content-aside">
      <div class="component__content">
        <article class="component__wrap-details">

          <!--<video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions">
          </video-player> -->
          <div class="component__wrap-video">
            <video controls :poster="video.thumbnail">
              <source :src="video.videoUrl" type="video/mp4">
            </video>
          </div>
          

          <!--<figure>
            <picture class="component__wrap-image">
              <img :src="video.thumbnail" alt="">
            </picture>
          </figure>-->
          
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
import 'video.js/dist/video-js.css'
 
//import { videoPlayer } from 'vue-video-player'

export default {
  /*components: {
    videoPlayer
  },*/
  computed: {
    video() {
      return this.$store.state.videos.find( video => video.id == this.$route.params.id)
    },
    /*playerOptions() {
      return {
        language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: this.video.videoUrl
          }],
          poster: this.video.thumbnail,
      }
    }*/
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

  .component__wrap-image, .component__wrap-video{
    @include aspect-ratio(16, 9);
  }

  .component__content-more {
    width: 30%;
    margin-left: 20px;
  }
</style>