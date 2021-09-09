<template>
  <div>
    <section class="score">
      Player <span>0</span> x
      <span>0</span> Computer
    </section>

    <h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolorum accusamus, vel beatae perspiciatis eos atque iste dicta inventore eligendi repudiandae, alias eveniet sunt minima molestias itaque fugiat veniam ad.
    </h1>

    <input type="radio" value="true">
    <label for=""> True </label>
    <br>

    <input type="radio" value="false">
    <label for=""> false </label>
    <br>
    
    <button class="send">Send</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
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
  margin: 60px auto;
  max-width: 960px;


  input[type="radio"] {
    margin: 12px 4px;
  }

  .send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color:#2c3e50;
    border: 1px solid #2c3e50;
    cursor: pointer;
  }
}
</style>
