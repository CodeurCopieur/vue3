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
        s: '',
        sort: ''
      })

      onMounted(async ()=> {
        const res = await fetch('https://fakestoreapi.com/products')
        const content = await res.json()

        allProducts.value = content;
        filteredProducts.value = content;

        console.log(filteredProducts.value);
      })

      const filtersChanged = (f)=> {
        filters.s = f.s;
        filters.sort = f.sort;

        let products = allProducts.value.filter( p => p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);

        if(filters.sort === 'asc' || filters.sort === 'desc'){
          products.sort((a, b) => {
            const diff = a.price - b.price;

            if(diff === 0) return 0;

            const sign = Math.abs(diff) / diff; // -1, 1

            return filters.sort === 'asc' ? sign : -sign;

            // la valeur mathematique absolue de la diff divisé par la diff
            // -1 : prix inférieur
            //  1 : prix supérieur
            //  0 : prix similaire
          })
        }

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