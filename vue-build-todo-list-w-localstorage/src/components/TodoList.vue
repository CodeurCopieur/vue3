<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([]) // tableau de tâches
const name = ref('') // prénom du  user

const input_content = ref('') // titre de la tâche
const input_category = ref(null) // type de catégorie de la tâches (business | personal)

const todo_asc = computed(() => todos.value.sort( (a,b ) => a.createdAt - b.createdAt))

watch(todos, newVal => localStorage.setItem('todos', JSON.stringify(newVal)), {deep: true}) // on observe todos et on insere dans le localstorage
watch(name, newVal => localStorage.setItem('name', newVal)) // on observe name et on insere dans le localstorage

onMounted(() => {
  name.value = localStorage.getItem('name') || ''; // au montage du DOM si dans le localstorage  la clé 'name' existe on affecte à la variable name la valeur de la clé 'name' sinon c'est vide
  todos.value = JSON.parse(localStorage.getItem('todos')) || [] // au montage du DOM si dans le localstorage  la clé 'todos' existe on affecte à la variable name la valeur de la clé 'todos' sinon c'est vide
  }) 

const addTodo = () => {

  if(input_content.value.trim() === "" || input_category.value === null) {
    return
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })

  // Reset
  input_content.value = ""
  input_category.value = null
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

    <section class="todo-list">
      <h3>Liste de choses à faire</h3>
      <div class="list">

        <div v-for="todo in todo_asc" :key="todo" :class="`todo-item ${todo.done && 'done'}`">
          <label>
            <input type="checkbox" v-model="todo.done"/>
            <span :class="`bubble ${todo.category === 'business' ? 'business' : 'personal'}`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content">
          </div>
        </div>

      </div>
    </section>
  </main>
</template>