<template>
   <div class="root h-screen relative flex justify-center items-center">
     <button 
     class="block mx-auto text-center w-60 md:w-64 xl:w-60 bg-teal-400 text-teal-900 hover:bg-teal-300 rounded-lg font-semibold p-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
     @click="isOpen = true"> Open </button>
     <teleport to="body">
        <div class="modal absolute top-0 left-0 w-full h-full flex justify-center items-center" v-if="isOpen">
          <modal-content 
            @close="isOpen = false"
            title="Use Vue Teleport"
            msg="to Make Modals and Popups" />
        </div>
     </teleport>
   </div>
</template>
<script setup>
import {ref} from 'vue'
import ModalContent from './ModalContent.vue'

const isOpen = ref(false);

</script>

<style>
  .modal {
    background-color: rgba(0, 0, 0, .1);
  }
</style>