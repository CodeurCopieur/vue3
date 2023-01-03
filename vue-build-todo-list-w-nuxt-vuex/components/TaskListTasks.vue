<template>
  <div :class="`task ${ task.done ? 'is-complete' : ''}`">
    <div class="content">
      {{ task.content }}
    </div>
    <div class="buttons">
      <button>{{ task.done ? 'Undo' : 'Done' }}</button>
      <button class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskListProducts',
  props: ['task']
}
</script>