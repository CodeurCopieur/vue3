<script setup>
  import { Navigation,  Pagination, A11y, Lazy } from 'swiper'
  import { Swiper, SwiperSlide} from 'swiper/vue'

  import 'swiper/css'
  import 'swiper/css/bundle'
</script>

<template>
  <Swiper 
    :slides-per-view="1" 
    :space-between="50" 
    :modules="[Navigation, Pagination, A11y, Lazy]" 
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    grab-cursor
    :preload-images="false"
    lazy>
    <SwiperSlide v-for="n in 10" :key="n" :virtualIndex="n">
      <img :src="'https://picsum.photos/1024/600?random='+n" class="swiper-lazy" alt="">
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>