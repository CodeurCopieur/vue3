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
  setup(props, {emit}) {

    const sendChange = (event) =>  {
      emit("compositionApi", event.target.value)
    }
    
    return {
      sendChange
    }
  }

 
}
</script>