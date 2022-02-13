<template>
  <div class="max-w-4xl mx-auto relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10">
      <nav class="py-4 px-4 sm:px-6 lg:px-4 xl:px-6 text-sm font-medium">
        <ul class="flex space-x-3">
          <li 
             class="px-3 py-2 rounded-md bg-slate-50 cursor-pointer dark:bg-transparent dark:text-slate-300 dark:ring-1 dark:ring-slate-700 text-white"
             v-for="title in tabTitles" :key="title"
             :class="[title == selectedTitle ? 'bg-emerald-600' : 'bg-slate-500' ]"
             @click="selectedTitle = title"
              >{{ title }}</li>
        </ul>
      </nav>
      <slot></slot>
  </div>
</template>

<script>
  import { ref,provide } from 'vue'
  export default {
    setup(props, { slots }) {
      const tabTitles = ref(slots.default().map( (tab) => tab.props.title))
      const selectedTitle =  ref(tabTitles.value[0])

      provide("selectedTitle", selectedTitle)

      return {
        tabTitles,
        selectedTitle
      }
    }
  }
</script>