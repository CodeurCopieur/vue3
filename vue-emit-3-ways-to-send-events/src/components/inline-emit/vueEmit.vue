<template>
  <inline-emit @customChange="logChange"></inline-emit>
  <p>{{ TextInput }}</p>
</template>

<script>

import inlineEmit from './inlineEmit.vue'

export default {
  components: {
    inlineEmit
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