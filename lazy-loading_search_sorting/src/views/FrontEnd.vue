<template>
  <Products :products="filteredProducts" :filters="filters" @set-filters="filtersChanged"/>
</template>

<script>

  import Products from "../components/Products.vue";
  import {ref, reactive, onMounted} from 'vue'

  export default {
    name: "Frontend",
    components: {Products},
    setup() {
      const allProducts = ref([])
      const filteredProducts = ref([])
      const filters = reactive({
        s: ''
      })

      onMounted(async ()=> {
        const res = await fetch('https://fakestoreapi.com/products')
        const content = await res.json()

        allProducts.value = content
        filteredProducts.value = content

        console.log(filteredProducts.value);
      })

      const filtersChanged = (f)=> {
        filters.s = f.s

        let products = allProducts.value.filter( p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);

        filteredProducts.value = products
      }

      return {
        filteredProducts,
        filters,
        filtersChanged
      }
    }
  }
</script>