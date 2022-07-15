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
    }),
    tagUsed: [],
    tagMenuShow: false,
    tagTitle: ''
  });

  const tags = ref([ {title: 'Comedy', use: false}, { title: 'Western', use: false}, { title: 'Adventure', use: false}]);

  const newTask = (e) => {
    e.preventDefault();

    if(state.taskTitle === '')  {
      return
    }

    let taskTime = ref('');

    if(state.taskWhatWatch === 'Film') {
      taskTime.value = state.filmTime;
    } else {
      taskTime.value = state.serialTime;
    }
    
    const task = {
      id: state.taskId,
      title: state.taskTitle,
      description: state.taskDescription,
      whatWatch: state.taskWhatWatch,
      time: taskTime.value,
      completed: false,
      editing: false
    }

    console.log(task);

    // Reset
    state.taskId += 1
    state.taskTitle = '';
    state.taskDescription = '';
    state.taskWhatWatch = '';
  };

  const getHoursAndMinutes = (minutes) => {
    let hours = Math.trunc(minutes / 60)
    let min = minutes % 60
    return hours + ' Heures ' + min + ' Minutes'
  };

  const addTagUsed = (tag) => {
    tag.use = !tag.use
    if(tag.use) {
      state.tagUsed.push(tag.title)
    } else {
      const found = state.tagUsed.find(elt => elt === tag.title)
      const isLargeNumber = (element) => element === found;

      state.tagUsed.splice(state.tagUsed.findIndex(isLargeNumber), 1)
    }
  };

  const newTag = (e) => {
    console.log(e);
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
          id="taskTitle" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 focus:border-emerald-400 focus:outline-none" placeholder="Ce que nous allons regarder ?">
        <textarea 
          name="taskDescription" 
          id="taskDescription" 
          v-model="state.taskDescription" 
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-b border-gray-300 focus:border-emerald-400 focus:outline-none mb-4" placeholder="Votre message ?"
          cols="30" rows="5"></textarea>
        <div class="flex flex-wrap mb-4">
          <div class="flex items-center mr-4">
            <input id="radioFilm" type="radio" v-model="state.taskWhatWatch" value="Film" class="w-4 h-4 bg-gray-100 border-emerald-400 focus:border-emerald-400 focus:outline-none">
            <label for="radioFilm" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Film</label>
          </div>
          <div class="flex items-center mr-4">
              <input id="radioSerial" type="radio" v-model="state.taskWhatWatch" value="Serial"  class="w-4 h-4 bg-gray-100 border-emerald-400 focus:border-emerald-400 focus:outline-none">
              <label for="radioSerial" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Serial</label>
          </div>
        </div>

        <!-- Durée du film -->
        <div class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4" v-if="state.taskWhatWatch === 'Film'">
          Heure du film
          <input type="number" 
            v-model="state.filmHours"
            name="filmHours"
            id="filmHours" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 focus:border-emerald-400 focus:outline-none mb-4" placeholder="Heures">

          <input type="number" 
            v-model="state.filmMinutes"
            name="filmMinutes"
            id="filmMinutes" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:border-emerald-400 focus:outline-none mb-4" placeholder="Minutes">

          <p> {{ state.filmTime }} </p>
        </div>
        <!-- Durée de la série -->
        <div class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4" v-if="state.taskWhatWatch === 'Serial'">
          Heure de la série
          <input type="number" 
            v-model="state.serialSeason"
            name="serialSeason"
            id="serialSeason" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 focus:border-emerald-400 focus:outline-none mb-4" placeholder="Nombres de saison ?">

          <input type="number" 
            v-model="state.serialSeries"
            name="serialSeries"
            id="serialSeries" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 focus:outline-none focus:border-emerald-400 mb-4" placeholder="Nombres d'épisode ?">

          <input type="number" 
            v-model="state.serialSeriesMinutes"
            name="serialSeriesMinutes"
            id="serialSeriesMinutes" class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 focus:outline-none focus:border-emerald-400 mb-4" placeholder="Durée d'un épisode (min) ?">

            <p> {{ state.serialTime }} </p>
        </div>
        <!-- Ajouter une nouvelle tag -->
        <div class="mb-3 flex justify-center items-center p-1 cursor-pointer text-white bg-emerald-400 font-medium text-sm px-4 py-2 focus:outline-none"
             @click="state.tagMenuShow = !state.tagMenuShow">
              <span>Nouveau tag</span>
              <button :class="{hidden: state.tagMenuShow}" style="transform: rotate(45deg)" type="button" class="text-white hover:text-slate-900 text-sm px-1 inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <button :class="{hidden: !state.tagMenuShow}" type="button" class="text-white hover:text-slate-900 text-sm px-1 inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
        </div>
        <!-- Afficher le input -->
        <div class="" v-if="state.tagMenuShow">
          <input class="bg-gray-50 border-b border-gray-300 text-gray-900 text-sm  block w-full p-2.5 focus:border-emerald-400 focus:outline-none mb-4"
            type="text" placeholder="Libélle du tag" v-model="state.tagTitle" @keyup.enter="newTag">
        </div>
        <!-- Afficher tous tags -->
        <div class="mb-3 flex">
          <div v-for="tag in tags" :key="tag.title" class="flex justify-between items-center p-1 m-1 cursor-pointer w-max" 
            @click="addTagUsed(tag)" :class="{ 'bg-emerald-400 text-white' : tag.use}">
            <span>{{ tag.title }}</span>
            <button type="button" :class="{'text-white' : tag.use, 'text-gray-400' : !tag.use, }" class="hover:text-slate-900 text-sm px-1 inline-flex items-center">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>

        <p>{{ state.tagUsed }}</p>

        <!-- tag list -->
        <button type="submit" class="text-white bg-emerald-400 font-medium text-sm px-4 py-2 focus:outline-none">Ajouter</button>
      </div> 
    </div>
  </form>
<!-- Form -->



</template>