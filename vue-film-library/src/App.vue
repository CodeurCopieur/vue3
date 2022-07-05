<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
      <div class="ui-wrapper">

      <!-- header -->
      <header class="navbar">
        <div class="ui-container">
          
        </div>
      </header>

      <div class="ui-content-wrapper">
        <router-view/>
        <!-- page content 
        <section class="ui-section">
          <div class="ui-container">
            <h1 class="ui-title-1">Hello world!</h1>
          </div>
        </section>-->
      </div>

      <!-- footer -->
      <footer>footer</footer>
    </div>
  
</template>

<style lang="scss">
#app {
  @import './assets/scss/main.scss';
}
</style>
