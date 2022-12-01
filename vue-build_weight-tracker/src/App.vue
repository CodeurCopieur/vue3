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
<main>
    <h1>Suivi du poids</h1>

  <div class="current">
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
</main>
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #eee;
}

main {
  padding: 1.5rem;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1rem;
}

.current {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;

  text-align: center;
  background-color: #fff;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  border: 5px solid hwb(330 41% 0%);

  margin: 0 auto 2rem;
}


.current span {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: .5rem;
}

.current small {
  color: #888;
  font-style: italic;
}

form {
  display: flex;
  margin-bottom: 2rem;
  border: 2px solid #aaa;
  border-radius: .5rem;
  overflow: hidden;
  transition: 200ms linear;
}


form:focus-within,
form:hover {
  border-color: hotpink;
  border-width: 2px;
}

form input[type="number"], input[type="submit"] {
  appearance: none;
  outline: none;
  border: none;
}
form input[type="number"] {
  background-color: #fff;

  flex: 1 1 0%;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
}


form input[type="submit"] {
  background-color: hotpink;

  padding: .5rem 1rem;

  cursor: pointer;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  transition: 200ms linear;
  border-left: 3px solid transparent;
}

form input[type="submit"]:hover {
  background-color: #fff;
  color: hotpink;
  border-left-color: hotpink;
}

.canvas-box {
  width: 100%;
  max-width: 720px;

  background-color: #fff;
  padding: 1rem;
  border-radius: .5rem;

  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  margin-bottom: 2rem;
}

.weight-history ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

.weight-history ul li{
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: .5rem;
  cursor: pointer;
}

.weight-history ul li:nth-child(even) {
  background-color: #dfdfdf;
}

.weight-history ul li:hover {
  background-color: #f8f8f8;
}

.weight-history ul li:last-of-type {
  border-bottom: none;
}

.weight-history ul li span {
	display: block;
	font-size: 1.25rem;
	font-weight: 700;
	margin-right: 1rem;
}
.weight-history ul li small {
	color: #888;
	font-style: italic;
}
</style>
