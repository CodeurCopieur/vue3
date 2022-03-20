<template>
  <div>
    <p>Custom Text Input</p>
    <input 
      type="text"
      placeholder="Custom Text Input"
      @change="$emit('customChange', $event.target.value)">
  </div>
</template>

<script>

</script>