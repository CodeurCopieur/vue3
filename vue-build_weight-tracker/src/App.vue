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

watch(weights, newWeights => {
  const ws = [...newWeights]

  if (weightChart.value) {
    weightChart.value.data.labels = ws
        .sort((a, b) => a.date - b.date)
        .map(w => new Date(w.date).toLocaleDateString())
        .slice(-7)

    weightChart.value.data.datasets[0].data = ws
        .sort((a, b) => a.date - b.date)
        .map(w => w.weight )
        .slice(-7)

    weightChart.value.update()

    return
  }

  nextTick(()=> {
    weightChart.value = new Chart(weightChartEl.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: ws
            .sort((a, b) => a.date - b.date)
            .map(w => new Date(w.date).toLocaleDateString()),
        datasets: [
          {
            label: 'Weight',
            data: ws
              .sort((a,b) => a.date - b.date)
              .map(w => w.weight),
            backgroundColor: 'rgba(255, 105, 180, .2)',
            borderColor: 'rgb(255, 105, 180)',
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  })
}, { deep: true });

</script>

<template>
  <h1>Suivi du poids</h1>

  <div class="component__current">
    <span>{{ currentWeight.weight }}</span><small> Poids actuel (kg)</small>
  </div>

  <form @submit.prevent="addWeight">
    <input type="number" step="0.1" v-model="weightInput"/>
    <input type="submit" value="Ajouter du poids"/>
  </form>

  <div v-if="weights && weights.length > 0">
    <h2>Les 7 derniers jours</h2>

    <div class="canvas-box">
      <canvas ref="weightChartEl"></canvas>
    </div>

    <div class="weight-history">
      <h2>Historique du poids</h2>
      <ul>
        <li v-for="weight in weights" :key="weight">
          <span>{{ weight.weight }} kg </span>
          <small>{{ new Date(weight.date).toLocaleDateString() }}</small>
        </li>
      </ul>
    </div>
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
