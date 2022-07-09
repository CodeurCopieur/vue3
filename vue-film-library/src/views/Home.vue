<script setup>
  import {ref} from 'vue'

  const page = ref('');
  const taskTitle = ref('');
  const tasks = ref([
    { id: 1, title: 'title 1', description: 'description 1', whatWatch: 'Film', completed: false, editing: false },
    { id: 2, title: 'title 2', description: 'description 2', whatWatch: 'Serial', completed: false, editing: false }
  ]);

  page.value = 'Home';

</script>
<template>


<!-- Breadcrumb -->
  <nav class="flex justify-center py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 my-4" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
          {{page}}
        </a>
      </li>
    </ol>
  </nav>
<!-- Breadcrumb -->

<!-- Form -->
  <form>
    <div class="grid gap-6 mb-6">
      <div class="mb-6 mx-auto">
        <input type="text" v-model="taskTitle" id="taskTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ce que nous allons regarder ?" required>
    </div> 
    </div>
  </form>
<!-- Form -->

  <ul class="text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li  
        v-for="task in tasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      class="w-full px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex flex-wrap items-center">
      <header class="w-full flex justify-between mb-3">
        <div>
          <button type="button" class="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{{ task.whatWatch}}</button>
          <span>Total Time : {{task.title}}</span>
        </div>
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm px-1 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
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