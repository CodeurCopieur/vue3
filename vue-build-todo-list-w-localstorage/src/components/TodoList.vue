<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([]) // tableau de tâches
const name = ref('') // prénom du  user

const input_content = ref('') // titre de la tâche
const input_category = ref(null) // type de catégorie de la tâches (bussiness | personnel)

const todo_asc = computed(() => todos.value.sort( (a,b ) => b.createdAt - a.createdAt))

watch(name, newVal => localStorage.setItem('name', newVal)) // on observe name
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        Quoi de neuf, <input type="text" placeholder="Nom ici ?" v-model="name">
      </h2>
    </section>
  </main>
</template>