<template>
  <div class="maj">
    <h2>Composation 2</h2>
    <input type="text" name="" id="" v-model="state.entree" @keyup="Maj">
    <span>{{ state.sortie}}</span>
  </div>
</template>

<script>

import {reactive} from 'vue';

export default {
  name: 'Majuscules',
  setup() {
    let state = reactive({
      entree: '',
      sortie: ''
    });

    function Maj(){
      state.sortie = state.entree.toUpperCase();
    }

    return {
      state,
      Maj
    }
  }
}
</script>

<style>

</style>