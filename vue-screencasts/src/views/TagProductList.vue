<template>
  <h2>Products w/ Tag {{ this.$route.params.name }}</h2>

  <div v-for="tag in tags" :key="tag">
    {{ tag.title }} <br>
    {{ tag.price }} <br>
    {{ tag.rating.rate }}
  </div>
</template>
<script>
export default {
  computed: {
    tags() {
      return this.$store.state.products.filter( product => product.category == this.$route.params.name)
    }
  }
}
</script>