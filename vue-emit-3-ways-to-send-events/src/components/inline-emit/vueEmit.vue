<template>
  <custom-text-input @customChange="logChange"></custom-text-input>
  <p>{{ TextInput }}</p>
</template>

<script>

import customTextInput from './customTextInput.vue'

export default {
  components: {
    customTextInput
  },
  data() {
    return {
      TextInput: ''
    }
  },
  methods: {
    logChange (event) {
      console.log(event);
      this.TextInput =event
    }
  }
}
</script>