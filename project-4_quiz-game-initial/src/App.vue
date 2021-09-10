<template>
  <div>
    <section class="score">
      Player <span>0</span> x
      <span>0</span> Computer
    </section>

    <h1 v-html="this.question"></h1>

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

export default {
  name: 'App',
  data(){
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined
    }
  },
  methods: {
    getList(){
      this.axios.get('https://opentdb.com/api.php?amount=10&category=21').then( response => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
      })
    }
  },
  created() {
    this.getList();
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
