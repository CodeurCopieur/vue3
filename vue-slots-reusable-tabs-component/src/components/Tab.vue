<template>
  <article 
    class="h-60 p-4 sm:p-6 lg:p-4 xl:p-6 space-x-4  sm:space-x-6 lg:space-x-4 xl:space-x-6 flex items-center justify-center"
    v-show="title == selectTitle">
    <slot></slot>
  </article>
</template>

<script>

  import { inject } from 'vue'
  export default {
    props: ['title'],
    setup() {
      const selectTitle = inject("selectedTitle")


      return {
        selectTitle
      }
    }
  }
</script>