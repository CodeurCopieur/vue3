<template>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>

      <div class="flex flex-wrap -m-2">
        <Suspense>
          <template #default>
            <ProfileCard></ProfileCard>
          </template>
          <template #fallback>
            <ProfileCardSkeleton></ProfileCardSkeleton>
          </template>
        </Suspense> 
       </div>
    </div>
  </section>
</template>

<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
