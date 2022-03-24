<script setup>
  import { ref, watch, toRefs } from 'vue'
  import { Navigation,  Pagination, A11y, Lazy, Thumbs } from 'swiper'
  import { Swiper, SwiperSlide} from 'swiper/vue'


  const props = defineProps({
    currentSlide: Number,
    thumbs: Object
  });

  const swiperRef = ref(null)

  const {currentSlide} = toRefs(props)

  watch(currentSlide, () => {
    if(swiperRef.value !== null) {
      swiperRef.value.slideTo(props.currentSlide)
    }
  })

  const onSwiper = (swiper) => {
    swiperRef.value = swiper
  };
</script>

<template>
  <Swiper 
    @swiper="onSwiper"
    :slides-per-view="1" 
    :space-between="50" 
    :modules="[Navigation, Pagination, A11y, Lazy, Thumbs]" 
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    grab-cursor
    :preload-images="false"
    lazy
    :thumbs="{ swiper:thumbs }">
    <SwiperSlide v-for="n in 100" :key="n" class="customSlide">
      <img :data-src="'https://picsum.photos/1024/600?random='+n" class="swiper-lazy" alt=""/>
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
  .customSlide {
    display: grid;
    place-items: center;
    height: 100vh;
  }
</style>