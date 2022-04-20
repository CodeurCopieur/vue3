<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }

  body {
    background-color: #193364;
  }

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 1rem;
    background-color: #4186b4;
    box-shadow: 0px 0px 0.375rem rgba(0, 0, 0, .1);

    h1 {
      color: #fff;
      font-size: 1.75rem;

      span {
        color: #193364;
      }
    }
  }
</style>
