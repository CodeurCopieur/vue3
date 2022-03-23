<script setup>
  import { ref } from 'vue'
  import 'lazysizes'
  import Carousel from './Carousel.vue'

  const lightBox = ref(false);
  const slide = ref(0);
</script>

<template>
  <div class="grid">
    <div 
      v-for="n in 1000" 
      :key="n" class="gridItem" 
      @click="lightBox = true; slide = Number(n) - 1">
      <img :data-src="'https://picsum.photos/1024/600?random='+n" class="lazyload" alt=""/>
    </div>
  </div>
  <teleport to='body'>
    <div class="ligthBox" v-show="lightBox">
      <div class="ligthBoxDialog">
        <div class="ligthBoxContent">
          <div class="ligthBoxHeader">
            <span></span>
            <span class="ligthBoxClose" @click.stop="lightBox = false">
              &times;
            </span>
          </div>
          <div class="ligthBoxBody">
            <Carousel :current-slide="slide" />
          </div>
          <div class="ligthBoxFooter"></div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-auto-rows: max-content;
    grid-auto-flow: dense;
    gap: 10px;
  }

  .gridItem {
    width: auto;
  }

  .gridItem img {
    width: 100%;
    height: 100%;
    min-height: 180px;
    object-fit: cover;
    background-color: rgba(0, 0, 0, .375);
    cursor: pointer;
  }

  .ligthBox{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .9);
  }

  .ligthBoxDialog{
    position: relative;
    z-index: 101;
    margin: auto;
    padding: 0;
    width: inherit;
    height: inherit;
  }

  .ligthBoxContent{
    position: relative;
    z-index: 102;
    overflow: hidden;
    width: inherit;
    height: inherit;
  }

  .ligthBoxHeader {
    padding: 10px;
    width: calc(100vw - 30px);
    position: absolute;
    z-index: 104;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  .ligthBoxClose {
    color: #fff;
    cursor: pointer;
    font-weight: bold;
  }

  .ligthBoxBody {
    position: relative;
    z-index: 103;
  }

  .ligthBoxFooter {
    padding: 10px;
    width: calc(100vw - 30px);
    position: absolute;
    z-index: 104;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  .ligthBoxClose svg,
  .ligthBoxClose i,
  .ligthBoxClose img {
    pointer-events: none;
  }

  .ligthBoxClose:hover,
  .ligthBoxClose:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
</style>