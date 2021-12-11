<template>
  <div class="maj">
    <h2>Composation 2</h2>
    <input type="text" v-model="state.entree">
    <span>{{ state.sortie}}</span>
  </div>
</template>

<script>

import {reactive, computed} from 'vue';

export default {
  name: 'Majuscules',
  setup() {
    let state = reactive({
      entree: '',
      sortie: computed(() => {
        return state.entree.toUpperCase();
      })
    });

    return {
      state,
    }
  }
}
</script>

<style>

</style>