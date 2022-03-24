<script setup>
  import { ref } from 'vue'
  import { Thumbs } from 'swiper'
  import { Swiper, SwiperSlide} from 'swiper/vue'

  const props = defineProps({
    currentSlide: Number
  });

  const emit = defineEmits(['thumbs', 'update:currentSlide'])

  const onSwiper = (swiper) => {
    emit('thumbs', swiper)
  };
</script>

<template>
  <Swiper 
    @swiper="onSwiper"
    :slides-per-view="9" 
    :space-between="42" 
    :modules="[Thumbs]"
    watch-slides-progress>
    <SwiperSlide v-for="n in 100" :key="n" @click.stop="emit('update:currentSlide', Number(n) - 1)">
      <img :src="'https://picsum.photos/1024/600?random='+n" style="height: 100px" />
    </SwiperSlide>
  </Swiper>
</template>