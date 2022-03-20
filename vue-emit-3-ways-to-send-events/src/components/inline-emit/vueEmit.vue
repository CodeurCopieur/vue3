<template>

  <div style="margin-bottom: 60px;">
    <h2>Inline Emit</h2>
    <inline-emit @customChange="InlineEmit"></inline-emit>
    <p>{{ first }}</p>
  </div>

  <div style="margin-bottom: 60px;">
    <h2>Option Api</h2>
    <option-api-emit @optionApi="optionApi"></option-api-emit>
    <p>{{ second }}</p>
  </div>

  <div>
    <h2>composition Api</h2>
    <composition-api-emit @compositionApi="compositionApi"></composition-api-emit>
    <p>{{ third }}</p>
  </div>
</template>

<script>

import inlineEmit from './inlineEmit.vue'
import optionApiEmit from './optionApiEmit.vue'
import compositionApiEmit from './compositionApiEmit.vue'


export default {
  components: {
    inlineEmit, optionApiEmit, compositionApiEmit
  },
  data() {
    return {
      first: '',
      second: '',
      third : ''
    }
  },
  methods: {
    InlineEmit (event) {
      console.log(event);
      this.first = event;
    },
    optionApi (event) {
      this.second = event;
    },
    compositionApi (event) {
      this.third = event;
    }
  }
}
</script>