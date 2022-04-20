<script setup>
  import {ref} from 'vue'
  import env from '../env'

  const search = ref("");
  const movies  = ref([]);

  const searchMovies = () => {
    if(search.value != "") {
      const apiUrl = 'https://api.themoviedb.org/3';
      const urlSuffix = '/search/movie';

      try {
        fetch(`${apiUrl}${urlSuffix}?api_key=${env.api_key}&query=${search.value}`)
          .then( res => res.json())
          .then( data => {
            if(data) {
              console.log(data);
            }
          })
      } catch (error) {
        console.log(error);
      }
    }
  };
</script>

<template>
  <div class="home">
    <div class="featured-card">
      <router-link to="">
        <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg" alt="" class="featured-img">
        <div class="detail">
          <h3>test</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, ea similique. Reprehenderit nam maxime corrupti provident, autem quae unde quidem quasi aspernatur pariatur neque blanditiis culpa fugit similique temporibus sunt soluta nulla ex! Cupiditate pariatur ab quasi accusamus quo blanditiis.
          </p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="searchMovies()" class="search-box">
      <input type="text" placeholder="Que cherchez-vous ?" v-model="search">
      <input type="submit" value="Recherche">
    </form>

    <div class="movie-list">

    </div>
  </div>
</template>

<style lang="scss">
  .home {
    .featured-card {
      position: relative;

      .featured-img {
        display: block;
        width: 100%;
        height: 31.25rem;
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center center;

        position: relative;
        z-index: 0;
      }

      .detail {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .6);
        padding: 2rem;
        z-index: 1;

        h3 {
          color: #fff;
          margin-bottom: 1rem;
        }

        p {
          color: #fff;
        }
      }
    }

    .search-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      padding: 1rem;

      input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
          
          color: #fff;
          background-color: #496583;
          text-align: center;
          font-size: 1.25rem;
          padding: 1rem 2rem;
          margin-bottom: 0.938rem;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
          transition: .4s;

          &::placeholder {
            color: #f3f3f3;
          }

          &:focus {
            box-shadow: 0 0.188rem 0.375rem rgba(0, 0, 0, .2);
          }
        }

        &[type="submit"] {
          color: #fff;
          background-color: #4186b4;
          padding: 1rem 2rem;
          border-bottom-left-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
          font-size: 1.25rem;
          text-transform: uppercase;
          transition: .4s;

          &:active {
            
          }
        }

        &[type="text"], &[type="submit"]  {
          width: 100%;
          max-width: 50%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
</style>