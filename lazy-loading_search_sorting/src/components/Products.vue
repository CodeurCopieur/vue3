<template>
  <section class="text-gray-600 body-font mx-4">

    <form class="container mx-auto bg-white rounded py-8 mb-4 md:flex md:justify-around items-center">
        <input 
              type="text" 
              class="md:w-3/5 w-full shadow appearance-none border rounded text-gray-700 py-2 px-3 focus:outline-none focus:shadow-outline"
              @keyup="search($event.target.value)"
              placeholder="Search">
          <select 
            name="" 
            id=""
            class="md:w-1/5 w-full form-select mt-10 md:mt-0 block w-full border p-3 rounded text-xs bg-white" >
            <option value="asc">Prix Croissant</option>
            <option value="desc">Prix Decroissant</option>
            </select>
    </form>

    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 md:w-1/2 p-4 w-full" v-for="product in products" :key="product.id">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-center object-contain w-full h-full block" :src="product.image">
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{product.category}}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{product.title}}</h2>
            <p class="mt-1">${{product.price}}</p>
          </div>
        </div>
      </div> 
      <button class="flex mx-auto my-6 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Plus</button>
    </div>
</section>
</template>

<script>
  export default {
    name: "Products",
    props: ['products','filters'],
    emits: ['set-filters'],
    setup(props, {emit}) {
      const search = (s) => {
        emit('set-filters', {s})
      }

      return {
        search
      }
    }
  }
</script>