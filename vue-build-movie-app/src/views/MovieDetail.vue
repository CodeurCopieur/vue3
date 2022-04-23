<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '../env'

const movie = ref([]);
const route = useRoute();

onBeforeMount(() => {
  const apiUrl = 'https://api.themoviedb.org/3';
  const urlSuffix = 'movie';

  try {
    fetch(`${apiUrl}/${urlSuffix}/${route.params.id}?api_key=${env.api_key}&language=en-US`)
      .then( res => res.json())
      .then( data => {
        console.log(data);
        movie.value = data;
      })
  } catch (error) {
    console.log(error);
  }
  
});

defineProps({
  msg: String
})

const count = ref(0);
</script>

<template>
  <div class="movie-detail">
    <h2>{{ movie.original_title }}</h2>
    <ul>
      <li v-for="genre in movie.genres" :key="genre">
          {{ genre.name }}
      </li>
    </ul>
    <picture>
      <img 
        :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.poster_path" 
        :alt="movie.original_title"
        class="featured-img">
      <legend>{{ movie.tagline }}</legend>
    </picture>
    <span>{{ movie.release_date }}</span>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<style lang="scss" scoped>
  a {
    color: #42b983;
  }

  span {
     display: block;
  }

  img{
    margin-left: auto;
    margin-right: auto; 
  }


  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    
    li:not(:nth-child(4n-1))  {
      margin-right: 16px;
    }

    li {
      padding: 10px;
      background-color: #4186b4;
      cursor: pointer;
    }
  }

  .movie-detail {
    padding: 16px;
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
    color: #fff;

    h2 {
      font-size: 28px;
      
      font-weight: 600;
      
    }

    .featured-img {
      display: block;
      max-width: 200px;
      margin-bottom: 16px;
    }

    p {
      color: #fff;
      font-size: 18px;
      line-height: 1.4;
    }
  }
</style>
