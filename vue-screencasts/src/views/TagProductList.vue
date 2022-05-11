<template>
  <h2>Products w/ Tag {{ this.$route.params.name }}</h2>

    <section class="component-products">
      <div class="component-products__container">

        <article class="component-products__card" v-for="tag in tags" :key="tag">
            <router-link :to="{name: 'product-watch', params: { id:tag.id}}">
              <figure>
                <picture class="component-products__wrap-image">
                  <img :src="tag.image" alt="">
                </picture>
              </figure>
              <h3>{{ tag.title }}</h3>
            </router-link>
              <div>
                <p>{{ tag.price }}€</p>
                <p>{{ tag.category }}</p>
                <p>{{ tag.description }}</p>
              </div>
        </article>
      </div>
    </section>
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