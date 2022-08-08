<script setup>
  import {reactive, computed} from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const state = reactive({
    //taskId: 3,
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
    tagTitle: '',
    taskTime: '',
    // recupère les tags présent dans les getters tags
    tags: computed(() => {
      return store.getters.tags
    }),
    submitStatus: '',
  });

  const newTask = (e) => {
    e.preventDefault();

    // si tagTitle est vide 
    if(state.taskTitle === '')  {
      return
    }

    // si taskWhatWatch est égale à Film
    if(state.taskWhatWatch === 'Film') {
      state.taskTime = state.filmTime;
    } else {
      state.taskTime = state.serialTime;
    }
    
    const task = {
      title: state.taskTitle,
      description: state.taskDescription,
      whatWatch: state.taskWhatWatch,
      time: state.taskTime,
      tagsUsed: JSON.parse(JSON.stringify(state.tagUsed)),
      completed: false,
      editing: false
    }

    store.dispatch("newTask", task);

    // Reset
    state.taskTitle = ''
    state.taskDescription = ''
    state.taskWhatWatch = ''
    state.tagUsed = []

    // Parcourir state.tags(getters tags) afin de rest use:false de chaque tag

    for (let index = 0; index < state.tags.length; index++) {
      const element = state.tags[index];
      JSON.parse(JSON.stringify(element.use = false));
    }
  };

  // fonction qui convertie en heures et minutes
  const getHoursAndMinutes = (minutes) => {
    let hours = Math.trunc(minutes / 60)
    let min = minutes % 60
    return hours + ' Heures ' + min + ' Minutes'
  };
  // click sur un tag push vers tagUsed ou retire le tag(use:true) sur lequel j'ai cliqué
  const addTagUsed = (tag) => {
    tag.use = !tag.use
    if(tag.use) {
      state.tagUsed.push({title: tag.title, use: tag.use})
    } else {
      const found = state.tagUsed.find(elt => elt.title === tag.title)
      const isLargeNumber = (element) => element === found;

      state.tagUsed.splice(state.tagUsed.findIndex(isLargeNumber), 1)
    }
  };

  const newTag = () => {
    // si tagTitle ou taskTitle est vide 
    if(state.tagTitle === '' || state.taskTitle === '') {
      return;
    }

    const tag = {
      title: state.tagTitle,
      use: false
    }
    store.dispatch("newTag", tag);

    // on vide tagTitle 
    state.tagTitle = ''
  };

</script>
<template>




<!-- Form -->
  <form @submit="newTask">
    <div class="grid gap-6">
      <div class="sm:mx-auto md:mx-0 px-4 md:px-0">
        <input type="text" 
          v-model="state.taskTitle"
          name="taskTitle"
          id="taskTitle" class="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 mb-4 focus:border-emerald-400 focus:outline-none" placeholder="Ce que nous allons regarder ?">
        <textarea 
          name="taskDescription" 
          id="taskDescription" 
          v-model="state.taskDescription" 
          class="block p-2.5 w-full text-sm text-gray-900 border-b border-gray-300 focus:border-emerald-400 focus:outline-none mb-4" placeholder="Votre message ?"
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
        <div class="mb-3 flex justify-center items-center cursor-pointer text-white bg-emerald-500 px-4 py-2 focus:outline-none"
             @click="state.tagMenuShow = !state.tagMenuShow">
              <span>Nouveau tag</span>
              <button v-if="state.tagMenuShow" style="transform: rotate(45deg)" type="button" class="text-white hover:text-slate-900 text-sm px-1 inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <button v-else type="button" class="text-white hover:text-slate-900 text-sm px-1 inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
        </div>

        <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown">
          <div class="flex flex-wrap mb-4" v-if="state.tagMenuShow">
          <!-- Afficher le input -->
          
            <input class="border-b border-gray-300 text-gray-900 text-sm mr-2 block p-2.5 focus:border-emerald-500 focus:outline-none w-full md:w-2/4 mb-4 md:mb-0"
            type="text" placeholder="Libélle du tag" v-model="state.tagTitle">
             <!-- @keyup.enter.stop.prevent="newTag" -->
            <button @click.stop.prevent="newTag" class="w-full md:w-2/5 text-white bg-emerald-500 focus:outline-none px-4 py-2">Ajouter</button>
          </div>
        </transition>
        <!-- Afficher tous tags -->
        <div class="flex flex-wrap mb-3">
          <transition-group enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutDown">
            <div v-for="tag in state.tags" :key="tag.title" class="flex justify-between items-center p-1 m-1 cursor-pointer w-max" 
              @click="addTagUsed(tag)" :class="{ 'bg-emerald-500 text-white' : tag.use}">
              <span class="capitalize">{{ tag.title }}</span>
              <button type="button" :class="{'text-white' : tag.use, 'text-gray-400' : !tag.use, }" class="hover:text-slate-900 text-sm px-1 inline-flex items-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </transition-group> 
        </div>

        <p>{{ state.tagUsed }}</p>

        <!-- tag list -->
        <button type="submit" class="text-white bg-emerald-500 px-4 py-2 focus:outline-none">Ajouter</button>
      </div> 
    </div>
  </form>
<!-- Form -->
</template>