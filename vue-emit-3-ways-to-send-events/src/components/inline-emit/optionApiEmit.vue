<template>
  <div>
    <p>Custom Text Input</p>
    <input 
      type="text"
      placeholder="Custom Text Input"
      @change="sendChange">
  </div>
</template>

<script>
export default {
  methods: {
    sendChange (event) {
      this.$emit("optionApi", event.target.value)
    }
  }
}
</script>