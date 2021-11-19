<template>
  <router-view/>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadProducts')
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}
body {
  background:#101012;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
