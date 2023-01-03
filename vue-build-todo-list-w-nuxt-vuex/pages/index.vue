<template>
  <main>
    <h1>Tableau de Tâche</h1>
    <p>Créer une liste de tâches</p>

    <div class="create-new">
        <input type="text" placeholder="Ajouter une tâche"
          v-model="newTask" 
          @keypress.enter="addTask">
        <button @click="addTask">Ajout</button>
    </div>

    <div class="tasks">
      <!-- Component -->
      <TaskListTasks 
        v-for="(task, i) in tasks" 
        :key="i"
        :task="task"/>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }

  },
  computed: {
      tasks() {
        return this.$store.state.tasks
      }
    }
}
</script>
