<script setup>
  import {ref, reactive} from 'vue'

  const tasks = ref([
    { id: 1, title: 'title 1', description: 'description 1', whatWatch: 'Film', completed: false, editing: false },
    { id: 2, title: 'title 2', description: 'description 2', whatWatch: 'Serial', completed: false, editing: false }
  ]);

  
</script>

<template>
    <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li  
        v-for="task in tasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex flex-wrap items-center">
      <header class="w-full flex justify-between mb-3 relative">
        <div>
          <button type="button" class="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{{ task.whatWatch}}</button>
          <span>Total Time : {{task.title}}</span>
        </div>
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 h-6 top-0 text-sm px-1 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </header>
      <div class="flex items-center">
        <div class="flex items-center h-5">
          <input v-model="task.completed" id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class="ml-2 text-base">
            <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">{{ task.title }}</label>
            <p id="helper-checkbox-text" class="text-sm font-normal text-gray-500 dark:text-gray-300"> {{ task.description}}</p>
        </div>
      </div> 
    </li>
  </ul>
</template>