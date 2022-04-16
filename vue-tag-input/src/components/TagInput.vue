<template>
  <div class="tag-input">
    <div 
      v-for="(tag, i) in tags"
      :key="i"
      class="tag-input__tag">
        <span @click="removeTag(i)">x</span>
        {{ tag }}
    </div>
    <input 
      type="text" 
      placeholder="Entrer un tag"
      class="tag-input__text"
      @keydown="addTag"
      @keydown.delete="removeLastTag">
  </div>
</template>

<script setup>

  import {ref} from 'vue'

  const tags = ref(['hello', 'world']);

  const addTag = (e) => {
    if(e.code == "Comma" || e.code == "Enter") {
      e.preventDefault();
      
      var val = e.target.value.trim();

      if(val.length > 0) {
        tags.value.push(val);
        e.target.value = '';
      }
    }
  };

  const removeTag = (i) => {
    tags.value.splice(i, 1);
  }

  const removeLastTag = (e) =>{
    if(e.target.value.length === 0) {
      removeTag(e.target.value.length - 1)
    }
  }


</script>

<style scoped>
  .tag-input {
    width: 100%;
    border: 1px solid #eee;
    font-size: 0.9em;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .tag-input__tag {
    height: 30px;
    float: left;
    margin-right: 10px;
    background-color: #eee;
    margin-top: 10px;
    line-height: 30px;
    padding: 0 5px;
    border-radius: 5px;
  }

  .tag-input__tag > span {
    cursor: pointer;
    opacity: 0.75;
  }

  .tag-input__text {
    border: none;
    outline: none;
    font-size: 0.9em;
    line-height: 50px;
    background: none;
  }
</style>