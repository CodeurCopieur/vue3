<template>
 <h1 style="text-align: center">Home</h1>

   <ul style="list-style:none; padding-left: 0;">
    <li><router-link :to="{name: 'Post', params: { id: 1, title: 'First' } }">Post 1</router-link></li>
    <li><router-link :to="{name: 'Post', params: { id: 2, title: 'Second' } }">Post 2</router-link></li>
    <li><router-link :to="{name: 'Post', params: { id: 3, title: 'Third' } }">Post 3</router-link></li>
  </ul>
</template>
