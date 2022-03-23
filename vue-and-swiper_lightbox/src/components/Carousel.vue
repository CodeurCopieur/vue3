<script setup>
  import { ref, watch, toRefs } from 'vue'
  import { Navigation,  Pagination, A11y, Lazy } from 'swiper'
  import { Swiper, SwiperSlide} from 'swiper/vue'

  import 'swiper/css'
  import 'swiper/css/bundle'

  const props = defineProps({
    currentSlide: Number
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
    :modules="[Navigation, Pagination, A11y, Lazy]" 
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    grab-cursor
    :preload-images="false"
    lazy>
    <SwiperSlide v-for="n in 1000" :key="n" class="customSlide">
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