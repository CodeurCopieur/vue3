<template>
  <section class="score">
      Player <span>{{ winCount }}</span> x
      <span>{{ loseCount }}</span> Computer
    </section>
</template>

<script>

  export default {
    name: 'ScoreBoard',
    props: {
      winCount: Number,
      loseCount: Number
    }
  }
</script>

<style lang="scss">
  .score {
    padding: 24px;
    font-size: 18px;
    border-bottom: 1px solid black;
  }
</style>
