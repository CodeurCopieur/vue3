<template>
  <div class="maj">
    <h2>Composation 2</h2>
    <input type="text" name="" id="" v-model="entree" @keyup="Maj">
    <span>{{ sortie}}</span>
  </div>
</template>

<script>

import {ref} from 'vue';

export default {
  name: 'Majuscules',
  setup() {
    let entree = ref('');
    let sortie = ref('');

    function Maj(){
      sortie.value = entree.value.toUpperCase();
    }

    return {
      entree,
      sortie,
      Maj
    }
  }
}
</script>

<style>

</style>