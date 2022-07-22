<script setup>
  import { reactive, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  // const tasks = computed(()=> store.getters.getTasks)

  import { mapGetters } from '../store/map-state'

  const { getTasks } = mapGetters();
  const filter = reactive({f: 'all'});

  const tasksFilter = computed(()=>  {
    if(filter.f === 'active') {
      return store.getters.getNotCompletedTasks;
    } else if(filter.f === 'completed') {
      return store.getters.getCompletedTasks;
    } else if(filter.f === 'all') {
      return store.getters.getTasks;
    }
  });
</script>

<template>
    <ul role="list" class="flex justify-evenly mb-8">
      <li>
        <a class="py-2 pr-4 pl-3 inline-block border-2 border-emerald-500" href="#" @click="filter.f = 'active'" :class="{'bg-emerald-500 text-white': filter.f === 'active' }">Active</a>
      </li>
      <li>
        <a class="py-2 pr-4 pl-3 inline-block border-2 border-emerald-500"  href="#" @click="filter.f  = 'completed'" :class="{'bg-emerald-500 text-white': filter.f === 'completed' }">Completed</a>
      </li>
      <li>
        <a class="py-2 pr-4 pl-3 inline-block border-2 border-emerald-500"  href="#" @click="filter.f  = 'all'" :class="{'bg-emerald-500 text-white': filter.f === 'all' }">All</a>
      </li>
    </ul>
    <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li  
        v-for="task in tasksFilter"
        :key="task.id"
        :class="{ completed: task.completed }"
      class="w-full px-4 py-4 border-b border-gray-200 dark:border-gray-600 flex flex-wrap flex-col shadow-lg shadow-emerald-500/50 mb-6">
      <header class="w-full flex justify-between mb-3 relative">
        <div>
          <button type="button" class="w-40 text-white bg-emerald-500 hover:bg-emerald-600 font-medium  text-sm px-5 py-2.5 mr-4 focus:outline-none">{{ task.whatWatch}}</button>
          <span>Total Time : {{task.time}}</span>
        </div>
        <button type="button" class="text-gray-400 bg-transparent hover:bg-emerald-500 hover:text-white h-6 top-0 text-sm px-1 inline-flex items-center" data-modal-toggle="defaultModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </header>
      <div class="flex items-center">
        <div class="flex items-left h-5">
          <input v-model="task.completed" :id="`${task.id}`" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
        </div>
        <div class="ml-2 text-base">
            <label :for="`${task.id}`" :class="{'line-through' : task.completed}" class="font-medium text-gray-900 ">{{ task.title }}</label>
            <p id="helper-checkbox-text" :class="{'line-through' : task.completed}"  class="text-sm font-normal text-gray-500 "> {{ task.description}}</p>
        </div>
      </div> 
      <footer class="block">
        <div class="mb-3 flex">
          <div v-for="tag in task.tagsUsed" :key="tag" class="flex justify-between items-center p-1 m-1 cursor-pointer w-max bg-emerald-400 text-white">
            <span class="capitalize">{{ tag.title }}</span>
          </div>
        </div>
      </footer>
    </li>
  </ul>
</template>