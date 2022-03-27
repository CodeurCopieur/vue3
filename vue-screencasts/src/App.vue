<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadProducts');
  }
}
  
</script>

<style lang="scss">

a{
  text-decoration: none;
  color: inherit;
}

img{
    max-width: 100%;
    height: auto;
    display: block;
}

  
figure {
    margin: 0;
    overflow: hidden;
    position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
