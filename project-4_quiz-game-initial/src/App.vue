<template>
  <div>
    <scoreBoard/>

    <template v-if="this.question">
      <h1 v-html="this.question"></h1>
        <div style="display: flex; align-items: center; justify-content: center;">
          <template v-for="(answer, index) in this.answers" :key="index">
            <input 
              type="radio" 
              name="option" 
              :id="answer" 
              :value="answer" 
              :disabled="this.submittedAnswer"
              v-model="this.chosenAnswer">
            <label :for="answer" v-html="answer"></label>
            <br>
          </template>
        </div> 
        
        <button v-if="!this.submittedAnswer" @click="this.submitAnswer()" type="button" class="send">Send</button>

      <section v-if="this.submittedAnswer" class="result">
        <h4 v-if="this.chosenAnswer == this.correctAnswer">
          &#9989; Congratulation, la réponse "<span v-html="this.correctAnswer"></span>" est correcte.
          </h4>
        <h4 v-else>
          &#10060; Désolé, ton choix n'est pas correct. la reponse est "<span v-html="this.correctAnswer"></span>".
          </h4>
        <button @click="this.getQuestion()" type="button" class="send">Question suivante</button>
      </section>
    </template>
   
  </div>
</template>

<script>

import ScoreBoard from '@/components/ScoreBoard'

export default {
  name: 'App',
  components: {
    ScoreBoard
  },
  data(){
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      submittedAnswer: false
    }
  },
  computed: {
    answers() {
      const answers = this.incorrectAnswers;
      answers.splice(Math.round(Math.random() * answers.length) , 0 , this.correctAnswer);
      return answers;
    }
  },
  methods: {
    submitAnswer() {
      if(!this.chosenAnswer) {
        alert('Choisis une réponse !!');
      } else {
        this.submittedAnswer = !this.submittedAnswer;
        this.chosenAnswer == this.correctAnswer ? console.log('oui') : console.log('non')
      }
    },
    getQuestion(){

      this.submittedAnswer = false;
      this.chosenAnswer = undefined;
      this.question = undefined;

      this.axios.get('https://opentdb.com/api.php?amount=10&category=21').then( response => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
      })
    }
  },
  created() {
    this.getQuestion();
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
