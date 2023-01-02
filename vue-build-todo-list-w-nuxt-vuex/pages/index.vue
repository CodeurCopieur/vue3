<template>
  <main>
    <h1>Tableau de Tâche</h1>
    <p>Créer une liste de tâches</p>

    <div class="create-new">
        <input type="text" placeholder="Ajouter une tâche"
          v-model="newTask" 
          @keypress.enter="addTask">
        <button>Ajout</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
