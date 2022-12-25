<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([]) // tableau de tâches
const name = ref('') // prénom du  user

const input_content = ref('') // titre de la tâche
const input_category = ref(null) // type de catégorie de la tâches (business | personal)

const todo_asc = computed(() => todos.value.sort( (a,b ) => b.createdAt - a.createdAt))

watch(name, newVal => localStorage.setItem('name', newVal)) // on observe name et on insere dans le localstorage

onMounted(() => name.value = localStorage.getItem('name') || '') // au montage du DOM si dans le localstorage  la clé 'name' existe on affecte à la variable name la valeur de la clé 'name'

const addTodo = () => {

};
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        Quoi de neuf, <input type="text" placeholder="Nom ici ?" 
          v-model="name">
      </h2>
    </section>

    <section class="create-todo">
      <h3>Créer une liste de choses à faire</h3>

      <form @submit.prevent="addTodo">
        <h4>Qu'y a-t-il sur votre liste de tâches</h4>

        <input type="text" placeholder="Titre de la tâche" 
          v-model="input_content">

        <h4>choisissez une catégorie</h4>
        <div class="options">
          <label>
            <input type="radio" name="category" id="category1" value="business"
              v-model="input_category">
            <span class="bubble business"></span>
            <div>Business</div>
          </label>
          <label>
            <input type="radio" name="category" id="category2" value="personal"
              v-model="input_category">
            <span class="bubble personal"></span>
            <div>Business</div>
          </label>
        </div>

        <input type="submit" value="ajouter une tâche">

      </form>
    </section>
  </main>
</template>