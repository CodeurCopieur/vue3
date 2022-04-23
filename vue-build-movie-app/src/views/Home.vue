<script setup>
  import {ref} from 'vue'
  import env from '../env'

  const search = ref("");
  const movies  = ref([]);

  let currentPage = ref(1);
  let totalResults = ref(null);

  const searchMovies = () => {
    if(search.value != "") {
      const apiUrl = 'https://api.themoviedb.org/3';
      const urlSuffix = '/search/movie';

      try {
        fetch(`${apiUrl}${urlSuffix}?api_key=${env.api_key}&query=${search.value}&page=${currentPage}`)
          .then( res => res.json())
          .then( data => {
            if(data) {

              //totalResults.value = data.total_results;
              movies.value = data.results;
              search.value= ""
              //console.log(data, totalResults);
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

    <ul class="movie-list">
      <li class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          <div class="movie-poster">
            <span class="backdrop-fill">
              <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.poster_path" :alt="movie.original_title">
            </span>
            <span class="poster-fill">
              <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.poster_path" :alt="movie.original_title">
            </span>
          </div>

          <div class="details">
            <p>{{ movie.release_date }}</p>
            <h3>{{  movie.original_title }}</h3>
          </div>
          
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

    img {
      height: auto;
      max-width: 100%;
    }
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

    .movie-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;

      .movie {
        overflow: hidden;
        cursor: pointer;
        width: 100%;
        margin-bottom: 20px;

        background-color: #fff;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15),0 2px 3px rgba(255, 255, 255, 0.2);

        .movie-poster {
          position: relative;
        }

        .backdrop-fill {
          position: absolute;
          overflow: hidden;
          width: 150%;
          height: 150%;
          top: -80%;
          bottom: -20%;
          left: -20%;
          transform: rotate(5deg);

          img {
            filter: blur(6px);
            object-fit: cover;
            width: 100%;
            height: 100%;
            transform: scale(1.4);
          }
        }

        .poster-fill {
          position: relative;
          display: block;
          align-self: center;
          margin-top: 84px;
          margin-left: 24px;
          width: 140px;
          border-radius: 2px;
          z-index: 1;

          img {
            filter: drop-shadow(5px 10px 15px rgba(8,9,13,.4));
            transition: all .5s;
          }
        }

        .details {
          color: #272d40;
          text-align: left;
          padding: 24px;
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          width: 32%;
        }

        @media screen and (min-width: 64rem) {
          width: 24%;
          transition: all .48s;
        }
      }
    }
  }
</style>