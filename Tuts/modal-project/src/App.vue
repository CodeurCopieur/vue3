<template lang="pug">
h1 {{ title }}

.container
  input(type="text" ref="name") 
  br
  span {{ value }}
  br
  button(@click="handleClick") Click me
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue JS 3 Tutorial for Beginners',
      value: ''
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.value = this.$refs.name.value;
      this.$refs.name.classList.add('test')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
