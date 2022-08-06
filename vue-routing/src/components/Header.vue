<template>
  <header class="text-center bg-sky-600 text-white p-4">
    <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
      <router-link to='/' class="flex title-font font-bold items-center">
        <h1 class="ml-3 text-2xl">Vue Routing</h1>
      </router-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <router-link to='/' class="mr-5 font-medium hover:text-gray-900">Home</router-link>
        <router-link to='/posts' class="mr-5 font-medium hover:text-gray-900">Posts</router-link>
        <router-link to='/createPost' class="mr-5 font-medium hover:text-gray-900">Create Post</router-link>
      </nav>
    </div>
  </header>
</template>