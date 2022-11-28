<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'

import { ref, shallowRef, nextTick, computed, watch } from 'vue'
import Chart from 'chart.js/auto'

const weights = ref([]); // Tableau de poids
const weightChartEl = ref(null); 
const weightChart = shallowRef(null);
const weightInput = ref(60.0); // le poid saisie
const currentWeight = computed(()=> {
  return weights.value.sort((a, b) => b.date - a.date)[0] || {weight: 0}
}); // retourn un tableau de poids triée
const addWeight = () => {
  weights.value.push({
    weight: weightInput.value,
    date: new Date().getTime()
  })
};

</script>

<template>
  <h1>Suivi du poids</h1>

  <div class="component__current">
    <span>{{ currentWeight.weight }}</span><small> Poids actuel (kg)</small>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
}
</style>
