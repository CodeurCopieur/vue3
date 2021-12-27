<template>
<header class="text-white body-font bg-indigo-500">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <router-link to='/' class="flex title-font font-bold items-center">
        <h1 class="ml-3 text-2xl">HOME</h1>
      </router-link>
    </nav>
  </div>
</header>
<div class="max-w-6xl mx-auto ">
  <router-view/>
</div>
  
</template>
