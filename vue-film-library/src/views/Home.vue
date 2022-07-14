<script setup>
  import {ref, reactive, computed} from 'vue'

  const state = reactive({
    taskId: 3,
    taskTitle: '',
    taskDescription: '',
    taskWhatWatch: '',
    filmHours: 1,
    filmMinutes: 30,
    serialSeason: 1,
    serialSeries: 11,
    serialSeriesMinutes: 40,
    filmTime: computed(() => {
      let min = (state.filmHours * 60) + (state.filmMinutes * 1);
      return getHoursAndMinutes(min)
    }),
    serialTime: computed(() => {
      let min = state.serialSeason * state.serialSeries * state.serialSeriesMinutes
      return getHoursAndMinutes(min)
    })
  });

  const newTask = (e) => {
    e.preventDefault();

    if(taskTitle === '')  {
      return
    }

    let taskTime;

    if(state.taskWhatWatch === 'Film') {
      taskTime = state.filmTime;
    } else {
      taskTime = state.serialTime;
    }
    
    const task = {
      id: state.taskId,
      title: state.taskTitle,
      description: state.taskDescription,
      whatWatch: state.taskWhatWatch,
      time: taskTime,
      completed: false,
      editing: false
    }

    console.log(task);

    // Reset
    state.taskId += 1
    state.taskTitle = '';
    state.taskDescription = '';
    state.taskWhatWatch = '';
  }

  const getHoursAndMinutes = (minutes) => {
    let hours = Math.trunc(minutes / 60)
    let min = minutes % 60
    return hours + ' Heures ' + min + ' Minutes'
  };



</script>
<template>




<!-- Form -->
  <form @submit="newTask">
    <div class="grid gap-6">
      <div class="mx-auto">
        <input type="text" 
          v-model="state.taskTitle"
          name="taskTitle"
          id="taskTitle" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Ce que nous allons regarder ?">
        <textarea 
          name="taskDescription" 
          id="taskDescription" 
          v-model="state.taskDescription" 
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Your message..."
          cols="30" rows="5"></textarea>
        <div class="flex flex-wrap mb-4">
          <div class="flex items-center mr-4">
            <input id="radioFilm" type="radio" v-model="state.taskWhatWatch" value="Film" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="radioFilm" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Film</label>
          </div>
          <div class="flex items-center mr-4">
              <input id="radioSerial" type="radio" v-model="state.taskWhatWatch"  value="Serial"  class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="radioSerial" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Serial</label>
          </div>
        </div>

        <!-- Durée du film -->
        <div class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4" v-if="state.taskWhatWatch === 'Film'">
          Heure du film
          <input type="number" 
            v-model="state.filmHours"
            name="filmHours"
            id="filmHours" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Heures">

          <input type="number" 
            v-model="state.filmMinutes"
            name="filmMinutes"
            id="filmMinutes" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Minutes">

          <p> {{ state.filmTime }} </p>
        </div>
        <!-- Durée de la série -->
        <div class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4" v-if="state.taskWhatWatch === 'Serial'">
          Heure de la série
          <input type="number" 
            v-model="state.serialSeason"
            name="serialSeason"
            id="serialSeason" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Nombres de saison ?">

          <input type="number" 
            v-model="state.serialSeries"
            name="serialSeries"
            id="serialSeries" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Nombres d'épisode ?">

          <input type="number" 
            v-model="state.serialSeriesMinutes"
            name="serialSeriesMinutes"
            id="serialSeriesMinutes" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Durée d'un épisode (min) ?">

            <p> {{ state.serialTime }} </p>
        </div>

        <!-- tag list -->
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
      </div> 
    </div>
  </form>
<!-- Form -->



</template>